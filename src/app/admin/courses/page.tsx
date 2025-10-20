import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursePage = () => {
    return (
        <div className="px-4 l:px-6">
            <div className="flex item-center justify-between ">
                <h1 className="text-2xl font-bold">Hey How are You</h1>
                <Link href="/admin/course/create" ><Button>Create Course</Button></Link>
            </div>

            <div>
                <h1>Here you will see all the course</h1>
            </div>
        </div>
    );
};

export default CoursePage;