import "./style/memo.css";

import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { getMemoList } from "@/entities/memo";
import { MemoAddButton } from "@/features/memo";
import { Window, Loading } from "@/shared/components";

import MemoList from "./ui/memo-list";
import MemoEditor from "./ui/memo-editor";
import useValidation from "./lib/use-validation";

export interface MemoIF {
  title: string;
  content: string;
  date: string;
  reaction: string;
}

const MemoApp = () => {
  const [loaded, setLoaded] = useState(false);
  const [memos, setMemos] = useState<MemoIF[]>([]);

  const [selected, setSelected] = useState(0);
  const [useEditor, setUseEditor] = useState(false);

  const [editor, setEditor] = useState({ title: "", content: "" });
  const [visible] = useValidation({ ...editor });

  const onLoad = useCallback(async () => {
    try {
      setMemos(await getMemoList());
    } catch (e) {
      window.alert("메모 리스트 조회를 실패하였습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoaded(true);
      onInit();
    }
  }, []);

  const onInit = () => {
    setEditor({ title: "", content: "" });
  };

  const onSelect = (idx: number) => {
    setSelected(idx);
    setUseEditor(idx === -1);
    onInit();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditor({ ...editor, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <Window name="memo">
      <Window.Navigation>
        <Window.Buttons />
      </Window.Navigation>
      <Window.Body>
        {loaded ? (
          <>
            <MemoList
              memos={memos}
              selected={selected}
              onSelect={onSelect}
              useEditor={useEditor}
              editor={editor}
            />
            <MemoEditor
              memo={memos[selected]}
              onChange={onChange}
              useEditor={useEditor}
              editor={editor}
            >
              {visible && <MemoAddButton editor={editor} reload={onLoad} />}
            </MemoEditor>
          </>
        ) : (
          <Loading />
        )}
      </Window.Body>
    </Window>
  );
};

export default MemoApp;
