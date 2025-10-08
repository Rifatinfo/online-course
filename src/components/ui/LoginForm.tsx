'use client';
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { GithubIcon, Loader } from "lucide-react";
import { useTransition } from "react";
export default function LoginForm() {
    const [githubPending, startGithubTransition] = useTransition();
    async function signInWithGithub() {
        startGithubTransition(async () => {
            await authClient.signIn.social({
                provider: "github",
                callbackURL: "/",
                fetchOptions: {
                    onSuccess: () => {
                        alert('Signed with Git')
                    },
                    onError: (error) => {
                        alert("server error");
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
                    <div className="grid gap-3">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" placeholder="Your Email" />
                        </div>
                        <Button>Continue With Email</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

