"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { chapterSchema, ChapterSchemaType } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewChapterModal = ({courseId} : {courseId : string}) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [pending, startTransition] = useState(false);
    
    async function onSubmit(value : ChapterSchemaType) {
        console.log(value);
    }
    const form = useForm({
            resolver: zodResolver(chapterSchema),
            defaultValues: {
                name : "",
                // courseId,
                 courseId : courseId,
            },
        })

    function handleOpenChange(open : boolean){
        setIsOpen(open);
    }
    return (
        <div>
            <Dialog open={isOpen} onOpenChange={handleOpenChange}>
               <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Plus className="size-4"/> New Chapter
                  </Button>
               </DialogTrigger>

               <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create new chapter</DialogTitle>
                    <DialogDescription>
                        What would you like to name your chapter ? 
                    </DialogDescription>
                  </DialogHeader>

                  <Form {...form}>
                     <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                       <FormField
                         control={form.control}
                         name="name"
                         render={({field}) => (
                            <FormItem>
                                <FormLabel>name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Chapter Name" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                         )}
                       />

                       <DialogFooter>
                           <Button type="submit">Save Change</Button>
                       </DialogFooter>
                       {/* <DialogFooter>
                           <Button disabled={pending} type="submit">
                            {pending ? "Saving......." : "Save Change"}
                           </Button>
                       </DialogFooter> */}
                     </form>
                  </Form>
               </DialogContent>

                
            </Dialog>
        </div>
    );
};

export default NewChapterModal;