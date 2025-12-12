export interface CardInfo {
  id: string
  name: string
  cloudinaryImageId: string
  locality: string
  areaName: string
  costForTwo: string
  cuisines: string[]
  avgRating: number
  parentId: string
  avgRatingString: string
  totalRatingsString: string
  veg?: boolean
  isNewlyOnboarded?: boolean
}
export interface RestaurantCardData { // This is the wrapper type

    info: CardInfo;
}