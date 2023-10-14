import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { IWord } from "@/@types/word";

interface SearchFormProps {
  word: IWord | undefined;
  setWord: React.Dispatch<React.SetStateAction<IWord | undefined>>;
}

const formSchema = z.object({
  query: z.string().min(2).max(50),
});

function SearchForm({ word, setWord }: SearchFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${values.query}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data: IWord[]) => {
        setWord(data[0]);
      });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <>
                  <Input placeholder="Search for any word..." {...field} />
                  <Search
                    className="stroke-primary absolute right-4 top-0"
                    width={20}
                    height={20}
                  />
                </>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
}

export default SearchForm;
