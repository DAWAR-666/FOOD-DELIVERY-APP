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
  aggregatedDiscountInfoV3: AggregatedDiscountInfoV3
}
export interface AggregatedDiscountInfoV3 {
  header: string
  discountTag?: string
  subHeader?: string
}
export interface RestaurantCardData { // This is the wrapper type

    info: CardInfo;
}