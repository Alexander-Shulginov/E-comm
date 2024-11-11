// focusState.ts
import { reactive, nextTick } from 'vue'

export const focusState = reactive({
    inputRef: null as HTMLInputElement | null,

    setInputRef(el: HTMLInputElement | null) {
        this.inputRef = el
    },

    focusInput() {
        if (this.inputRef) {
            nextTick(() => {
                this.inputRef?.focus()
            })
        }
    }
})
