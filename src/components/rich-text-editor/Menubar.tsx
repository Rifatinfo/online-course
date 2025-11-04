import { type Editor } from "@tiptap/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Toggle } from "../ui/toggle";
import { Bold, Heading1Icon, Heading2Icon, Heading3Icon, Italic, ListIcon, ListOrdered, Strikethrough } from "lucide-react";
import { cn } from "@/lib/utils";

interface iAppProps {
    editor: Editor | null;
}

const Menubar = ({ editor }: iAppProps) => {
    if (!editor) {
        return null;
    }
    return (
        <div className="border border-input rounded-t-lg p-2 bg-card flex flex-wap gap-1 items-center">
            <TooltipProvider>
                <div className="flex flex-wrap gap-1">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("bold")} onPressedChange={() => {
                                editor.chain().focus().toggleBold().run()
                            }}
                                className={cn(
                                    editor.isActive("bold") && "bg-muted text-muted-foreground"
                                )}
                            >
                                <Bold />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Bold</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("italic")} onPressedChange={() => {
                                editor.chain().focus().toggleItalic().run()
                            }}
                                className={cn(
                                    editor.isActive("italic") && "bg-muted text-muted-foreground"
                                )}
                            >
                                <Italic />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Italic</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("strike")} onPressedChange={() => {
                                editor.chain().focus().toggleStrike().run()
                            }}
                                className={cn(
                                    editor.isActive("strike") && "bg-muted text-muted-foreground"
                                )}
                            >
                                <Strikethrough />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Strike</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("heading", { level: 1 })} onPressedChange={() => {
                                editor.chain().focus().toggleStrike().run()
                            }}
                                className={cn(
                                    editor.isActive("heading", { level: 1 }) && "bg-muted text-muted-foreground"
                                )}
                            >
                                <Heading1Icon />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Heading 1</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("heading", { level: 1 })} onPressedChange={() => {
                                editor.chain().focus().toggleStrike().run()
                            }}
                                className={cn(
                                    editor.isActive("heading", { level: 1 }) && "bg-muted text-muted-foreground"
                                )}
                            >
                                <Heading1Icon />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Heading 1</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("heading", { level: 2 })} onPressedChange={() => {
                                editor.chain().focus().toggleStrike().run()
                            }}
                                className={cn(
                                    editor.isActive("heading", { level: 2 }) && "bg-muted text-muted-foreground"
                                )}
                            >
                                <Heading2Icon />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Heading 2</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("heading", { level: 3 })} onPressedChange={() => {
                                editor.chain().focus().toggleStrike().run()
                            }}
                                className={cn(
                                    editor.isActive("heading", { level: 3 }) && "bg-muted text-muted-foreground"
                                )}
                            >
                                <Heading3Icon />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Heading 3</TooltipContent>
                    </Tooltip>

                    {/* bullet list  */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("bulletList")} onPressedChange={() => {
                                editor.chain().focus().toggleBulletList().run()
                            }}
                                className={cn(
                                    editor.isActive("bulletList") && "bg-muted text-muted-foreground"
                                )}
                            >
                                <ListIcon />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>BulletList</TooltipContent>
                    </Tooltip>

                    {/* Order list  */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Toggle size="sm" pressed={editor.isActive("orderList")} onPressedChange={() => {
                                editor.chain().focus().toggleOrderedList().run()
                            }}
                                className={cn(
                                    editor.isActive("orderList") && "bg-muted text-muted-foreground"
                                )}
                            >
                                <ListOrdered />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>OrderList</TooltipContent>
                    </Tooltip>
                </div>

                <div className="w-px h-6 bg-border mx-2"></div>
            </TooltipProvider>
        </div>
    );
};


export default Menubar;
