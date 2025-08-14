export async function getPublicRepos(username: string): Promise<number> {
    const headers: Record<string, string> = { "User-Agent": "Next.js-App" };
    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/users/${"DeadZerok"}`, {
        headers,
        next: { revalidate: 3600 }, // cachea 1h
    });

    if (!res.ok) return 0;

    const data = await res.json();
    return typeof data.public_repos === "number" ? data.public_repos : 0;
}
