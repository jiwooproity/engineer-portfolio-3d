import "@/shared/assets/css/windows/app-memo.css";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import { MemoEditor } from "@/widgets";
import {
  createNotionMemo,
  getNotionMemo,
} from "@/shared/fetch/notion-api/fetch";

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
  const [loaded, setLoaded] = useState(false);
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
    setLoaded(true);
  };

  const onSelect = (index: number) => {
    setShowMemo({ ...memo[index] });
  };

  const onReload = () => loader(true);

  useEffect(() => {
    loader();
  }, []);

  return { loaded, data: memo, showData: showMemo, onSelect, onReload };
};

const Memo = () => {
  const sending = useRef(false);
  const { loaded, data, showData, onSelect, onReload } = memoLoader();
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState<MemoEditorStateIF>({
    title: "",
    content: "",
  });

  const onToggle = (toggle: boolean) => {
    setToggle(toggle);
    onInit();
  };

  const onInsert = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const onInit = () => {
    sending.current = false;
    setText({ title: "", content: "" });
    onReload();
  };

  const onUpdate = () => {
    sending.current = true;
    createNotionMemo({ ...text }).then(onInit);
  };

  const renderUpdateBtn = () => {
    return text.title !== "" && text.content !== "" ? (
      <button
        className="insert-btn"
        onClick={onUpdate}
        disabled={sending.current}
      >
        전달하기
      </button>
    ) : null;
  };

  return (
    <div className="memo-wrapper">
      <MemoNavigation />
      <div className="memo-content-area" draggable={true}>
        <div className="memo-content-left-area">
          <MemoList
            loaded={loaded}
            data={data}
            insert={text}
            toggle={toggle}
            onSelect={onSelect}
            onToggle={onToggle}
          />
        </div>
        <div className="memo-content-right-area">
          <MemoEditor
            loaded={loaded}
            data={showData}
            values={text}
            toggle={toggle}
            onChange={onInsert}
          />
          {renderUpdateBtn()}
        </div>
      </div>
    </div>
  );
};

export default Memo;
