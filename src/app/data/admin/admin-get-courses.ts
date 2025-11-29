import { prisma } from "@/lib/db";

export async function adminGetCourses (){
  const data = await prisma.course.findMany({
    orderBy : {
        createdAt : 'desc'
    },
    select : {
        id : true,
        title : true,
        description : true ,
        duration : true,
        level : true,
        status : true,
        price : true ,
        fileKey : true,
        // slug : true,
        // smallDescription : true
    },
})
}
