// CSS
import classes from 'Components/Shop/Masks/FabricOptions/Set/Set.module.css'
// Components
import UpdateButtons from './UpdateButtons'
import AdminButtons from './AdminButtons'
// Data
import { sizeOptions } from 'Components/Shop/Masks/FabricOptions/Set/Data'

const Stock = ({
  sizesInStock,
  fabric_title,
  images,
  adjustItemInCart,
  fabricSetsInCart,
  isLoadingInventory,
  inventoryError,
  adjustInventoryHandler,
  fabricSetsInInventory,
}) => {
  return Object.keys(sizeOptions).map((key) => {
    const fullSizeName = sizeOptions[key]
    const stockAmount =
      fabricSetsInInventory && fabricSetsInInventory[fullSizeName]
        ? fabricSetsInInventory[fullSizeName]
        : null
    const setText = stockAmount && stockAmount > 1 ? 'sets' : 'set'
    let sets =
      fabricSetsInInventory && fabricSetsInInventory[fullSizeName] ? (
        `${stockAmount} ${setText}`
      ) : (
        <span className={classes.out}>Out of stock</span>
      )
    if (inventoryError) sets = 'Refresh to see stock....'
    if (isLoadingInventory) sets = 'Loading stock...'

    const itemInCart = fabricSetsInCart.find(
      (item) => item.fabric_title === fabric_title && item.size === fullSizeName
    )
    return (
      <p className={classes.stock} key={key}>
        <span className={classes.size}>{fullSizeName}:</span> {sets}
        <AdminButtons
          adjustInventoryHandler={adjustInventoryHandler}
          stockAmount={stockAmount}
          fabric_title={fabric_title}
          fullSizeName={fullSizeName}
        />
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
