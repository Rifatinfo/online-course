import RenderDescription from "@/components/rich-text-editor/RenderDescription";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { IconCategory, IconChartBar, IconChevronDown, IconClock, IconPlayerPlay } from "@tabler/icons-react";
import { Badge, CheckIcon } from "lucide-react";
import Image from "next/image";

const SlugPage = async () => {

  // ⭐ STATIC DATA (for testing)
  const course = {
    title: "Full Stack Web Development",
    smallDescription: "Learn MERN stack from zero to advanced.",
    category: "Web Development",
    price: 149.99,
    level: "Intermediate",
    duration: "12 weeks",
    description: JSON.stringify({
      type: "doc",
      content: [
        { type: "paragraph", content: [{ type: "text", text: "This is a sample course description." }] }
      ]
    }),
    chapter: [
      {
        id: 1,
        title: "Introduction",
        lessons: [
          { id: "l1", title: "What is MERN?" },
          { id: "l2", title: "Why MERN stack?" }
        ]
      },
      {
        id: 2,
        title: "Frontend Basics",
        lessons: [
          { id: "l3", title: "React Introduction" },
          { id: "l4", title: "JSX Deep Dive" }
        ]
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-5">

      {/* LEFT SIDE */}
      <div className="order-1 lg:col-span-2">

        {/* Thumbnail */}
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759821130/7krm3mxk20v-1759821130122-01-png.png.png"
            alt="Thumbnail"
            width={800}
            height={500}
            className="w-full aspect-video rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
        </div>

        {/* Title + Description */}
        <div className="mt-8 space-y-4">
          <h1 className="text-4xl font-bold">{course.title}</h1>
          <p className="text-lg text-muted-foreground">{course.smallDescription}</p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-4">
          <Badge className="flex items-center gap-1 px-3 py-1">
            <IconChartBar className="size-4" />
            {course.level}
          </Badge>

          <Badge className="flex items-center gap-1 px-3 py-1">
            <IconCategory className="size-4" />
            {course.category}
          </Badge>

          <Badge className="flex items-center gap-1 px-3 py-1">
            <IconClock className="size-4" />
            {course.duration}
          </Badge>
        </div>

        <Separator className="my-8" />

        {/* Description (Tiptap Render) */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Course Description</h2>
          <RenderDescription json={JSON.parse(course.description)} />
        </div>

        {/* COURSE CONTENT */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Course Content</h2>
            <p>
              {course.chapter.length} Chapters •{" "}
              {course.chapter.reduce((t, c) => t + c.lessons.length, 0)} Lessons
            </p>
          </div>

          {/* Chapters */}
          <div className="space-y-4">
            {course.chapter.map((chapter, index) => (
              <Collapsible key={chapter.id} defaultOpen={index === 0}>
                <Card className="border-2 overflow-hidden hover:shadow-md transition">
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="flex justify-between items-center cursor-pointer">
                      <div className="flex items-center gap-4">
                        <p className="size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                          {index + 1}
                        </p>

                        <div className="text-start">
                          <h3 className="text-xl font-semibold">{chapter.title}</h3>
                          <p className="text-sm  text-start text-muted-foreground">
                            {chapter.lessons.length} Lessons
                          </p>
                        </div>
                      </div>

                      <IconChevronDown className="size-5 text-muted-foreground" />
                    </CardContent>
                  </CollapsibleTrigger>

                  {/* Lessons */}
                  <CollapsibleContent>
                    <div className="border-t bg-muted/20">
                      <div className="p-6 space-y-3">
                        {chapter.lessons.map((lesson, lessonIndex) => (
                          <div key={lesson.id} className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent transition">
                            <div className="size-8 flex items-center justify-center rounded-full bg-background border-2 border-primary/20">
                              <IconPlayerPlay className="size-4 text-muted-foreground" />
                            </div>
                            <div>
                              <p className="font-medium">{lesson.title}</p>
                              <p className="text-sm text-muted-foreground">
                                Lesson {lessonIndex + 1}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — ENROLLMENT CARD */}
      <div className="order-2 lg:col-span-1">
        <div className="sticky top-20">
          <Card>
            <CardContent className="p-6 space-y-6">

              {/* Price */}
              <div className="text-2xl font-bold text-primary">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(course.price)}
              </div>

              {/* What you get */}
              <div className="bg-muted p-4 rounded-lg space-y-4">
                <h4 className="font-medium">What you will get:</h4>

                <div className="space-y-3">

                  <div className="flex items-center gap-3">
                    <IconClock className="size-5 text-primary" />
                    <p className="text-sm">{course.duration}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <IconCategory className="size-5 text-primary" />
                    <p className="text-sm">{course.category}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <IconChartBar className="size-5 text-primary" />
                    <p className="text-sm">{course.level}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckIcon className="size-4 text-green-500" />
                    <p className="text-sm">
                      {course.chapter.reduce((t, c) => t + c.lessons.length, 0)} Lessons
                    </p>
                  </div>

                </div>
              </div>

              {/* Includes */}
              <div className="space-y-2">
                <h4 className="font-medium">This course includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-green-500" />
                    Full lifetime access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-green-500" />
                    Certificate of completion
                  </li>
                </ul>
              </div>

              {/* Button */}
              <Button className="w-full">Enroll Now!</Button>

              <p className="text-center text-xs text-muted-foreground">
                30-day money-back guarantee
              </p>

            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default SlugPage;
