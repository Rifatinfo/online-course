/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    DndContext, rectIntersection, KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DraggableSyntheticListeners,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { ReactNode, useState } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight, DeleteIcon, FileText, GripVertical, Link, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface iAppProps {

}

interface SortableItemProps {
    id: string;
    children: (listeners: DraggableSyntheticListeners) => ReactNode
    className?: string;
    data?: {
        type: 'chapter' | 'lesson';
        chapterId?: string
    }
}

const CourseStructure = ({ data }: iAppProps) => {
    const courseData = {
        id: "1",
        title: "Full Stack Web Development",
        description: "Learn MERN stack from zero to advanced.",
        smallDescription: "Complete MERN stack course.",
        duration: "12 weeks",
        price: 149.99,
        level: "Intermediate",
        fileKey: "course-img-1.jpg",
        slug: "full-stack-web-development",
        status: "active",

        // Important part for your component
        chapter: [
            {
                id: "c1",
                title: "Introduction to Web Development",
                position: 1,
                lessons: [
                    { id: "l1", title: "What is Web Development?", position: 1 },
                    { id: "l2", title: "Frontend vs Backend", position: 2 },
                ],
            },
            {
                id: "c2",
                title: "HTML & CSS Basics",
                position: 2,
                lessons: [
                    { id: "l3", title: "HTML5 Fundamentals", position: 1 },
                    { id: "l4", title: "CSS3 Basics", position: 2 },
                    { id: "l5", title: "Responsive Design", position: 3 },
                ],
            },
            {
                id: "c3",
                title: "JavaScript Essentials",
                position: 3,
                lessons: [
                    { id: "l6", title: "Variables & Data Types", position: 1 },
                    { id: "l7", title: "Functions & Scope", position: 2 },
                    { id: "l8", title: "DOM Manipulation", position: 3 },
                ],
            },
        ],
    };

    console.log(data);
    const initialItem = courseData.chapter.map((chapter) => ({
        id: chapter.id,
        title: chapter.title,
        order: chapter.position,
        isOpen: true,
        lessons: chapter.lessons.map((lesson) => ({
            id: lesson.id,
            title: lesson.title,
            order: lesson.position
        })),
    })) || [];

    const [items, setItems] = useState(initialItem);

    function SortableItem({ children, id, className, data }: SortableItemProps) {
        const {
            attributes,
            listeners,
            setNodeRef,
            transform,
            transition,
            isDragging,
        } = useSortable({ id: id, data: data });

        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
        };

        return (
            <div ref={setNodeRef} style={style} {...attributes} className={cn("touch-none", className, isDragging ? "z-10" : "")}>
                {children(listeners)}
            </div>
        );
    }

    function toggleChapter(chapterId: string) {
        setItems(
            items.map((chapter) =>
                chapter.id === chapterId ? { ...chapter, isOpen: !chapter.isOpen } : chapter
            )
        );
    }

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
    return (
        <div>
            <DndContext collisionDetection={rectIntersection} onDragEnd={handleDragEnd} sensors={sensors}>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between border-b border-border">
                        <CardTitle>Chapter</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <SortableContext
                            strategy={verticalListSortingStrategy}
                            items={items}
                        >
                            {items.map((item) =>
                                <SortableItem key={item.id} data={{ type: "chapter" }} id={item.id}>
                                    {(listeners) => (
                                        <Card>
                                            <Collapsible open={item.isOpen} onOpenChange={() => toggleChapter(item.id)}>
                                                <div className="flex items-center justify-between p-3 border-b border-border">
                                                    <div className="flex items-center gap-2">
                                                        <Button size="icon" variant="ghost" className="cursor-grab opacity-60 hover:opacity-100" {...listeners}>
                                                            <GripVertical className="size-4" />
                                                        </Button>
                                                        <CollapsibleTrigger asChild>
                                                            <Button size="icon" variant="ghost" className="flex items-center">
                                                                {item.isOpen ? (<ChevronDown className="size-4" />) : (<ChevronRight className="size-4" />)}
                                                            </Button>
                                                        </CollapsibleTrigger>

                                                        <p className="cursor-pointer hover:text-primary pl-2">{item.title}</p>
                                                    </div>

                                                    <Button size="icon" variant="outline">
                                                        <Trash2 className="size-4" />
                                                    </Button>
                                                </div>
                                                <CollapsibleContent>
                                                    <div className="p-1">
                                                        <SortableContext items={item.lessons.map((lesson) => lesson.id)}
                                                            strategy={verticalListSortingStrategy}
                                                        >
                                                            {item.lessons.map((lesson) => (
                                                                <SortableItem key={lesson.id} id={lesson.id} data={{ type: 'lesson', chapterId: item.id }}>
                                                                    {(lessonListeners) => (
                                                                        <div className="flex items-center justify-between p-2 hover:bg-accent rounded-sm">
                                                                            {/* Left side */}
                                                                            <div className="flex items-center gap-2">
                                                                                <Button size="icon" variant="ghost" {...lessonListeners}>
                                                                                <GripVertical className="size-4" />
                                                                                </Button>

                                                                                <FileText className="size-4" />
                                                                                {/* <Link href={`/admin/courses/${data.id}/${item.id}/${lesson.id}`}></Link> */}
                                                                               <p className="text-sm">{lesson.title}</p>
                                                                            </div>

                                                                            {/* Right side delete button */}
                                                                            <Button variant="outline" size="icon">
                                                                               <Trash2 className="size-4" />
                                                                            </Button>
                                                                            </div>

                                                                    )}
                                                                </SortableItem>
                                                            ))}
                                                        </SortableContext>
                                                        <div>
                                                            <Button className="w-full" variant="outline">Create New Lesson</Button>
                                                        </div>
                                                    </div>
                                                </CollapsibleContent>
                                            </Collapsible>
                                        </Card>
                                    )}
                                </SortableItem>
                            )}
                        </SortableContext>
                    </CardContent>
                </Card>
            </DndContext>
        </div>
    );
};

export default CourseStructure;