import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Link from "next/link";

interface iAppProps {
    lesson : {
        id : string;
        title : string;
        position : number;
        description : string | null;
    };
    slug : string;
} 


const LessonItem = ({lesson , slug} : iAppProps) => {
    return (
        <div>
            <Link href="/"
             className="outline"
            >
                <div
                key={lesson.id}
                className="bg-[#2a2a2a] rounded-md p-3 flex items-center gap-3
                  hover:bg-[#333] cursor-pointer border border-white/5">
                <div className="size-6 rounded-full bg-black/40 flex items-center justify-center">
                    <Play className="size-3 text-white/80" />
                    </div>

                    <p className="text-sm font-medium truncate">
                        {lesson.position}. {lesson.title}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default LessonItem;