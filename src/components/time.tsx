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
        onChange={(e) => setTimer(parseInt(e.target.value) * 3600)}
        min={0}
        max={59}
        aria-label="hours"
        className="w-16 bg-gray-500 text-white text-center rounded-4xl m-4 p-4"
      />
      :
      <Input
        type="text"
        inputMode="numeric"
        value={minutes}
        className="w-16 bg-gray-500 text-white text-center rounded-4xl m-4 p-4"
        aria-label="minutes"
      />
      :
      <Input
        type="text"
        value={seconds}
        className="w-16 bg-gray-500 text-white text-center rounded-4xl m-4 p-4"
        inputMode="numeric"
        aria-label="seconds"
      />
    </div>
  )
}
