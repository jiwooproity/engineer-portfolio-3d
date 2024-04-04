import { ChangeEvent, ReactNode } from "react";

import { useRecoilValue } from "recoil";
import { cacheMemos } from "@/entities/memo";

import { MemoIF } from "./memo-container";

interface MemoEditorProps {
  selected: number;
  useEditor: boolean;
  editor: { title: string; content: string };
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  children: ReactNode;
}

const MemoEditor = ({ selected, useEditor, editor, onChange, children }: MemoEditorProps) => {
  const memos: MemoIF[] = useRecoilValue(cacheMemos);

  return (
    <div className="memo-editor-wrapper">
      <input
        name="title"
        className="memo-editor-title"
        type="text"
        value={useEditor ? editor.title : memos[selected]?.title}
        readOnly={!useEditor}
        placeholder="제목을 입력해 주세요."
        onChange={onChange}
        spellCheck={false}
        maxLength={50}
      />
      <textarea
        name="content"
        className="memo-editor-content"
        value={useEditor ? editor.content : memos[selected]?.content}
        readOnly={!useEditor}
        placeholder="소중한 메모 부탁드립니다."
        onChange={onChange}
        spellCheck={false}
        maxLength={500}
      />
      {children}
    </div>
  );
};

export default MemoEditor;
