import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="max-w-md w-full">
                <CardHeader className="text-center">
                    <div className="bg-destructive/10 rounded-full p-4 w-fit mx-auto">
                        <Shield className="size-16 text-destructive" />
                    </div>
                    <CardTitle className="text-2xl">
                        Access Restricted
                    </CardTitle>
                    <CardDescription className="max-w-xs mx-auto">Hey! You are not as admin, which means you can&apos;t create any courses or stuff like that .....</CardDescription>
                </CardHeader>
                <CardContent>
                    <Link className="bg-primary text-white w-full" href="/">
                       <Button className="w-full text-white"><ArrowLeft className="mr-1 size-4"/>
                       Back to home</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default NotFoundPage;

