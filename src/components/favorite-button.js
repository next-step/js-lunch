import favoriteFilledIcon from "../../images/favorite-icon-filled.png";
import favoriteLinedIcon from "../../images/favorite-icon-lined.png";

export function createFavoriteButton({ restaurant, onToggle }) {
  const favoriteButton = document.createElement("button");
  favoriteButton.className = "restaurant__favorite-button";

  const favoriteIcon = createFavoriteIcon(restaurant.isFavorite);
  favoriteButton.appendChild(favoriteIcon);

  favoriteButton.addEventListener("click", (event) => {
    event.stopPropagation();

    restaurant.isFavorite = !restaurant.isFavorite;
    changeFavoriteIcon({
      favoriteIconEl: favoriteIcon,
      isFavorite: restaurant.isFavorite,
    });
    onToggle(restaurant.name);
  });

  return favoriteButton;
}

function createFavoriteIcon(isFavorite) {
  const favoriteIcon = document.createElement("img");
  changeFavoriteIcon({ favoriteIconEl: favoriteIcon, isFavorite: isFavorite });
  return favoriteIcon;
}

function changeFavoriteIcon({ favoriteIconEl, isFavorite }) {
  favoriteIconEl.src = isFavorite ? favoriteFilledIcon : favoriteLinedIcon;
}
