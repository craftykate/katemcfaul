// CSS
import classes from './Set.module.css'
import cardClasses from 'Components/UI/Card/Card.module.css'

const Set = ({ title, image, children }) => {
  return (
    <section className={classes.scrubbySet}>
      <p className={[classes.title, classes.topTitle].join(' ')}>{title}</p>
      <div className={cardClasses.img}>
        <img src={image} alt={title} />
      </div>
      <p className={[classes.title, classes.midTitle].join(' ')}>{title}</p>
      <span className={classes.description}>{children}</span>
      <div className='clear' />
    </section>
  )
}

export default Set
