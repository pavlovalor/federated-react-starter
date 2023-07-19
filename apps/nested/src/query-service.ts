import {
  useQuery,
} from '@tanstack/react-query';


interface Response {
  postLink: string;
  subreddit: string;
  title: string;
  url: string;
  nsfw: boolean,
  spoiler: boolean,
  author: string,
  ups: number,
  preview: string[];
}


export const useImgur = () => useQuery<Response, unknown>({
  queryKey: ['memes'],
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  async queryFn() {
    const response = await fetch('https://meme-api.com/gimme');
    return await response.json() as Promise<Response>;
  },
})
