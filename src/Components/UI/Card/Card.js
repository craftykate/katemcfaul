import classes from './Card.module.css'

const Card = ({ title, titleType = 'underline', className, id, children }) => {
  const cardClass = [classes.card, classes[className]]

  const h3Class = titleType === 'bold' ? 'bold' : 'underline'
  const sectionTitle = title ? (
    <h3 className={classes[h3Class]}>{title}</h3>
  ) : null

  return (
    <section id={id} className={cardClass.join(' ')}>
      <div>
        {sectionTitle}
        {children}
      </div>
      <div className='clear' />
    </section>
  )
}

export default Card
