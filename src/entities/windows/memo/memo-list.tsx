import { useState } from "react";

import Loading from "../loading";
import { MemoDataIF } from ".";
import dayjs from "dayjs";

interface MemoListPropsIF {
  loaded: boolean;
  data: MemoDataIF[];
  toggle: boolean;
  insert: { title: string; content: string };
  onSelect: (index: number) => void;
  onToggle: (toggle: boolean) => void;
}

const MemoList = (props: MemoListPropsIF) => {
  const [selected, setSelected] = useState<number | null>(0);
  const { loaded, data, toggle, insert, onSelect, onToggle } = props;

  const onSelectItem = (index: number) => {
    onSelect(index);
    onToggle(false);
    setSelected(index);
  };

  const onAddItem = () => {
    onToggle(true);
    setSelected(null);
  };

  return loaded ? (
    <div className="memo-comment-list">
      {toggle ? (
        <div className="memo-comment-item selected">
          <h1 className="memo-item-title">{insert.title || "새로운 메모"}</h1>
          <span className="memo-item-content">{`${
            insert.content || "추가 텍스트"
          }`}</span>
        </div>
      ) : (
        <div className="memo-comment-item-add" onClick={onAddItem}>
          <h1 className="memo-item-content-add">+</h1>
        </div>
      )}
      {data.map((memo, i) => (
        <div
          className={`memo-comment-item ${i === selected ? "selected" : ""}`}
          onClick={() => onSelectItem(i)}
        >
          <h1 className="memo-item-title">{memo.title}</h1>
          <span className="memo-item-content">
            {`${dayjs(memo.date).format("YYYY.MM.DD")} ${memo.content}`}
          </span>
        </div>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default MemoList;
