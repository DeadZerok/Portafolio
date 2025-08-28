"use client"
import { useEffect, useState } from "react";
import { getPublicRepos } from "@/lib/github";

export function useGithubRepos(username: string) {
    const [reposCount, setReposCount] = useState(0);

    useEffect(() => {
        getPublicRepos(username).then(count => setReposCount(count));
    }, [username]);

    return reposCount;
}
