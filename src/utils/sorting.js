import { restaurantData } from '../data/restaurantData';

export const sortingByName = () => {
    return [...restaurantData.sort((restaurantA, restaurantB)=> restaurantA.name.localeCompare(restaurantB.name))];
}

export const sortingByDistance = () => {
    return [...restaurantData.sort((restaurantA, restaurantB)=> restaurantA.distance - restaurantB.distance)];
}