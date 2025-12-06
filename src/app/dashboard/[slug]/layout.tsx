import { ReactNode } from "react";
import CourseSidebar from "../_components/CourseSidebar";

const CourseLayout = ({children} : {children : ReactNode}) => {
    return (
        <div className="flex flex-1">
            <div className="w-80 border-r border-border shrink-0">
                <CourseSidebar/>
            </div>

            <div className="flex-1 overflow-hidden">{children}</div>
        </div>
    );
};

export default CourseLayout;