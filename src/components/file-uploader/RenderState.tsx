import { cn } from "@/lib/utils";
import { CloudUploadIcon, ImageIcon } from "lucide-react";
import { Button } from "../ui/button";

export function RenderEmptyState ({isDragActive} : {isDragActive : boolean}) {
    return (
        <div className="text-center cursor-pointer">
            <div className="flex items-center justify-center mx-auto size-12 rounded-full bg-muted mb-4 ">
                <CloudUploadIcon className={cn("size-6 text-muted-foreground", isDragActive && "text-primary")}/>
            </div>
            <p className="text-base text-foreground font-semibold">Drop yours files heres or <span className="text-primary font-bold"> Click to upload</span></p>
            <Button type="button" className="mt-4">Select File</Button>
        </div>
    );
};

export function RenderErrorState () {
    return (
        <div className="text-center text-destructive">
          <ImageIcon className="size-10 mx-auto mb-3"/>
        </div>
    )
}