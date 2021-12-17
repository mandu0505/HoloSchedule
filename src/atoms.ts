import { atom } from "recoil";

export const isLoggedInAtom = atom({
  key: "loggedIn",
  default: false,
});
export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
export const isLikedAtom = atom({
  key: "isLiked",
  default: false,
});
