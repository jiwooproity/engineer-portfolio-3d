import { ChangeEvent, useEffect, useState } from "react";

import MemoList from "./memo-list";
import MemoEditor from "./memo-editor";

import { getMemoList } from "@/entities/memo";
import { MemoAddButton } from "@/features/memo";
import { Window, Loading } from "@/entities/components";

import useValidation from "../lib/use-validation";

export interface MemoIF {
  title: string;
  content: string;
  date: string;
}

const MemoContainer = () => {
  const [loaded, setLoaded] = useState(false);
  const [memos, setMemos] = useState<MemoIF[]>([]);

  const [selected, setSelected] = useState(0);
  const [useEditor, setUseEditor] = useState(false);

  const [editor, setEditor] = useState({ title: "", content: "" });
  const [visible] = useValidation({ ...editor });

  const onLoad = async () => {
    try {
      setMemos(await getMemoList());
    } catch (e) {
      window.alert("메모 리스트 조회를 실패하였습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoaded(true);
      onInit();
    }
  };

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
  }, []);

  return (
    <Window name="memo">
      <Window.Navigation />
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

export default MemoContainer;
