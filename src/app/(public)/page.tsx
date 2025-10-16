"use client";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


interface FeatureProps {
  title: string;
  description: string;
  icon: string
}

export default function Home() {
  const { data: session, isPending } = authClient.useSession();

 

  const features: FeatureProps[] = [
    {
      title: "Comprehensive Courses",
      description:
        "Access a wide range of carefully curated courses designed by industry experts.",
      icon: "📚",
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from top professionals who bring real-world experience into every lesson.",
      icon: "👩‍🏫",
    },
    {
      title: "Flexible Learning",
      description:
        "Study anytime, anywhere, and at your own pace with lifetime access to materials.",
      icon: "🕒",
    },
    {
      title: "Certification",
      description:
        "Earn certificates to showcase your achievements and boost your career prospects.",
      icon: "🏆",
    },
  ];

  return (
    // <div>
    //   <p>Hello Home</p>
    //   <ThemeToggle />
    //   <p>{session?.user?.name}</p>

    //   {session ? (
    //     <Button onClick={handleSignOut}>Logout</Button>
    //   ) : (
    //     <Link href="/login">
    //       <Button>Login</Button>
    //     </Link>
    //   )}
    // </div>

    <div>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">The Future of Online Education</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Elevate your Learning Experience</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus accusamus mollitia quo amet nam voluptas accusantium neque quam rerum!</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center">
          <Link className={buttonVariants({ variant : "secondary" })} href="/course">Explore Course</Link>
          <Link className={buttonVariants({ size: "lg" })} href="/login">Sign In</Link>
        </div>
      </section>

      {/* feature course  */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div>{feature.icon}</div>
              <CardTitle  className="text-3xl mb-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
