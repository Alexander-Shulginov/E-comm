import { defineStore } from 'pinia'
import { IGame } from '../types/types'
import { getAllGames, getGameById, getGameByPlatform, sortGamesBy } from '../services/gamesService'
import { GameSorted } from '../types/sortedTypes'
import { GamePlatform } from '../types/platformTypes'

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
            if (this.gameList.length) return

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
        },

        async sortGamesBy(sort: GameSorted) {
            this.isLoading = true
            this.isError = false
            try {
                this.gameList = await sortGamesBy(sort)
            } catch (error) {
                this.isError = true
                console.log(error)
            } finally {
                this.isLoading = false
            }
        },

        async sortGamesByPlatform(platform: GamePlatform) {
            this.isLoading = true
            this.isError = false
            try {
                this.gameList = await getGameByPlatform(platform)
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
