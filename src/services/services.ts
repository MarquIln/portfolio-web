import axios from 'axios';

export function getAllRepositories({ username }: { username: string }) {
  return axios.get(`https://api.github.com/users/MarquIln/repos`);
}
