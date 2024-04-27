export type Reply = Omit<Comment, "replies"> & {
    replyingTo: string;
}