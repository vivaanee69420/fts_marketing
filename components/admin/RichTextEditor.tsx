"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { useState } from "react";

export function RichTextEditor({ name, initialHtml = "" }: { name: string; initialHtml?: string }) {
  const [html, setHtml] = useState(initialHtml);
  const editor = useEditor({
    extensions: [StarterKit, Image, Link.configure({ openOnClick: false })],
    content: initialHtml,
    immediatelyRender: false,
    onUpdate: ({ editor }) => setHtml(editor.getHTML()),
  });

  async function addImage() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file || !editor) return;
      const fd = new FormData();
      fd.set("file", file);
      const res = await fetch("/api/admin/images", { method: "POST", body: fd });
      if (!res.ok) return alert("Upload failed");
      const { url } = await res.json();
      editor.chain().focus().setImage({ src: url }).run();
    };
    input.click();
  }

  if (!editor) return null;
  const btn = "rounded border border-line px-2 py-1 text-sm";
  return (
    <div className="rounded-[10px] border border-line bg-white">
      <div className="flex flex-wrap gap-2 border-b border-line p-2">
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
        <button type="button" className={btn} onClick={() => {
          const url = prompt("Link URL"); if (url) editor.chain().focus().setLink({ href: url }).run();
        }}>Link</button>
        <button type="button" className={btn} onClick={addImage}>Image</button>
      </div>
      <EditorContent editor={editor} className="prose max-w-none p-3" />
      <input type="hidden" name={name} value={html} readOnly />
    </div>
  );
}
