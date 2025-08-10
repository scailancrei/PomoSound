import { useEffect, type JSX } from "react"
import { useStore } from "@/states/store"
import { Select } from "@/components/select"

export function Theme(): JSX.Element {
  const { colorScheme, setColorScheme } = useStore()
  console.log(`Current color scheme: ${colorScheme}`)
  const defaultValueColorScheme =
    localStorage.getItem("colorScheme") || colorScheme

  useEffect(() => {
    if (defaultValueColorScheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    console.log(`Default color scheme set to: ${defaultValueColorScheme}`)
  }, [colorScheme, defaultValueColorScheme, setColorScheme])

  const handleColorSchemeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newScheme = event.target.value as "light" | "dark"
    setColorScheme(newScheme)
    console.log(`Color scheme changed to: ${newScheme}`)
    console.log(colorScheme)
  }

  return (
    <div className="flex items-center justify-center dark:text-white text-black">
      <Select
        name="selectedTheme"
        onChange={handleColorSchemeChange}
        aria-label="Select color scheme"
        defaultValue={defaultValueColorScheme}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      >
        <option value="dark">dark</option>
        <option value="light">light</option>
      </Select>
    </div>
  )
}
