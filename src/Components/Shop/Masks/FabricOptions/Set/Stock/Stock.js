// CSS
import classes from 'Components/Shop/Masks/FabricOptions/Set/Set.module.css'
// Components
import UpdateButtons from './UpdateButtons'
// Data
import { sizeOptions } from 'Components/Shop/Masks/FabricOptions/Set/Data'

const Stock = ({
  sizesInStock,
  fabric_title,
  images,
  adjustItemInCart,
  fabricSetsInCart,
}) => {
  return Object.keys(sizeOptions).map((key) => {
    const fullSizeName = sizeOptions[key]
    const stockAmount =
      sizesInStock && sizesInStock[fullSizeName]
        ? sizesInStock[fullSizeName]
        : null
    const setText = stockAmount && stockAmount > 1 ? 'sets' : 'set'
    const sets =
      sizesInStock && sizesInStock[fullSizeName] ? (
        `${stockAmount} ${setText}`
      ) : (
        <span className={classes.out}>Out of stock</span>
      )
    const itemInCart = fabricSetsInCart.find(
      (item) => item.fabric_title === fabric_title && item.size === fullSizeName
    )
    return (
      <p className={classes.stock} key={key}>
        <span className={classes.size}>{fullSizeName}:</span> {sets}
        <UpdateButtons
          fullSizeName={fullSizeName}
          fabric_title={fabric_title}
          stockAmount={stockAmount}
          images={images}
          numberInCart={itemInCart?.orderAmount}
          adjustItemInCart={adjustItemInCart}
        />
      </p>
    )
  })
}

export default Stock
