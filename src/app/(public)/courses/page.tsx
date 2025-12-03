import PublicCourseCard from "@/components/PublicCourseCard";

const PublicCoursesRoute = () => {
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
        <div>
            <div className="mt-5">
                <div className="flex flex-col space-y-2 mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Explore Courses</h1>
                    <p className="text-muted-foreground">
                        discover our vide range of courses designed to help you achieve your  learning goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                   {data?.map((course) => (
                     <PublicCourseCard key={course.id} course={course}/>
                   ))}
                </div>
            </div>
        </div>
    );
};

export default PublicCoursesRoute;