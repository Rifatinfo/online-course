import Link from "next/link";

const CoursePage = () => {
    return (
        <div className="px-4 l:px-6">
            <div className="flex item-center justify-between ">
                <h1 className="text-2xl font-bold">Hey How are You</h1>
                <Link href="/admin/courses/create" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">Create Course</Link>
            </div>

            <div>
               
            </div>
        </div>
    );
};

export default CoursePage;