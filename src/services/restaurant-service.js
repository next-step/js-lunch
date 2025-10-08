const KEY_LOCAL_STORAGE = "restaurants";

export function getRestaurantList() {
  return JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)) || [];
}

export function saveRestaurantList(list) {
  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(list));
}
