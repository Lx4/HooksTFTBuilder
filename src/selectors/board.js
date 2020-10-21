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
  let traits = uniqueChampionsList.reduce((traitsList, champion) => {
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

  traits = traits.sort((a, b) =>
    styleToNumber(a) > styleToNumber(b) ? -1 : 1
  );

  return traits;
};

// helpers for trait to convert style to number to sort null: 0, bronze:1, silver:2, gold:3, chromatic: 4
const styleToNumber = (trait) => {
  switch (trait.style) {
    case "bronze":
      return 1;
    case "silver":
      return 2;
    case "gold":
      return 3;
    case "chromatic":
      return 4;
    default:
      return 0;
  }
};
