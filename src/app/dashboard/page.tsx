import { EmptyState } from "@/components/general/EmptyState";
import Link from "next/link";

const DashboardPage = () => {

  // ---- STATIC DATA ----
  const enrolledCourses = [
    {
      Course: {
        id: "course-1",
        title: "Next.js Mastery",
        slug: "nextjs-mastery"
      }
    }
  ];

  const courses = [
    { id: "course-1", title: "Next.js Mastery", slug: "nextjs-mastery" },
    { id: "course-2", title: "TailwindCSS Pro", slug: "tailwindcss-pro" },
    { id: "course-3", title: "React Advanced", slug: "react-advanced" },
  ];

  // Filter out courses the user already enrolled in
  const availableCourses = courses.filter(
    (course) =>
      !enrolledCourses.some(
        (enrolled) => enrolled.Course.id === course.id
      )
  );

  return (
    <div className="px-4">
      {/* Enrolled Courses Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Enrolled Courses</h1>
        <p className="text-muted-foreground">
          Here you can see all the courses you have access to
        </p>
      </div>

      <div className="mt-6">
        {enrolledCourses.length === 0 ? (
          <EmptyState
            title="No Courses Purchased"
            description="You haven't purchased any courses yet"
            buttonText="Browse Courses"
            href="/courses"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((enrolled) => (
              <Link
                key={enrolled.Course.id}
                href={`/dashboard/${enrolled.Course.slug}`}
                className="p-4 border rounded-lg hover:bg-accent"
              >
                {enrolled.Course.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Available Courses Section */}
      <section className="mt-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Available Courses</h2>
          <p className="text-muted-foreground">
            Here you can see all the courses you can purchase
          </p>
        </div>

        <div className="mt-6">
          {availableCourses.length === 0 ? (
            <EmptyState
              title="No More Courses"
              description="You have purchased all available courses"
              buttonText="Browse All"
              href="/courses"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.slug}`}
                  className="p-4 border rounded-lg hover:bg-accent"
                >
                  {course.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
