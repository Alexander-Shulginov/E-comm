export interface Genre {
    genreName: string
    genreImg: string
    genreSlug: string
}

import actionImg from '@/assets/img/genre/actions.jpg?format=webp'
// import horrorImg from '@/assets/img/genre/horror.jpg?format=webp'
import racingImg from '@/assets/img/genre/racing.jpg?format=webp'
import rpgImg from '@/assets/img/genre/rpg.jpg?format=webp'
import adventureImg from '@/assets/img/genre/adventure.jpg?format=webp'
import casualImg from '@/assets/img/genre/casual.jpg?format=webp'
import simulationImg from '@/assets/img/genre/simulation.jpg?format=webp'

export const genreList: Genre[] = [
    { genreName: 'Action', genreImg: actionImg, genreSlug: 'action' },
    // { genreName: 'Horror', genreImg: horrorImg, genreSlug: 'horror' },
    { genreName: 'Racing', genreImg: racingImg, genreSlug: 'racing' },
    { genreName: 'Rpg', genreImg: rpgImg, genreSlug: 'role-playing-games-rpg' },
    { genreName: 'Adventure', genreImg: adventureImg, genreSlug: 'adventure' },
    { genreName: 'Casual', genreImg: casualImg, genreSlug: 'casual' },
    { genreName: 'Simulation', genreImg: simulationImg, genreSlug: 'simulation' }
]
