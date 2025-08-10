import { create } from "zustand"

interface StoreState {
  colorScheme: "light" | "dark"
  hours: number
  minutes: number
  seconds: number
  setTimer: (newTime: number) => void
  setColorScheme: (scheme: "light" | "dark") => void
  isRunning: boolean
}

export const useStore = create<StoreState>((set) => ({
  colorScheme: "dark",
  hours: 0,
  minutes: 0,
  seconds: 0,
  setColorScheme: (scheme) =>
    set({
      colorScheme: scheme,
    }),
  setTimer: (newTime: number) =>
    set({
      hours: Math.floor(newTime / 3600),
      minutes: Math.floor((newTime % 3600) / 60),
      seconds: newTime % 60,
    }),
  isRunning: false,
}))
