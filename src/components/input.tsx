import type { InputHTMLAttributes, JSX } from "react"
type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={className} {...props} />
}
