"use client"
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menubar from './Menubar'

export function RichtextEditor(){
    const editor = useEditor({
    extensions: [StarterKit],
})

   return (
     <div>
        <Menubar editor={editor}/>
     </div>
   )

}