// Учебный словарь создан при переносе в репозиторий Fungi, 2026-10-26.
// Это не медицинская база и не инструмент определения дикорастущих грибов.
type Mushroom = {
  commonName: string;
  scientificName: string;
  studyFocus: string;
  category: "food-example" | "research-only";
};

const mushrooms: Mushroom[] = [
  { commonName: "вешенка", scientificName: "Pleurotus ostreatus", studyFocus: "гифы и плодовое тело", category: "food-example" },
  { commonName: "ежовик гребенчатый", scientificName: "Hericium erinaceus", studyFocus: "плодовое тело и экстракты", category: "food-example" },
  { commonName: "шиитаке", scientificName: "Lentinula edodes", studyFocus: "строение клеточной стенки", category: "food-example" },
  { commonName: "красный мухомор", scientificName: "Amanita muscaria", studyFocus: "токсикология и микориза", category: "research-only" },
];

for (const mushroom of mushrooms) {
  console.log(`${mushroom.commonName} (${mushroom.scientificName}) → ${mushroom.studyFocus}`);
}
