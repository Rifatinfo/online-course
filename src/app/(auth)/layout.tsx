'use client';
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center">
            <Link href="/"
            className={buttonVariants({
                className : 'absolute top-4 left-4'
            })}
            ><ArrowLeft className="size-4"/>
            Back
            </Link>
            
            <div className="flex w-full max-w-sm flex-col gap-6">
               <Link href="/">
                 <Image src="/next.svg"  alt="logo" width={80} height={82}/>
               </Link>
                {children}
            </div>
            {/* terms and condition */}
            <div className="text-balance text-center font-semibold text-muted-foreground max-w-sm mt-6">
                By clicking continue , you agree to our{" "}
                <span className="hover:text-primary hover:underline">Terms of service</span> {" "}
                and
                <span className="hover:text-primary hover:underline">Privacy Policy</span> {" "}
                .
            </div>
        </div>
    )
}