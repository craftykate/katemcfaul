// CSS
import classes from './Button.module.css'

const Button = ({
  name,
  className,
  data,
  type,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      name={name}
      className={`${classes.button} ${className}`}
      {...data}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
