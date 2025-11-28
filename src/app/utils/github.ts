export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  forks_count: number;
}

export async function getTopRepositories(
  username: string
): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=200`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 * 24 }, // Cache for 24 hours
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch GitHub repositories:", response.statusText);
      return [];
    }

    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return [];
  }
}
