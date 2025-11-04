"use client"
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menubar from './Menubar'
import TextAlign from '@tiptap/extension-text-align'

export function RichtextEditor(){
    const editor = useEditor({
    extensions: [
      StarterKit, 
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      })
   ],
   content: "",
    immediatelyRender: false,
});

if (!editor) return null; 
   return (
     <div>
        <Menubar editor={editor}/>
     </div>
   )

}