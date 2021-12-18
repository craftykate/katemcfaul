// CSS
import classes from './Form.module.css'

const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      {children}
    </form>
  )
}

export default Form
