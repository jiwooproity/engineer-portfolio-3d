import { ChangeEvent, ReactNode } from "react";

import { MemoIF } from "..";

interface MemoEditorProps {
  memo: MemoIF;
  useEditor: boolean;
  editor: { title: string; content: string };
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  children: ReactNode;
}

const MemoEditor = ({ memo, useEditor, editor, onChange, children }: MemoEditorProps) => {
  return (
    <div className="memo-editor-wrapper">
      <input
        name="title"
        className="memo-editor-title"
        type="text"
        value={useEditor ? editor.title : memo?.title}
        readOnly={!useEditor}
        placeholder="제목을 입력해 주세요."
        onChange={onChange}
        spellCheck={false}
        maxLength={50}
      />
      <div className="memo-editor-content-wrap">
        <textarea
          name="content"
          className="memo-editor-content"
          value={useEditor ? editor.content : memo?.content}
          readOnly={!useEditor}
          placeholder="소중한 메모 부탁드립니다."
          onChange={onChange}
          spellCheck={false}
          maxLength={500}
        />
        <div className="shadow"></div>
      </div>
      {!useEditor && memo.reaction && <span className="memo-editor-reaction">{memo.reaction}</span>}
      {children}
    </div>
  );
};

export default MemoEditor;
