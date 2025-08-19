import { useEffect, type JSX } from "react"
import { useStore } from "@/states/store"
import Pomodoro from "@/pomodoro/pomodoro"
import { Theme } from "@/components/theme"

function App(): JSX.Element {
  const colorScheme = useStore((s) => s.colorScheme)

  const hasHydrated = useStore.persist.hasHydrated()
  useEffect(() => {
    if (!hasHydrated) return
    document.documentElement.classList.toggle("dark", colorScheme === "dark")
  }, [colorScheme, hasHydrated])
  return (
    <>
      <div className="grid grid-rows-[1fr_3fr] pt-4 justify-center dark:bg-gray-800 bg-white min-h-screen">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-center">
            Welcome to PomoSound
          </h1>
          <Theme />
        </div>
        <div>
          <Pomodoro />
        </div>
      </div>
    </>
  )
}

export default App
