// CSS
import classes from './Button.module.css'

const Button = ({ name, className, data, onClick, children, disabled }) => {
  return (
    <button
      name={name}
      className={`${classes.button} ${className}`}
      {...data}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
