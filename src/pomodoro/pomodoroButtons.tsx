import { Button } from "@/components/button"
import Play from "@/icons/play"
import Pause from "@/icons/pause"

export default function PomodoroButtons() {
  return (
    <div className="flex items-center justify-center">
      <Button
        className={`scheme-dark:bg-gray-700 scheme-light:bg-gray-300 text-white rounded-4xl m-4 p-4`}
      >
        <Play className="text-black dark:text-white " />
      </Button>
      <Button
        className={`scheme-dark:bg-gray-700 scheme-light:bg-gray-300 text-white rounded-4xl m-4 p-4`}
      >
        <Pause />
      </Button>
    </div>
  )
}
