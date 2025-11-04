'use client'
import { ArrowLeft, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { courseLevel, courseSchema, CourseSchemaType, courseStatus } from "@/lib/zodSchemas";
import slugify from "slugify";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { RichtextEditor } from "@/components/rich-text-editor/Editor";
const CourseCreatePage = () => {
    const form = useForm({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            title: "",
            description: "",
            fileKey: "",
            price: 0,
            duration: 0,
            level: "Beginner",
            status: "Draft",
            smallDescription: "",
            slug: "",
            category: "Development"
        },
    })

    function onSubmit(values: CourseSchemaType) {
        console.log(values)
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
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Title" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            
                                        </FormDescription>
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
                                Generate Slug <SparkleIcon className="ml-1" size={16}/>
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
                                            <Textarea placeholder="SmallDescription" {...field}  className="min-h-[120px]"/>
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
                                        <RichtextEditor/>
                                        {/* <FormControl>
                                            <Textarea placeholder="Description" {...field}  className="min-h-[120px]"/>
                                        </FormControl>
                                        <FormMessage /> */}
                                    </FormItem>
                                )}
                            />
                               <FormField
                                control={form.control}
                                name="fileKey"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Thumbnail</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Thumbnail URL" {...field}  />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                             <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Category</FormLabel>
                                         <Select 
                                         onValueChange={field.onChange}
                                         defaultValue={field.value}
                                         >
                                         <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                courseLevel.map((category) => (
                                                    <SelectItem key={category} value={category}>{category}</SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                         </Select>
                                        
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
                                            <Input  type="number" placeholder="Duration" {...field}  />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Price  */}
                             <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Price ($)</FormLabel>
                                        <FormControl>
                                            <Input  type="number" placeholder="Price" {...field}  />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* status */}
                             <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Status</FormLabel>
                                         <Select 
                                         onValueChange={field.onChange}
                                         defaultValue={field.value}
                                         >
                                         <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                courseStatus.map((category) => (
                                                    <SelectItem key={category} value={category}>{category}</SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                         </Select>
                                        
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form> 
                </CardContent>
            </Card>
        </div>
    );
};

export default CourseCreatePage;
