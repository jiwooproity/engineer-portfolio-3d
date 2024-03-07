import instance from "@/shared/fetch/instance";

import MODEL_URLS from "@/shared/fetch/model/urls";
import { getAllModels } from "@/shared/fetch/user/fetch";
import { ModelResponseIF } from "@/shared/types/model-fetch";
import { UserResultsIF } from "@/shared/types/user-fetch";

const createObjectKey = async (model: UserResultsIF) => {
  return {
    name: model.name,
    glb: (await modelDownload(model.uid)).glb.url,
  };
};

export const modelDownload = async (uid: string) => {
  const download = MODEL_URLS.DOWNLOAD(uid);
  const { data } = (await instance.get(download)) as ModelResponseIF;
  return data;
};

export const allModelDownload = async () => {
  let modelKeys: { [key: string]: string } = {};
  const models = await getAllModels();
  const fetching = await Promise.all(models.map(createObjectKey));
  fetching.forEach((file) => (modelKeys[file.name] = file.glb));
  console.log(modelKeys);

  return modelKeys;
};
