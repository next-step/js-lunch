const STORAGE_KEY = "restaurantsData";

export function loadRestaurants() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : null;
}

export function saveRestaurants(restaurantsData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(restaurantsData));
}
