import champions from "../data/champions.json";

export const initChampion = (championId) => {
  const champion = champions.find(
    (champion) => champion.championId === championId
  );
  const newChamp = { ...champion };
  newChamp.items = [];
  return newChamp;
};
