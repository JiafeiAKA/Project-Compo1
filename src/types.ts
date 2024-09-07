import type { RouteParamsGeneric } from 'vue-router'

export interface OlympicsDetail {
  id: number
  name: string
  gold_medals: string
  silver_medals: string
  bronze_medals: string
  symbol: string
  detail: Detail[]
}

export interface Detail {
  sport: string
  gender: string
  name: string
  medal: string
}

export interface CountryDetail {
  id: number
  population: string
  capital: string
  traditional_food: string
}

export interface Comments {
  country: string
  id: number
  comments: CommentDetail[]
}

export interface CommentDetail {
  username: string
  comment: string
}
// Assuming CommentDetail is defined somewhere in your types file, like types.ts
export interface CommentDetail {
  username: string;
  comment: string;
  timestamp: number; // Add this line to include the timestamp property
}
