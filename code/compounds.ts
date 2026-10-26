// Исследовательский словарь: наличие в готовой банке НЕ установлено этим кодом.
// Значения концентраций намеренно отсутствуют, пока нет анализа партии.
type Compound = {
  name: string;
  group: "structure" | "membrane" | "research" | "toxicology" | "product-claim";
  context: string;
  measuredInStudiedProduct: boolean;
};

const compounds: Compound[] = [
  { name: "β-глюканы", group: "structure", context: "семейство полисахаридов грибной клеточной стенки", measuredInStudiedProduct: false },
  { name: "хитин", group: "structure", context: "структурный полисахарид клеточной стенки", measuredInStudiedProduct: false },
  { name: "эргостерол", group: "membrane", context: "компонент мембраны грибных клеток", measuredInStudiedProduct: false },
  { name: "псилоцибин", group: "research", context: "отдельная тема контролируемых клинических исследований", measuredInStudiedProduct: false },
  { name: "иботеновая кислота", group: "toxicology", context: "связана с токсикологией Amanita muscaria", measuredInStudiedProduct: false },
  { name: "мусцимол", group: "toxicology", context: "связан с токсикологией Amanita muscaria", measuredInStudiedProduct: false },
  { name: "фульвовые кислоты", group: "product-claim", context: "заявлены на этикетке шиладжита; шиладжит не гриб", measuredInStudiedProduct: false },
];

for (const item of compounds) {
  console.log(`${item.name}: ${item.context}; измерено в изучаемой банке: ${item.measuredInStudiedProduct ? "да" : "не подтверждено"}`);
}
