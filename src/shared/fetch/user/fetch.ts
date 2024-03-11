import { instance } from "@/shared/fetch/instance";

import USER_URLS from "@/shared/fetch/user/urls";

import { UserResultsIF, UserResponseIF } from "@/shared/types/fetch/user-fetch";

const createUID = (result: UserResultsIF) => {
  return {
    name: result.name,
    uid: result.uid,
  };
};

export const getLikeModels = async (): Promise<UserResultsIF[]> => {
  const { data } = (await instance.get(USER_URLS.LIKES)) as UserResponseIF;
  const UID = data.results.map(createUID);
  return UID;
};

export const getPurchaseModels = async (): Promise<UserResultsIF[]> => {
  const { data } = (await instance.get(USER_URLS.PURCHASES)) as UserResponseIF;
  const UID = data.results.map(createUID);
  return UID;
};

export const getAllModels = async () => {
  const loadArr = [getLikeModels, getPurchaseModels];
  const [likes, purchases] = await Promise.all(loadArr.map((load) => load()));
  const concat = [...likes, ...purchases];
  return concat;
};
