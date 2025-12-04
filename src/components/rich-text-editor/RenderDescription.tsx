"use client";

import {  generateHTML } from "@tiptap/react";
import { type JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import parse from "html-react-parser";  
import { useMemo } from "react";

const RenderDescription = ({ json }: { json: JSONContent }) => {
  const outPut = useMemo(() => {
    return generateHTML(json, [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ]);
  }, [json]);

  return (
    <div className="prose dark:prose-invert prose-li:market:text-primary">
      {parse(outPut)}
    </div>
  );
};

export default RenderDescription;
