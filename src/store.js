let data = null;

export const loadData = async () => {
  if (!data) {
    const response = await fetch("../example.json");
    data = await response.json();
  }
  return data;
};

export const sortingByDistance = async () => {
  const jsonData = await loadData();
  return jsonData.storeList.slice().sort((a, b) => a.distance - b.distance);
};

export const sortingByName = async () => {
  const jsonData = await loadData();
  return jsonData.storeList
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const filteringByCategory = async (category) => {
  const jsonData = await loadData();
  if (!category.length) return jsonData.storeList;
  return jsonData.storeList
    .slice()
    .filter((item) => item.category === category);
};
