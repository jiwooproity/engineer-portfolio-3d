import { MemoDataIF } from "@/entities/windows/memo";

import { ChangeEvent } from "react";

export interface MemoEditorPropsIF {
  data: MemoDataIF;
  values: { title: string; content: string };
  toggle: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const MemoEditor = (props: MemoEditorPropsIF) => {
  const { data, values, toggle, onChange } = props;

  return (
    <div className="memo-editor-container">
      {toggle ? (
        <>
          <input
            className="memo-content-title"
            type="text"
            name="title"
            value={values.title}
            onChange={onChange}
            maxLength={50}
            placeholder="제목"
          />
          <textarea
            className="memo-content-text"
            name="content"
            value={values.content}
            onChange={onChange}
            maxLength={200}
            placeholder="소중한 메모 부탁드립니다."
          />
        </>
      ) : (
        <>
          <p className="memo-content-title">{data.title}</p>
          <p className="memo-content-text">{data.content}</p>
        </>
      )}
    </div>
  );
};

export default MemoEditor;
