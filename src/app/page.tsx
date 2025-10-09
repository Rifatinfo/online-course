
'use client';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          // router.push("/");
          alert("logout")
        },
      },
    });
  };

  return (
    <div>
      <p>Hello Home</p>
      <ThemeToggle />
      <p>{session?.user?.name}</p>

      {session ? (
        <Button onClick={handleSignOut}>Logout</Button>
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}
    </div>
  );
}
