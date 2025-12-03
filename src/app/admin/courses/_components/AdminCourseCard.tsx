import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ArrowRight, Eye, MoreVertical, Pencil, School, TimerIcon, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface iAppProps {
    
}

const AdminCourseCard = ({data} : iAppProps) => {
    return (
        <div>
            <Card className="group relative py-0 gap-0">
                <div className="absolute top-2 right-2 z-10">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon">
                        <MoreVertical className="size-4" />
                    </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                        <Link href={`/admin/courses/${data.id}/edit`} className="flex justify-start items-center">
                        <Pencil className="size-4 mr-2" />
                        Edit Course
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                        <Link href={`/admin/courses/${data.slug}`} className="flex justify-start items-center">
                        <Eye className="size-4 mr-2" />
                        Preview
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                        <Link href={`/admin/courses/${data.id}/delete`} className="flex justify-start items-center">
                        <Trash className="size-4 mr-2 text-destructive" />
                        Delete Course
                        </Link>
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>

                <Image
                src=""
                alt="Thumbnail Url"
                width={600}
                height={400}
                className="w-full rounded-t-lg aspect-video h-full object-cover"
                />

                <CardContent className="p-4">
                    <Link href={`/admin/courses/${data.id}`}
                    className="font-medium text-lg line-clamp-2 hover:underline group-hover:text-primary transition-colors"
                    >
                        {data.title}
                    </Link>

                    <p className="line-clam-2 text-sm text-muted-foreground leading-tight mt-2">{data.smallDescription}</p>
                    <div className="mt-4 flex items-center gap-x-5">
                       <div className="flex items-center gap-x-2">
                          <TimerIcon className="size-6 p-1 rounded-md text-primary bg-primary/10"/>
                          <p className="text-sm text-muted-foreground">{data.duration}</p>
                       </div>

                       <div className="flex items-center gap-x-2">
                           <School className="size-6 p-1 rounded-md text-primary bg-primary/10"/>
                            <p className="text-sm text-muted-foreground">{data.level}</p>
                       </div>
                    </div>

                    <Link className="bg-primary text-white w-full " href={`/admin/courses/${data.id}/edit`}>
                       <Button className="w-full text-white mt-4 cursor-pointer">
                       Edit Course <ArrowRight className="size-4"/></Button>
                    </Link>

                     <Link className="bg-primary text-white w-full " href={`/admin/courses/${data.id}/edit`}>
                       <Button className="w-full text-white mt-4 cursor-pointer">
                       Edit Course <ArrowRight className="size-4"/></Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminCourseCard;