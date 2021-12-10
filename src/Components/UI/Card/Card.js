import classes from './Card.module.css'

const Card = ({ title, titleType = 'underline', className, children }) => {
  const cardClass = [classes.card, classes[className]]

  const h3Class = titleType === 'bold' ? 'bold' : 'underline'
  const sectionTitle = title ? (
    <h3 className={classes[h3Class]}>{title}</h3>
  ) : null

  return (
    <section className={cardClass.join(' ')}>
      {sectionTitle}
      {children}
    </section>
  )
}

export default Card
