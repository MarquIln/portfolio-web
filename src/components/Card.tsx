'use client'
import { getAllRepositories } from "@/services/services"
import { useEffect, useState } from "react";

export function CardComponent() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    getAllRepositories({ username: "MarquIln" })
      .then((response) => {
        setRepositories(response.data);
      });
  }, []);

  function handleClick(repoUrl: string) {
    window.open(repoUrl, "_blank");
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {repositories.map((repo: any, index: number) => (
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
