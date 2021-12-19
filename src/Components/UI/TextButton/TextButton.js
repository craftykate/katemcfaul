// CSS
import classes from './TextButton.module.css'

const TextButton = ({ onClick, children }) => {
  return (
    <span onClick={onClick} className={classes.textButton}>
      {children}
    </span>
  )
}

export default TextButton
