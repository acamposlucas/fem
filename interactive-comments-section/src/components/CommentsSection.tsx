import { Plus, Minus, Reply } from "lucide-react";
import { CommentsService } from "../services/commentsService";
import { useState } from "react";

export function CommentsSection() {
  const commentsService = new CommentsService();
  const [comments, setComments] = useState(commentsService.comments);
  return (
    <section>
      {comments.length > 0 ? (
        comments.map((c) => <Comment />)
      ) : "Write something for us!"}
      <div className="mt-4">
        <NewComment />
      </div>
    </section>
  );
}

function Comment() {
  const replies = [1, 2];
  return (
    <div className="w-100 flex max-w-[730px] flex-col gap-4">
      <div className="flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row">
        <div className="hidden md:block">
          <Score />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="./avatars/image-amyrobson.webp"
                width={32}
                height={32}
              />
              <span className="text-custom-blue-800 font-bold">amy robson</span>
              <span>1 month ago</span>
            </div>
            <div className="hidden md:block">
              <ReplyButton />
            </div>
          </div>
          <p>
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You’ve nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
          <div className="flex items-center justify-between">
            <div className="md:hidden">
              <Score />
            </div>
            <div className="md:hidden">
              <ReplyButton />
            </div>
          </div>
        </div>
      </div>
      {replies.length > 0 && (
        <div className="flex flex-col gap-4 border-s-2 ps-4 md:ms-4">
          {replies.map((_, i) => (
            <div key={i}>
              <div className="flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row">
                <div className="hidden md:block">
                  <Score />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src="./avatars/image-amyrobson.webp"
                        width={32}
                        height={32}
                      />
                      <span className="text-custom-blue-800 font-bold">
                        amy robson
                      </span>
                      <span>1 month ago</span>
                    </div>
                    <div className="hidden md:block">
                      <ReplyButton />
                    </div>
                  </div>
                  <p>
                    <span className="text-primary font-bold">@replyingTo</span>{" "}
                    Impressive! Though it seems the drag feature could be
                    improved. But overall it looks incredible. You’ve nailed the
                    design and the responsiveness at various breakpoints works
                    really well.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="md:hidden">
                      <Score />
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

function Score() {
  return (
    <div className="bg-custom-gray-200 flex w-fit items-center gap-2 rounded-[10px] px-4 py-3 md:flex-col md:px-2">
      <button className="text-custom-blue-200">
        <Plus />
      </button>
      <span className="text-primary font-bold">12</span>
      <button className="text-custom-blue-200">
        <Minus />
      </button>
    </div>
  );
}

function ReplyButton() {
  return (
    <button className="text-primary flex items-center gap-2 font-bold">
      <Reply />
      Reply
    </button>
  );
}

function NewComment() {
  return (
    <div className="rounded-lg bg-white p-4">
      <div className="focus-within:border-custom-blue-800 border-custom-gray-200 group mb-4 h-24 rounded-lg border px-5 py-3">
        <form>
          <textarea
            rows={3}
            placeholder="Add a comment..."
            className="group-focus:border-custom-blue-800 w-full resize-none outline-none"
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
          className="bg-primary rounded-lg px-8 py-3 font-bold uppercase text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
