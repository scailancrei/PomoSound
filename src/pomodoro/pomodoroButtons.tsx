import { Button } from "@/components/button"
import { useStore } from "@/states/store"
import Play from "@/icons/play"
import Clear from "@/icons/clear"
import Pause from "@/icons/pause"

export default function PomodoroButtons() {
  const { startTimer, pauseTimer, isRunning } = useStore()

  const handleStart = () => {
    startTimer()
    console.log(isRunning)
    console.log("Timer started")
  }
  const handlePause = () => {
    pauseTimer()
    console.log(isRunning)
    console.log("Timer paused")
  }
  return (
    <div className="flex items-center justify-center">
      {isRunning ? (
        <Button
          onClick={handlePause}
          className={`scheme-dark:bg-gray-700 scheme-light:bg-gray-300 text-white rounded-4xl m-4 p-4`}
        >
          <Pause />
        </Button>
      ) : (
        <Button
          onClick={handleStart}
          className={`scheme-dark:bg-gray-700 scheme-light:bg-gray-300 text-white rounded-4xl m-4 p-4`}
        >
          <Play className="text-black dark:text-white " />
        </Button>
      )}
      <Button className=" rounded-4xl p-4 scheme-dark:bg-gray-700 scheme-light:bg-gray-300 ">
        <Clear className="text-black dark:text-white" />
      </Button>
    </div>
  )
}
