import Link from "next/link";
import AdminCourseCard from "./_components/AdminCourseCard";

const CoursePage = async () => {
    // admin can excess this data 
    const data = [
        {
            id: "1",
            title: "Full Stack Web Development",
            description: "Learn MERN stack from zero to advanced.",
            duration: "12 weeks",
            level: "Intermediate",
            status: "active",
            price: 149.99,
            fileKey: "course-img-1.jpg",
            slug: "full-stack-web-development",
            smallDescription: "Complete MERN stack course."
        },
        {
            id: "2",
            title: "UI/UX Design Masterclass",
            description: "Master user interface & user experience design.",
            duration: "8 weeks",
            level: "Beginner",
            status: "active",
            price: 99.99,
            fileKey: "course-img-2.jpg",
            slug: "ui-ux-design-masterclass",
            smallDescription: "Learn UI/UX from scratch."
        },
        {
            id: "3",
            title: "Advanced JavaScript & TypeScript",
            description: "Deep dive into modern JS and TS features.",
            duration: "10 weeks",
            level: "Advanced",
            status: "inactive",
            price: 129.99,
            fileKey: "course-img-3.jpg",
            slug: "advanced-javascript-typescript",
            smallDescription: "Advanced JS/TS for real projects."
        }
    ];

    return (
        <div className="px-4 l:px-6">
            <div className="flex item-center justify-between">
                <h1 className="text-2xl font-bold">Hey How are You</h1>
                <Link href="/admin/courses/create" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">Create Course</Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-7">
                {data.map((course) => (
                    <AdminCourseCard key={course.id} data={course}/>
                ))}
            </div>
        </div>
    );
};

export default CoursePage;