import champions from "../data/champions.json";

export const initChampion = (championId) => {
  const champion = champions.find(
    (champion) => champion.championId === championId
  );
  champion.items = [];
  return champion;
};
