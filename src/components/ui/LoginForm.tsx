'use client';
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { GithubIcon, Loader, Loader2, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
export default function LoginForm() {
    const router = useRouter();
    const [githubPending, startGithubTransition] = useTransition();
    const [emailPending, startEmailTransition] = useTransition();
    const [email, setEmail] = useState("");
    async function signInWithGithub() {
        startGithubTransition(async () => {
            await authClient.signIn.social({
                provider: "github",
                callbackURL: "/",
                fetchOptions: {
                    onSuccess: () => {
                        toast.success('Signed with Git');
                    },
                    onError: () => {
                        toast.success("server error");
                    }
                }
            })
        })
    }
    function signInWithEmail() {
        startEmailTransition(async () => {
            await authClient.emailOtp.sendVerificationOtp({
                email: email,
                type: 'sign-in',
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Email send");
                        router.push(`/verify-request?email=${email}`);
                    },
                    onError: () => {
                        toast.success("Email not send");
                    }
                }
            })
        })
    }
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Welcome Back!!</CardTitle>
                    <CardDescription>Login with your Github Email Account</CardDescription>
                    <CardAction></CardAction>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    {
                        githubPending ? (<>
                            <Loader className="size-4 animate-spin"></Loader>
                        </>) : (<>
                            <Button disabled={githubPending} onClick={signInWithGithub} className="w-full" variant={"outline"}>
                                <GithubIcon className="size-4" />
                                Sign in with GitHub
                            </Button>
                        </>)
                    }

                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0
                      after:flex after:items-center after:border-t after:border-border">
                        <span className="relative z-10 bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>

                    {/* google login  */}
                    <div className="flex flex-col gap-3">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" required />
                        </div>
                        <Button onClick={signInWithEmail} disabled={emailPending}>{
                            emailPending ? (
                                <><Loader2 className="size-4 animate-spin" />
                                    <span>Loading.....</span></>
                            ) : (
                                <><Send className="size-4" />
                                    <span>Continue With Email</span></>
                            )
                        }</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

