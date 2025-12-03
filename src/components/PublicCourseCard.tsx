/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { ArrowRight, School, TimerIcon } from "lucide-react";
import { Button } from "./ui/button";

const PublicCourseCard = ({ course }: any) => {
    return (
        <div>
            <Card className="group relative py-0 gap-0">
                <Badge className="absolute top-2 right-2 z-10">{course.level}</Badge>
                <Image
                    src="https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759821130/7krm3mxk20v-1759821130122-01-png.png.png"
                    alt="Thumbnail Url"
                    width={600}
                    height={400}
                    className="w-full rounded-t-lg aspect-video h-full object-cover"
                />

                <CardContent className="p-4">
                    <Link href={`/courses/${course.slug}`} className="font-medium text-lg line-clamp-2 hover:underline group-hover:text-primary transition-all">{course.title}</Link>

                    <p className="line-clam-2 text-sm text-muted-foreground
                     leading-tight mt-2">{course.smallDescription}</p>

                    <div className="mt-4 flex items-center gap-x-5">
                        <div className="flex items-center gap-x-2">
                            <TimerIcon className="size-6 p-1 rounded-md text-primary bg-primary/10" />
                            <p className="text-sm text-muted-foreground">{course.duration}</p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <School className="size-6 p-1 rounded-md text-primary bg-primary/10" />
                            <p className="text-sm text-muted-foreground">{course.level}</p>
                        </div>
                    </div>
                    <Link className="bg-primary text-white w-full " href={`/courses/${course.id}`}>
                        <Button className="w-full text-white mt-4 cursor-pointer">
                            Learn More <ArrowRight className="size-4" /></Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default PublicCourseCard;
