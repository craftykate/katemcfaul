// CSS
import classes from './Set.module.css'
// Components
import Stock from './Stock/Stock'

const Set = ({
  fabric_title,
  images,
  sizesInStock,
  fabricSetsInCart,
  adjustItemInCart,
  isLoadingInventory,
  inventoryError,
  inventory,
  adjustInventoryHandler,
  fabricSetsInInventory,
}) => {
  return (
    <section className={classes.fabricSet}>
      <p className={[classes.title, classes.topTitle].join(' ')}>
        {fabric_title}
      </p>
      <div className={classes.setImages}>
        {images.map((image) => (
          <img src={image} alt={fabric_title} key={image} />
        ))}
      </div>
      <p className={[classes.title, classes.midTitle].join(' ')}>
        {fabric_title}
      </p>
      <Stock
        sizesInStock={sizesInStock}
        inventory={inventory}
        fabric_title={fabric_title}
        images={images}
        adjustItemInCart={adjustItemInCart}
        fabricSetsInCart={fabricSetsInCart}
        isLoadingInventory={isLoadingInventory}
        inventoryError={inventoryError}
        adjustInventoryHandler={adjustInventoryHandler}
        fabricSetsInInventory={fabricSetsInInventory}
      />
      <div className='clear' />
    </section>
  )
}

export default Set
