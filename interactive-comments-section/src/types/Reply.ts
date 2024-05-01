import {Comment} from "./index"
export type Reply = Omit<Comment, "replies"> & {
    replyingTo: string;
}