// Components
import Set from './Set/Set'
// Data
import { allMasks } from './Set/Data'

const FabricOptions = ({ cartItems, adjustItemInCart }) => {
  return (
    <>
      {allMasks.map((set) => {
        const fabricSetsInCart = cartItems.filter(
          (item) => item.fabric_title === set.fabric_title
        )
        return (
          <Set
            fabric_title={set.fabric_title}
            images={set.images}
            sizesInStock={set.sizesInStock}
            fabricSetsInCart={fabricSetsInCart}
            key={set.fabric_title}
            adjustItemInCart={adjustItemInCart}
          />
        )
      })}
    </>
  )
}

export default FabricOptions
