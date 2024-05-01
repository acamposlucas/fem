import { Plus, Minus, Reply } from "lucide-react";
import { CommentsService } from "../services/commentsService";
import { useState } from "react";
import { IComment } from "../types";
import moment from "moment";

export function CommentsSection() {
  const commentsService = new CommentsService();
  const [comments, setComments] = useState(commentsService.comments);
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {comments.length > 0
          ? comments.map((c) => <Comment comment={c} />)
          : "Write something for us!"}
      </div>
      <div>
        <NewComment />
      </div>
    </section>
  );
}

function Comment({ comment }: { comment: IComment }) {
  const formatDate = (date: Date) => moment(date).fromNow();
  return (
    <div className="w-100 flex max-w-[730px] flex-col gap-4">
      <div className="flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row">
        <div className="hidden md:block">
          <Score score={comment.score} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={comment.user.image.webp ?? comment.user.image.png}
                width={32}
                height={32}
              />
              <span className="font-bold text-custom-blue-800">
                {comment.user.username}
              </span>
              <span>{formatDate(comment.createdAt)}</span>
            </div>
            <div className="hidden md:block">
              <ReplyButton />
            </div>
          </div>
          <p>{comment.content}</p>
          <div className="flex items-center justify-between">
            <div className="md:hidden">
              <Score score={comment.score} />
            </div>
            <div className="md:hidden">
              <ReplyButton />
            </div>
          </div>
        </div>
      </div>
      {comment.replies.length > 0 && (
        <div className="flex flex-col gap-4 border-s-2 ps-4 md:ms-4">
          {comment.replies.map((reply, i) => (
            <div key={i}>
              <div className="flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row">
                <div className="hidden md:block">
                  <Score score={reply.score} />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={reply.user.image.webp ?? reply.user.image.png}
                        width={32}
                        height={32}
                      />
                      <span className="font-bold text-custom-blue-800">
                        {reply.user.username}
                      </span>
                      <span>{formatDate(reply.createdAt)}</span>
                    </div>
                    <div className="hidden md:block">
                      <ReplyButton />
                    </div>
                  </div>
                  <p>
                    <span className="font-bold text-primary">
                      @{reply.replyingTo}
                    </span>{" "}
                    {reply.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="md:hidden">
                      <Score score={reply.score} />
                    </div>
                    <div className="md:hidden">
                      <ReplyButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Score({ score }: { score: number }) {
  return (
    <div className="flex w-fit items-center gap-2 rounded-[10px] bg-custom-gray-200 px-4 py-3 md:flex-col md:px-2">
      <button className="text-custom-blue-200">
        <Plus />
      </button>
      <span className="font-bold text-primary">{score}</span>
      <button className="text-custom-blue-200">
        <Minus />
      </button>
    </div>
  );
}

function ReplyButton() {
  return (
    <button className="flex items-center gap-2 font-bold text-primary">
      <Reply />
      Reply
    </button>
  );
}

function NewComment() {
  return (
    <div className="rounded-lg bg-white p-4">
      <div className="group mb-4 h-24 rounded-lg border border-custom-gray-200 px-5 py-3 focus-within:border-custom-blue-800">
        <form>
          <textarea
            rows={3}
            placeholder="Add a comment..."
            className="w-full resize-none outline-none group-focus:border-custom-blue-800"
          ></textarea>
        </form>
      </div>
      <div className="flex items-center justify-between">
        <img
          src="./avatars/image-juliusomo.webp"
          alt=""
          width={32}
          height={32}
        />
        <button
          type="submit"
          className="rounded-lg bg-primary px-8 py-3 font-bold uppercase text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
