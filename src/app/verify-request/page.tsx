'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { authClient } from "@/lib/auth-client";
import { Loader2, Send } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
export default function VerifyRequest() {
    const [otp, setOtp] = useState("");
    const [emailPending, startTransition] = useTransition();
    const params = useSearchParams();
    const email = params.get("email") as string;
    const router = useRouter();
    const isOtpCompleted = otp.length === 6;
    // function verifyOtp() {
    //     startTransition(async () => {
    //         await authClient.signIn.emailOtp({
    //             email: email,
    //             otp: otp,
    //             fetchOptions: {
    //                 onSuccess: () => {
    //                     toast.success("Email verified");
    //                     router.push("/");
    //                 },
    //                 onError: () => {
    //                     toast.error("Error verifying Email/")
    //                 }
    //             }
    //         })
    //     })
    // }
    const verifyOtp = () => {
        startTransition(async () => {
            try {
                await authClient.signIn.emailOtp({ email, otp });
                toast.success("Email verified successfully!");
                router.push("/");
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                toast.error("Invalid or expired OTP");
            }
        });
    };
    return (
        <div className="max-w-sm mx-auto">
            <Card className="w-full mx-auto">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Please Check your email</CardTitle>
                    <CardDescription>We have send a verification email code to your email address. Please open the email an d code below .</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-col items-center space-y-2">
                        <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)} className="gap-2">
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    <Button onClick={verifyOtp} disabled={emailPending || !isOtpCompleted} className="w-full">{
                        emailPending ? (
                            <><Loader2 className="size-4 animate-spin" />
                                <span>Loading.....</span></>
                        ) : (
                            <><Send className="size-4" />
                                <span>Verify Account</span></>
                        )
                    }</Button>
                </CardContent>
            </Card>
        </div>
    )
}