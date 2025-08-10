import { Input } from "@/components/input"
import { useStore } from "@/states/store"

export function Time() {
  const { hours, minutes, seconds, setTimer } = useStore()
  return (
    <div className="flex items-center justify-center">
      <Input
        type="text"
        inputMode="numeric"
        value={hours}
        onChange={(e) => {
          const newHours = parseInt(e.target.value, 10)
          if (!isNaN(newHours)) {
            setTimer(newHours * 3600 + minutes * 60 + seconds)
          }
        }}
        min={0}
        max={59}
        aria-label="hours"
        className="w-16 bg-gray-500 text-white text-center rounded-4xl m-4 p-4"
      />
      :
      <Input
        type="text"
        inputMode="numeric"
        className="w-16 bg-gray-500 text-white text-center rounded-4xl m-4 p-4"
        value={minutes}
        aria-label="minutes"
      />
      <Input
        type="text"
        className="w-16 bg-gray-500 text-white text-center rounded-4xl m-4 p-4"
        inputMode="numeric"
        value={seconds}
        aria-label="seconds"
      />
    </div>
  )
}
