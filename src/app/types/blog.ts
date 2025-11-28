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
  published_at: string;
  content: string;
  tags: string[];
  tag_list: string[];
  coverImage?: string;
  cover_image?: string;
  readingTime: number;
  reading_time_minutes: number;
  author: {
    name: string;
    avatar: string;
  };
}
