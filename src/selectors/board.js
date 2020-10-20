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

  // List of Traits with cumulated value
  const traits = uniqueChampionsList.reduce((traitsList, champion) => {
    champion.traits.forEach((key) => {
      // Je pense que je n'ai pas la bonne data structure. Je veux genre un SET? key/value
      const index = traitsList.findIndex((trait) => trait.key === key);
      if (index === -1) {
        let obj = traitsData.find((trait) => trait.key === key);
        obj.value = 1;
        traitsList.push(obj);
      } else {
        traitsList[index].value++;
      }
    });
    // get active style (Common = 0, Bronze = 1, Silver = 2, ...)
    return traitsList.map((trait) => {
      trait.style = null; // no active style
      for (let set of trait.sets) {
        set.active = false;
        if (trait.value >= set.min && trait.value <= set.max) {
          trait.style = set.style;
          set.active = true;
          break;
        }
      }
      return trait;
    });
  }, []);

  return traits;
};
