"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("logout successfully");
        },
      },
    });
  };

  const features = [
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
      <section>

      </section>

      {/* feature course  */}
      <section>
        
      </section>
    </div>
  );
}
