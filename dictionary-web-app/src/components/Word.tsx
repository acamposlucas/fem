import { IWord } from "@/@types/word";
import { ExternalLink, Play } from "lucide-react";
import { Separator } from "./ui/separator";

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
            <small className="text-xl text-primary">{word.phonetic}</small>
          </div>
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full bg-primary bg-opacity-40 p-3"
            aria-label="play"
          >
            <Play className="stroke-primary" width={22} height={22} />
          </button>
        </div>
        {word.meanings.map(({ partOfSpeech, definitions, synonyms }) => (
          <>
            <div className="my-8 flex items-center gap-4 after:block after:h-[1px] after:w-full after:bg-neutral-200">
              <span className="font-bold lowercase">{partOfSpeech}</span>
            </div>
            <h2 className="mb-4 text-neutral-400">Meaning</h2>

            <ul className="list-disc marker:text-primary">
              {definitions.map(({ definition, example }) => (
                <li className="mb-3 ms-4">
                  {definition}
                  {example && <p>{example}</p>}
                </li>
              ))}
            </ul>
            {synonyms.length > 0 && (
              <p className="mt-6 text-neutral-400">
                Synonyms:{" "}
                <span className="font-bold text-primary">
                  {synonyms.join(", ")}
                </span>
              </p>
            )}
          </>
        ))}
        <Separator orientation="horizontal" className="my-6" />
        <strong className="block font-normal text-neutral-500 underline">
          Source
        </strong>
        <a href={word.sourceUrls[0]}>
          {word.sourceUrls}{" "}
          <ExternalLink width={16} height={16} className="mb-1 inline-block" />
        </a>
      </>
    )
  );
}

export default Word;
