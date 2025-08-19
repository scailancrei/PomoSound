import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type ColorScheme = "light" | "dark"
interface StoreState {
  colorScheme: ColorScheme
  startTimer: () => void
  pauseTimer: () => void
  hours: number
  minutes: number
  seconds: number
  setTimer: (newTime: number) => void
  setColorScheme: (scheme: ColorScheme) => void
  isRunning: boolean
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      colorScheme: "dark",
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunning: false,
      startTimer: () => {
        if (get().isRunning) return
        set({
          isRunning: true,
        })
      },
      pauseTimer: () => {
        if (!get().isRunning) return
        set({
          isRunning: false,
        })
      },
      setTimer: (newTime: number) =>
        set({
          hours: Math.floor(newTime / 3600),
          minutes: Math.floor((newTime % 3600) / 60),
          seconds: newTime % 60,
        }),
      setColorScheme: (scheme) =>
        set({
          colorScheme: scheme,
        }),
    }),
    {
      name: "pomoSound",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
