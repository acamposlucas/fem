import { IWord } from "@/@types/word";
import { Play } from "lucide-react";

interface WordProps {
  word: IWord | undefined;
}

function Word({ word }: WordProps) {
  return (
    word && (
      <>
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl lowercase">{word.word}</h1>
            <small className="text-primary text-xl">{word.phonetic}</small>
          </div>
          <button
            type="button"
            className="bg-primary grid h-12 w-12 place-items-center rounded-full bg-opacity-40 p-3"
            aria-label="play"
          >
            <Play className="stroke-primary" width={22} height={22} />
          </button>
        </div>
        <div className="my-8 flex items-center gap-4 after:block after:h-[1px] after:w-full after:bg-neutral-200">
          <span className="font-bold lowercase">noun</span>
        </div>
        <div>
          <h2 className="text-neutral-700">Meaning</h2>
          <ul className="marker:bg-primary list-disc">
            <li className="ms-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, sunt quas incidunt sit numquam aspernatur asperiores
              beatae dignissimos placeat deleniti laudantium voluptatum, dolorem
              tempora dolorum eligendi tenetur libero, id est.
            </li>
          </ul>
        </div>
      </>
    )
  );
}

export default Word;
