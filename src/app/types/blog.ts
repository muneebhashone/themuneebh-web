export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  tag_list: string[];
  url: string;
  body_markdown: string;
  cover_image?: string;
  reading_time_minutes: number;
  user: {
    name: string;
    profile_image: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
  tags: string[];
  coverImage?: string;
  readingTime: number;
  author: {
    name: string;
    avatar: string;
  };
}
