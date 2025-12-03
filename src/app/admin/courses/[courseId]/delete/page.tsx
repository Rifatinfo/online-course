"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const page = () => {
    function onSubmit() {

    }
    return (
        <div>
            <Card className="max-w-xl mx-auto w-full">
                <CardHeader>
                    <CardTitle>Are you sure you want to delete this course?</CardTitle>
                    <CardDescription>This action cannot be undone.</CardDescription>
                </CardHeader>

                <CardContent className="flex justify-between items-center">
                    <Link
                        className="outline text-white"
                        href="/admin/courses"
                    >
                        <Button> Cancel</Button>
                    </Link>

                    <Button
                        variant="destructive"
                        onClick={onSubmit}
                        disabled={!onSubmit}
                        className="ml-2"
                    >
                        Delete
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default page;