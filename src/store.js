export const sortingByDistance = (ObjArr) => {
  return ObjArr.slice().sort((a, b) => a.distance - b.distance);
};

export const sortingByName = (ObjArr) => {
  return ObjArr.slice().sort((a, b) => a.name - b.name);
};

export const filteringByCategory = (ObjArr) => {
  return ObjArr.slice().filter((item) => item.category === "한식");
};
