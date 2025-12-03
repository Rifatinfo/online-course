"use client";
import Uploader from "@/components/file-uploader/Uploader";
import { RichtextEditor } from "@/components/rich-text-editor/Editor";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormMessage, FormLabel, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { lessonSchema, lessonSchemaType } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LessonForm = ({ chapterId, courseId,  }) => {
    const form = useForm<lessonSchemaType>({
        // resolver: zodResolver(lessonSchema),
        // defaultValues: {
        //     name: title,
        //     chapterId: chapterId,
        //     courseId: courseId,
        //     description: description ?? undefined,
        //     videoKey: videoKey ?? undefined,
        //     thumbnailKey: thumbnailKey ?? undefined,
        // },
    });
    function onSubmit(value : lessonSchemaType){
        console.log(value);
    }
    return (
        <div className="px-4">
            <Link
                className="mb-8 outline text-white"
                href={`/admin/course/${courseId}`}>
                <Button className="mb-6"> <ArrowLeft className="size-4" />
                    <span>Go Back</span></Button>
            </Link>
            <Card>
                <CardHeader>
                    <CardTitle>lesson Configaration</CardTitle>
                    <CardDescription>Configaration the video and description for the video</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent>

                    <Form {...form}>
                        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lesson Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Chapter xyz" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lesson Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Chapter xyz" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <RichtextEditor field={field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="thumbnailKey"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Thumbnail image</FormLabel>
                                        <FormControl>
                                            <Uploader
                                                onChange={field.onChange}
                                                value={field.value}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="videoKey"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>VideoKey File</FormLabel>
                                        <FormControl>
                                            <Uploader
                                                onChange={field.onChange}
                                                value={field.value}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Save Lesson</Button>
                        </form>
                    </Form>


                </CardContent>

            </Card>
        </div>
    );
};

export default LessonForm;