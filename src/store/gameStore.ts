import { defineStore } from 'pinia'
import { IGame } from '../types/types'
import { fetchGames } from '../services/gamesService'

export const useGameStore = defineStore('gameStore', {
    state: () => {
        return {
            gameList: [] as IGame[],
            gameInfo: {},
            isLoading: false,
            isError: false
        }
    },
    actions: {
        async fetchGames() {
            this.isLoading = true
            this.isError = false
            try {
                this.gameList = await fetchGames()
            } catch (error) {
                this.isError = true
                console.log(error)
            } finally {
                this.isLoading = false
            }
        }
    },

    getters: {}
})
