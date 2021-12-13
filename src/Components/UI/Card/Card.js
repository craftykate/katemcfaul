import classes from './Card.module.css'

const Card = ({
  title,
  titleType = 'underline',
  className,
  style = {},
  id,
  children,
  onClick,
}) => {
  const cardClass = [classes.card, className]

  const h3Class = titleType === 'bold' ? 'bold' : 'underline'
  const sectionTitle = title ? (
    <h3 className={classes[h3Class]}>{title}</h3>
  ) : null

  return (
    <section
      id={id}
      className={cardClass.join(' ')}
      style={style}
      onClick={onClick}
    >
      <div>
        {sectionTitle}
        {children}
      </div>
      <div className='clear' />
    </section>
  )
}

export default Card
