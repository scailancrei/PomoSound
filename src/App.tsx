import { useEffect, type JSX } from "react"
import { useStore } from "@/states/store"
import Pomodoro from "@/pomodoro/pomodoro"
import { Theme } from "@/components/theme"

function App(): JSX.Element {
  const { setColorScheme, colorScheme } = useStore()
  useEffect(() => {
    const actualColorScheme = localStorage.getItem("colorScheme")

    if (actualColorScheme) {
      setColorScheme(actualColorScheme as "light" | "dark")
    }
    if (colorScheme === "dark" && actualColorScheme !== "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("colorScheme", "dark")
      setColorScheme("dark")
    } else {
      localStorage.setItem("colorScheme", "light")
      document.documentElement.classList.remove("dark")
      setColorScheme("light")
    }
    return colorScheme === "dark"
      ? setColorScheme("dark")
      : setColorScheme("light")
  }, [setColorScheme, colorScheme])

  return (
    <>
      <div className="grid grid-rows-2  pt-4 justify-center dark:bg-gray-800 bg-orange-300 min-h-screen">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-center">
            Welcome to PomoSound
          </h1>

          <Theme />
        </div>

        <div className="grid bg-blend-darken text-center p-4">
          <Pomodoro />
        </div>
      </div>
    </>
  )
}

export default App
