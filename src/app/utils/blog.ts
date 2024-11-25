import { DevToArticle, BlogPost } from '../types/blog';

const DEVTO_API_URL = 'https://dev.to/api';
const USERNAME = 'themuneebh'; // Your dev.to username

async function fetchWithTimeout(url: string, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}

export async function getDevToArticles(): Promise<BlogPost[]> {
  try {
    const response = await fetchWithTimeout(
      `${DEVTO_API_URL}/articles?username=${USERNAME}`,
      {
        headers: {
          'Accept': 'application/vnd.forem.api-v1+json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }

    const articles: DevToArticle[] = await response.json();
    
    return articles.map(transformDevToArticle);
  } catch (error) {
    console.error('Error fetching Dev.to articles:', error);
    return [];
  }
}

export async function getDevToArticle(id: string): Promise<BlogPost | null> {
  try {
    const response = await fetchWithTimeout(
      `${DEVTO_API_URL}/articles/${id}`,
      {
        headers: {
          'Accept': 'application/vnd.forem.api-v1+json'
        }
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }

    const article: DevToArticle = await response.json();
    return transformDevToArticle(article);
  } catch (error) {
    console.error('Error fetching Dev.to article:', error);
    return null;
  }
}

function transformDevToArticle(article: DevToArticle): BlogPost {
  return {
    id: article.id.toString(),
    title: article.title,
    description: article.description || '',
    date: new Date(article.published_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    content: article.body_markdown || '',
    tags: Array.isArray(article.tag_list) ? article.tag_list : [],
    coverImage: article.cover_image,
    readingTime: article.reading_time_minutes,
    author: {
      name: article.user.name || 'Anonymous',
      avatar: article.user.profile_image || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'
    }
  };
}

// Function to create a new blog post on dev.to
export async function createDevToArticle(
  title: string,
  content: string,
  tags: string[],
  apiKey: string
): Promise<BlogPost | null> {
  try {
    const response = await fetchWithTimeout(
      `${DEVTO_API_URL}/articles`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey
        },
        body: JSON.stringify({
          article: {
            title,
            body_markdown: content,
            published: true,
            tags: tags
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to create article: ${response.statusText}`);
    }

    const article: DevToArticle = await response.json();
    return transformDevToArticle(article);
  } catch (error) {
    console.error('Error creating Dev.to article:', error);
    return null;
  }
}
