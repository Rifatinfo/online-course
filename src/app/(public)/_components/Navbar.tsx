'use client';

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import UserDropdown from "@/components/UserDropdown";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "sonner";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();

    const navigationItems = [
        { name: "Home", href: "/" },
        { name: "Course", href: "/course" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logout successfully");
                },
            },
        });
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex min-h-16 items-center mx-auto px-4 justify-between">
                <Link href="/" className="text-4xl font-bold">
                    OnCourse
                </Link>

                <nav className="hidden md:flex items-center space-x-6">
                    {navigationItems.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-primary">
                            {item.name}
                        </Link>
                    ))}

                    <ThemeToggle />
                    {/* {isPending ? null : session ? <><UserDropdown /></> : (
                        <Link href="/login">
                            <Button>Login</Button>
                        </Link>
                    )} */}
                    <UserDropdown />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
