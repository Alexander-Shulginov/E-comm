import { defineStore } from 'pinia'
import { IGame } from '../types/types'
import { getAllGames, getGameById } from '../services/gamesService'

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
        },

        async fetchGameById(id: number) {
            this.isLoading = true
            this.isError = false
            try {
                this.gameInfo = await getGameById(id)
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
