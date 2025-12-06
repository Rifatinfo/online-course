
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, Play } from "lucide-react";
import LessonItem from "./LessonItem";

// ---- STATIC DATA ----
const course = {
  title: "Full Stack Web Development",
  category: "Development",
  slug: "full-stack-course",
  chapters: [
    {
      id: "ch1",
      position: 1,
      title: "Introduction",
      lessons: [
        { id: "l1", title: "Welcome to the Course" ,position : "1"},
        { id: "l2", title: "How This Course Works" ,position : "2"},
      ],
    },
    {
      id: "ch2",
      position: 2,
      title: "Frontend Basics",
      lessons: [
        { id: "l3", title: "HTML Fundamentals", position : "1"},
        { id: "l4", title: "CSS Basics", position : "2" },
        { id: "l5", title: "JavaScript Essentials", position : "3" },
      ],
    },
  ],
};

const CourseSidebar = () => {
  return (
     <div className="flex flex-col h-full bg-[#1a1a1a] text-white p-4">

    {/* Header */}
    <div className="pb-4 border-b border-white/10">
        <div className="flex items-center gap-3 mb-3">
            <div className="size-10 rounded-md bg-primary/10 flex items-center justify-center">
                <Play className="size-5 text-primary" />
            </div>

            <div className="flex-1">
                <h1 className="font-semibold text-lg leading-tight truncate">this should work</h1>
                <p className="text-sm text-muted-foreground">Marketing</p>
            </div>
        </div>

        {/* Progress */}
        <div className="space-y-2 mt-4">
            <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">4/10 lessons</span>
            </div>
            <Progress value={55} className="h-1.5 bg-white/10" />
            <p className="text-sm text-muted-foreground">55% complete</p>
        </div>
    </div>

    {/* Chapters */}
    <div className="mt-5 space-y-3">

        {course.chapters.map((chapter, index) => (
            <Collapsible key={chapter.id} defaultOpen={index === 0}>
                <CollapsibleTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full bg-[#2a2a2a] hover:bg-[#333] border-white/10
                                 p-3 h-auto flex items-center gap-3 rounded-md"
                    >
                        <ChevronDown className="size-4 text-primary shrink-0" />

                        <div className="flex-1 text-left">
                            <p className="font-semibold text-sm">
                                {chapter.position}: {chapter.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {chapter.lessons.length} lessons
                            </p>
                        </div>
                    </Button>
                </CollapsibleTrigger>

                {/* Lessons */}
                <CollapsibleContent className="mt-3 pl-6 border-l border-white/10 space-y-3">
                    {chapter.lessons.map((lesson) => (
                        // <div
                        //     key={lesson.id}
                        //     className="bg-[#2a2a2a] rounded-md p-3 flex items-center gap-3
                        //                hover:bg-[#333] cursor-pointer border border-white/5"
                        // >
                        //     <div className="size-6 rounded-full bg-black/40 flex items-center justify-center">
                        //         <Play className="size-3 text-white/80" />
                        //     </div>

                        //     <p className="text-sm font-medium truncate">
                        //         {lesson.position}. {lesson.title}
                        //     </p>
                        // </div>
                        <LessonItem key={lesson.id} lesson={lesson} />
                    ))}
                </CollapsibleContent>
            </Collapsible>
        ))}

    </div>
</div>

  );
};

export default CourseSidebar;

