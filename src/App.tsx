import { type JSX } from "react"
import Button from "@/"

function App(): JSX.Element {
  return (
    <>
      <div className="grid bg-blend-darken text-center p-4 ">
        <h1>Hello World</h1>
        <p>This is a simple React application.</p>
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      </div>
    </>
  )
}

export default App
