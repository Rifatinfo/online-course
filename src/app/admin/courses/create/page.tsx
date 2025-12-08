'use client'
import { ArrowLeft, Plus, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { courseCategory, courseStatus } from "@/lib/zodSchemas";
import slugify from "slugify";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { useFettie } from "@/hooks/use-confetti";
import { z } from "zod"
import { Button } from "@/components/ui/button";
import MultipleImageUploader from "@/components/file-uploader/MultipleImageUploader";
import { FileMetadata } from "@/hooks/use-file-upload";
import { useState } from "react";

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    description: z.string().min(3),
    thumbnail: z.array(z.any()),
    duration: z.number().int().positive(),
    price: z.number().int().positive(),
    //     price: z.coerce.number().min(1),
    //     level : z.enum(courseLevel),
    smallDescription: z.string().min(3).max(90),
    slug: z.string().min(3),
    // status : z.enum(courseStatus),
    category: z.enum(courseCategory, { message: "Category is required" }),
    course_Status : z.enum(courseStatus, { message: "Course Status is required" })
})

const CourseCreatePage = () => {
    const [images, setImages] = useState<(File | FileMetadata)[] | []>([]);
    const { run } = useFettie();
    // const form = useForm({
    //     resolver: zodResolver(courseSchema),
    //     defaultValues: {
    //         title: "",
    //         // description: "",
    //         // fileKey: "",
    //         // price: 0,
    //         // duration: 0,
    //         // level: "Beginner",
    //         // status: "Draft",
    //         // slug: "",
    //         // category: "Development"
    //     },
    // })

    // function onSubmit(values: CourseSchemaType) {
    //     console.log("field values:", values);
    //     run(); // your API call

    // )}

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
            smallDescription: "",
            description: "",
            thumbnail: [""],
            category: "Development",
            duration: 1,
            price: 0,
            course_Status : "Pending"
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values);
        run();
    }
    return (
        <div className="px-4 l:px-6">
            <div className="flex item-center gap-4 mb-10">
                <Link href="/admin/courses" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"><ArrowLeft className="size-4" /></Link>
                <h1 className="text-2xl font-bold">Create Course</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Provide basic Information about the course</CardDescription>
                </CardHeader>
                <CardContent>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* slug */}
                            <div className="flex gap-4 items-end">
                                <FormField
                                    control={form.control}
                                    name="slug"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Slug</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Slug" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="button"
                                    className="w-fit"
                                    onClick={() => {
                                        const titleValue = form.getValues("title");

                                        if (!titleValue) {
                                            return alert("Please enter a title first!");
                                        }

                                        const slug = slugify(titleValue, {
                                            replacement: "-",            // Replace spaces with -
                                            remove: /[*+~.()'"!:@,/?<>{}\[\]^`%&|]/g, // Remove unwanted characters
                                            lower: true,                 // Convert to lowercase
                                            strict: true,                // Strip special characters
                                            locale: "en",                // Use English locale (or 'vi' if you prefer Vietnamese)
                                            trim: true,                  // Trim leading/trailing spaces
                                        });

                                        form.setValue("slug", slug, {
                                            shouldValidate: true,
                                        });
                                    }}
                                >
                                    Generate Slug <SparkleIcon className="ml-1" size={16} />
                                </Button>

                            </div>

                            {/* small description  */}
                            <FormField
                                control={form.control}
                                name="smallDescription"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Small Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="SmallDescription" {...field} className="min-h-[120px]" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Description</FormLabel>

                                        {/* <RichtextEditor
                                           field={field}
                                        /> */}
                                        <FormControl>
                                            <Textarea placeholder="Description" {...field} className="min-h-[120px]" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div>
                                <MultipleImageUploader onChange={setImages} />
                            </div>

                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Category</FormLabel>

                                        <Select
                                            value={field.value || courseCategory[0]} 
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                {courseCategory.map((category) => (
                                                    <SelectItem key={category} value={category}>
                                                        {category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="course_Status"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Course Status</FormLabel>

                                        <Select
                                            value={field.value || courseCategory[0]} 
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                {courseStatus.map((category) => (
                                                    <SelectItem key={category} value={category}>
                                                        {category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* duration  */}
                            <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Duration (hours)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)} 
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Price (TK)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)} 
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="text-white">Create Course <Plus /></Button>
                        </form>
                    </Form>
                            
                    {/* <Button type="submit">Submit</Button>
                            <Button className="text-white">Create Course <Plus /></Button>
                        </form>
                    </Form> */}
                </CardContent>
            </Card>
        </div>
    );
};

export default CourseCreatePage;