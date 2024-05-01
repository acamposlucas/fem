import { IComment } from "./index";
export type Reply = Omit<IComment, "replies"> & {
  replyingTo: string;
};
