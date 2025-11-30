import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditCourseForm from "./_components/EditCourseForm";
import CourseStructure from "./_components/CourseStructure";

// TEMPORARY STATIC DATA
const staticCourses = [
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

type Params = Promise<{ courseId: string }>;

export default async function EditRoute({ params }: { params: Params }) {
    const { courseId } = await params;

    // FIND STATIC COURSE
    const data = staticCourses.find(c => c.id === courseId);

    return (
        <div className="px-4">
            <h1 className="text-3xl font-bold mb-8">
                Edit Course:{" "}
                <span className="text-primary underline">
                    {courseId}
                </span>
            </h1>

            <Tabs defaultValue="basic-info" className="w-full">
                <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
                    <TabsTrigger value="course-structure">Course Structure</TabsTrigger>
                </TabsList>

                <TabsContent value="basic-info">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Info</CardTitle>
                            <CardDescription>
                                Provide basic information about the course
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <EditCourseForm />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="course-structure">
                    <Card>
                        <CardHeader>
                            <CardTitle>Course Structure</CardTitle>
                            <CardDescription>
                                Provide course structure information about the course
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CourseStructure data={data} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

        </div>
    );
}
