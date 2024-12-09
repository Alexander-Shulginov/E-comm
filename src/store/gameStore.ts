import { defineStore } from 'pinia'
import { IGame } from '../types/types'
import { getAllGames } from '../services/gamesService'

export const useGameStore = defineStore('gameStore', {
    state: () => {
        return {
            gameList: [] as IGame[],
            isLoading: false,
            isError: false
        }
    },
    actions: {
        async fetchAllGames() {
            this.isLoading = true
            this.isError = false
            try {
                this.gameList = await getAllGames()
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
