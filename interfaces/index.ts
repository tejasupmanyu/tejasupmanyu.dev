export interface IPost {
  data: IPostMeta;
  content: string;
}

export interface IPostMeta {
  title: string;
  date: string;
  description: string;
  hero: string;
  category: string;
}

export interface ITalk {
  title: string;
  src: string;
}
