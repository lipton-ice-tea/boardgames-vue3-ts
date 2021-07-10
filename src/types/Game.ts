export interface GameList {
    title: string,
    photoUrl: string,
    alias: string,
    bggRating: number,
    commentsTotal: number,
    year: number,
    playersMin: number,
    playersMax: number,
    playersAgeMin: number,
    descriptionShort: string,
}

export type ListView = 'card' | 'grid'

export type SortType = 'bggRating' | 'title'