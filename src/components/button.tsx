import type { JSX } from "react"

export const Button = ({
  children,
  ...props
}: {
  children: JSX.Element | string
}): JSX.Element => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  )
}
