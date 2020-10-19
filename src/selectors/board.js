import champions from "../data/champions.json";
import traitsData from "../data/traits.json";

export const getSynergies = (board) => {
  const uniqueChampIdList = [];

  for (let row of board) {
    for (let champion of row) {
      if (champion && !uniqueChampIdList.includes(champion.championId))
        uniqueChampIdList.push(champion.championId);
    }
  }
  const uniqueChampionsList = uniqueChampIdList.map((champId) =>
    champions.find((champion) => champion.championId === champId)
  );

  // Key / value pair for traits . need to be then mapped for active traits based on traitsData
  return uniqueChampionsList.reduce((traitsList, champion) => {
    champion.traits.forEach((key) => {
      // Je pense que je n'ai pas la bonne data structure. Je veux genre un SET? key/value
      if (!traitsList[key]) {
        traitsList[key] = 1;
      } else traitsList[key]++;
    });
    return traitsList;
  }, []);

  //   return uniqueChampionsList;
};
