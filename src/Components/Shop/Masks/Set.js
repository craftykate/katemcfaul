// CSS
import classes from './Set.module.css'

const Set = ({ title, images, stock, sizeOptions }) => {
  return (
    <section className={classes.fabricSet}>
      <p className={[classes.title, classes.topTitle].join(' ')}>{title}</p>
      <div className={classes.setImages}>
        {images.map((image) => (
          <img src={image} alt={title} key={image} />
        ))}
      </div>
      <p className={[classes.title, classes.midTitle].join(' ')}>{title}</p>
      {Object.keys(sizeOptions).map((key) => {
        const fullName = sizeOptions[key]
        const amount =
          stock && stock[fullName] ? (
            `${stock[fullName]} sets`
          ) : (
            <span className={classes.out}>Out of stock</span>
          )
        return (
          <p className={classes.stock} key={key}>
            <span>{fullName}:</span> {amount}
          </p>
        )
      })}
      <div className='clear' />
    </section>
  )
}

export default Set
