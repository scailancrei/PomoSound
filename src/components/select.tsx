import type { SelectHTMLAttributes, JSX } from "react"
type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export const Select = ({ className, ...props }: SelectProps): JSX.Element => {
  return <select className={className} {...props} />
}
