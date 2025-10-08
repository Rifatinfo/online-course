import { ThemeToggle } from "@/components/ui/themeToggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function  Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  return (
    <div>
      <p>Hello Home</p>
      <ThemeToggle />
      <p>{session?.user?.name}</p>
    </div>
  );
}
