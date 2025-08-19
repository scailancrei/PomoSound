import { useEffect, type JSX } from "react"
import { useStore } from "@/states/store"
import { Select } from "@/components/select"

export function Theme(): JSX.Element {
  const { colorScheme, setColorScheme } = useStore()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", colorScheme === "dark")
  }, [colorScheme])

  const handleColorSchemeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newScheme = event.target.value as "light" | "dark"
    setColorScheme(newScheme)
  }

  return (
    <div className="flex items-center justify-center dark:text-white text-black">
      <Select
        name="selectedTheme"
        onChange={handleColorSchemeChange}
        aria-label="Select color scheme"
        value={colorScheme}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      >
        <option value="dark">dark</option>
        <option value="light">light</option>
      </Select>
    </div>
  )
}
