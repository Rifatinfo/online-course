import {z} from "zod";

export const courseLevel = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Draft", "Published", "Archived"];

export const courseSchema = z.object({
    title : z.string().min(3, {message : "Title must be at least 3 characters long"}).max(100),
    description : z.string().min(3),
    fileKey : z.string().min(1),
    price : z.coerce.number().min(1),
    duration : z.coerce.number().min(1).max(500),
    level : z.enum(courseLevel),
    smallDescription : z.string().min(3).max(3),
    slug : z.string().min(3),
    status : z.enum(courseStatus),
    category : z.string().min(1)
})

export type CourseSchemaType = z.infer<typeof courseSchema>;