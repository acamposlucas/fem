import { User, Reply } from "./index";

export type IComment = {
  id: string;
  content: string;
  createdAt: Date;
  score: number;
  user: User;
  replies: Array<Reply>;
};
