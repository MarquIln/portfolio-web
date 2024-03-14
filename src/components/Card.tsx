'use client'
import { useFetch } from "@/hooks/useFetch";

type Repository = {
  name: string;
  description: string;
  html_url: string;
};

export function CardComponent() {
  const { data: repositories } = useFetch<Repository[]>('users/MarquIln/repos')

  function handleClick(repoUrl: string) {
    window.open(repoUrl, "_blank");
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {repositories?.map((repo: any, index: number) => (
        <div
          key={index}
          className="card-hover-effect flex flex-col items-center rounded-xl border border-[#383838] bg-[#1e1e1f] px-5 py-5 text-white hover:bg-[#282828] md:gap-3"
          onClick={() => handleClick(repo.html_url)}
        >
          <div className="w-full text-center">
            <div className="font-medium">{repo.name ? repo.name : 'No name'}</div>
            <div className="text-[10px] text-[#c1c1c1]">{repo.description ? repo.description : 'No description'}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
