import {z} from "zod";

export const courseLevel = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Draft", "Published", "Archived"] as const;
export const courseCategory = ["Development", "React", "Next Js"] as const;


export const courseSchema = z.object({
    title : z.string().min(3, {message : "Title must be at least 3 characters long"}).max(100),
    description : z.string().min(3),
    fileKey : z.string().min(1),
    duration: z.number().min(1).max(500),
    price: z.coerce.number().min(1),
    level : z.enum(courseLevel),
    smallDescription : z.string().min(3).max(30),
    slug : z.string().min(3),
    status : z.enum(courseStatus),
    category : z.enum(courseCategory, {message : "Category is required"})
})

export const chapterSchema = z.object({
  name : z.string().min(3, {message : "Name must be at least 3 character long"}),
  courseId : z.string().uuid({message : "Invalid course id"}),
})

export const lessonSchema = z.object({
    name : z.string().min(3,{message : "Name must be at lest 3 characters long"}),
    chapterId : z.string().refine((v) => v, { message: "Invalid chapter ID" }),
    courseId : z.string().refine((v) => v, { message: "Invalid course ID" }),
    description : z.string().min(3, {message : "Description must be at least 3 characters long"}).optional(),
    videoKey : z.string().optional(),
    thumbnailKey : z.string().optional(),
})

export type CourseSchemaType = z.infer<typeof courseSchema>;
export type ChapterSchemaType = z.infer<typeof chapterSchema>;
export type lessonSchemaType = z.infer<typeof lessonSchema>;