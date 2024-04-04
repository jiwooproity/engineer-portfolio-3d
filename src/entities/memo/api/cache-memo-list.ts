import { selector } from "recoil";
import { getMemoList } from "..";

const cacheMemos = selector({
  key: "cache-memos",
  get: async () => {
    return await getMemoList();
  },
});

export default cacheMemos;
