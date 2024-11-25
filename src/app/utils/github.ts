export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

export async function getTopRepositories(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=stars&per_page=200`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 * 24 } // Cache for 1 hour
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }

  const repos = await response.json();
  return repos;
}
