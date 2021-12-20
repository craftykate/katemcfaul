// Components
import Set from './Set/Set'
// Data
import { allMasks } from './Set/Data'

const FabricOptions = ({
  cartItems,
  adjustItemInCart,
  isLoadingInventory,
  inventoryError,
  inventory,
  adjustInventoryHandler,
}) => {
  return (
    <>
      {allMasks.map((set) => {
        const fabricSetsInCart = cartItems.filter(
          (item) => item.fabric_title === set.fabric_title
        )

        const fabricSetsInInventory = inventory[set.fabric_title]

        return (
          <Set
            fabric_title={set.fabric_title}
            images={set.images}
            sizesInStock={set.sizesInStock}
            inventory={inventory}
            fabricSetsInCart={fabricSetsInCart}
            key={set.fabric_title}
            adjustItemInCart={adjustItemInCart}
            isLoadingInventory={isLoadingInventory}
            inventoryError={inventoryError}
            adjustInventoryHandler={adjustInventoryHandler}
            fabricSetsInInventory={fabricSetsInInventory}
          />
        )
      })}
    </>
  )
}

export default FabricOptions
