import { Time } from "@/components/time"
import PomodoroButtons from "@/pomodoro/pomodoroButtons"

export default function Pomodoro() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Time />
      <PomodoroButtons />
    </div>
  )
}
