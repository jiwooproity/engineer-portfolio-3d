import { useRecoilValue } from "recoil";
import { cacheMemos } from "@/entities/memo";

import { MemoIF } from "./memo-container";

interface MemoListProps {
  selected: number;
  onSelect: (idx: number) => void;
  useEditor: boolean;
  editor: { title: string; content: string };
}

const MemoList = ({ selected, onSelect, useEditor, editor }: MemoListProps) => {
  const memos: MemoIF[] = useRecoilValue(cacheMemos);

  return (
    <div className="memo-list-wrapper">
      <ul className="memo-list">
        <li
          className={`memo-item ${selected === -1 ? "selected" : "add"}`}
          onClick={() => onSelect(-1)}
        >
          {useEditor ? (
            <>
              <h1 className="memo-title">{editor.title || "새로운 메모"}</h1>
              <span className="memo-content">{editor.content || "내용"}</span>
            </>
          ) : (
            <h1 className="editor-btn">+</h1>
          )}
        </li>
        {memos.map((memo, idx) => (
          <li
            className={`memo-item ${selected === idx ? "selected" : ""}`}
            key={`${memo.date}-${memo.title}`}
            onClick={() => onSelect(idx)}
          >
            <h1 className="memo-title">{memo.title}</h1>
            <span className="memo-content">{memo.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoList;
