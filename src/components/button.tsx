import type { ButtonHTMLAttributes, JSX } from "react"

export const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: JSX.Element | string
}): JSX.Element => {
  return <button {...props}>{children}</button>
}
