export interface GameCard {
    title: string,
    description: string,
    photoUrl?: string,
    alias?: string,
    bggRating?: number,
    commentsTotal?: number,
    year?: number,
    playersMin?: number,
    playersMax?: number,
    playersAgeMin?: number,
    descriptionShort?: string,
    props?: {
        title: string,
        value: string | number,
        icon?: string
    }[]
}

export type ListView = 'card' | 'grid'

export type SortType = 'bggRating' | 'title'