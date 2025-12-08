import { cn } from "@/lib/utils";
import { Check, Play } from "lucide-react";
import Link from "next/link";

interface iAppProps {
    lesson: {
        id: string;
        title: string;
        position: number;
        description: string | null;
    };
    slug: string;
}


const LessonItem = ({ lesson, slug }: iAppProps) => {
    const completed = true;
    return (
        <div>
            <Link href={`/dashboard/${slug}/${lesson.id}`}
                className="outline"
            >
                <div
                    key={lesson.id}
                    // variant={completed ? "secondary" : "outline"},
                    className={cn("bg-[#2a2a2a] rounded-md p-3 flex items-center gap-3 hover:bg-[#333] cursor-pointer border border-white/5 ", completed &&
                        "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-900/50 text-green-800 dark:text-green-200"
                    )}>
                    <div className="size-6 rounded-full bg-black/40 flex items-center justify-center">
                        {/* <Play className="size-3 text-white/80" /> */}
                        {completed ? (
                            <div>
                                <Check className="size-6 text-white" />
                            </div>
                        ) : (
                            <div
                                className={cn(
                                    "size-5 rounded-full border-2 bg-background flex justify-center items-center"
                                )}
                            >
                                <Play className={cn("size-2.5 fill-current")} />
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium truncate">
                        {lesson.position}. {lesson.title}
                        {
                            completed && (
                                <p className="text-[10px] text-green-700 dark:text-green-300 font-medium ">Completed</p>
                            )
                        }
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default LessonItem;