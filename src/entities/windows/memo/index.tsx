import "@/shared/assets/css/windows/app-memo.css";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import { MemoEditor } from "@/widgets";
import { getNotionMemo } from "@/shared/fetch/notion-api";

import MemoNavigation from "./memo-navigation";
import MemoList from "./memo-list";

interface MemoEditorStateIF {
  title: string;
  content: string;
}

export interface MemoDataIF {
  title: string;
  content: string;
  date: string;
}

const memoLoader = () => {
  const [memo, setMemo] = useState<MemoDataIF[]>([]);
  const [showMemo, setShowMemo] = useState<MemoDataIF>({
    title: "",
    content: "",
    date: "",
  });

  const loader = async (reload?: boolean) => {
    const getMemo = await getNotionMemo();
    setMemo(getMemo);
    !reload && setShowMemo(getMemo[0]);
  };

  const onSelect = (index: number) => {
    setShowMemo({ ...memo[index] });
  };

  const onReload = () => loader(true);

  useEffect(() => {
    loader();
  }, []);

  return { data: memo, showData: showMemo, onSelect, onReload };
};

const Memo = () => {
  const { data, showData, onSelect } = memoLoader();

  const [toggle, setToggle] = useState(false);
  const text = useRef<MemoEditorStateIF>({ title: "", content: "" });

  const onToggleEditor = () => setToggle(!toggle);

  const onInsertComment = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      text.current = { ...text.current, [name]: value };
    },
    [text.current.title, text.current.content]
  );

  return (
    <div className="memo-wrapper">
      <MemoNavigation onToggle={onToggleEditor} />
      <div className="memo-content-area" draggable={true}>
        <div className="memo-content-left-area">
          <MemoList data={data} onSelect={onSelect} />
        </div>
        <div className="memo-content-right-area">
          <MemoEditor
            data={showData}
            toggle={toggle}
            onChange={onInsertComment}
          />
        </div>
      </div>
    </div>
  );
};

export default Memo;
