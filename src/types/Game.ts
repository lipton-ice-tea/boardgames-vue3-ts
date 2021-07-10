export interface GameCard {
    title: string,
    photoUrl: string,
    alias: string,
    bggRating: number,
    commentsTotal: number,
    year: number,
    playersMin: number,
    playersMax: number,
    playersAgeMin: number,
    description: string,
    descriptionShort: string,
}

export type ListView = 'card' | 'grid'

export type SortType = 'bggRating' | 'title'