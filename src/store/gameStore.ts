import { defineStore } from 'pinia'
import { IGame } from '../types/types'
import { getAllGames } from '../services/gamesService'

export const useGameStore = defineStore('gameStore', {
    state: () => {
        return {
            gameList: [] as IGame[],
            isLoading: false
        }
    },
    actions: {
        async fetchAllGames() {
            this.isLoading = true
            try {
                this.gameList = await getAllGames()
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoading = false
            }
        }
    },

    getters: {}
})
