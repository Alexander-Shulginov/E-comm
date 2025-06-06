export interface Genre {
    genreId: number
    genreName: string
    genreImg: string
    genreSlug: string
}

import actionImg from '@/assets/img/genre/actions.webp'
import racingImg from '@/assets/img/genre/racing.webp'
import rpgImg from '@/assets/img/genre/rpg.webp'
import adventureImg from '@/assets/img/genre/adventure.webp'
import casualImg from '@/assets/img/genre/casual.webp'
import simulationImg from '@/assets/img/genre/simulation.webp'

export const genreList: Genre[] = [
    { genreId: 4, genreName: 'Action', genreImg: actionImg, genreSlug: 'action' },
    { genreId: 1, genreName: 'Racing', genreImg: racingImg, genreSlug: 'racing' },
    { genreId: 5, genreName: 'Rpg', genreImg: rpgImg, genreSlug: 'role-playing-games-rpg' },
    { genreId: 3, genreName: 'Adventure', genreImg: adventureImg, genreSlug: 'adventure' },
    { genreId: 40, genreName: 'Casual', genreImg: casualImg, genreSlug: 'casual' },
    { genreId: 14, genreName: 'Simulation', genreImg: simulationImg, genreSlug: 'simulation' }
]
