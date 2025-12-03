import LessonForm from "./_components/LessonForm";

type Params = Promise<{
    courseId : string;
    chapterId : string;
    lessonId : string;
    data : string[]
}>;

const LessonIdPage = async ({params} : {params : Params}) => {
    const {chapterId, courseId, lessonId, } = await params;
    return <LessonForm  chapterId={chapterId} courseId={courseId}/>
};

export default LessonIdPage;