// CSS
import classes from './Cart.module.css'
import buttonClasses from 'Components/UI/Button/Button.module.css'
// Components
import CartRow from './CartRow'
// UI
import Card from 'Components/UI/Card/Card'
import Button from 'Components/UI/Button/Button'

const Cart = ({
  setShowCart,
  emptyCart,
  cartItems,
  adjustItemInCart,
  addStoppers,
  setAddStoppers,
}) => {
  const doNotClose = (e) => {
    e.stopPropagation()
  }
  const emptyAndClose = () => {
    setShowCart(false)
    emptyCart()
  }

  const numItems = cartItems.reduce((a, b) => a + (b.orderAmount || 0), 0)
  const sortedItems = cartItems.sort((a, b) => a.title - b.title)
  const stopperButtonText = addStoppers ? 'Remove' : 'Add'
  const stopperAmount = addStoppers ? `$${numItems}` : '$0'
  let total = numItems * 20
  total = addStoppers ? (total += numItems) : total
  return (
    <div className={classes.background} onClick={() => setShowCart(false)}>
      <Card title='Cart' className={classes.display} onClick={doNotClose}>
        <p>Screenshot cart and send to me so I know exactly what you want!</p>
        {sortedItems.map((item, index) => {
          return (
            <CartRow
              item={item}
              adjustItemInCart={adjustItemInCart}
              key={index}
            />
          )
        })}
        <div className={classes.totals}>
          <p>Mask total: ${numItems * 20}</p>
          <p>
            <Button onClick={() => setAddStoppers(!addStoppers)}>
              {stopperButtonText}
            </Button>
            Stoppers: {stopperAmount}
          </p>
          <p>Total: ${total}</p>
        </div>
        <div className={classes.actionButtons}>
          <Button className={buttonClasses.big} onClick={emptyAndClose}>
            Empty Cart
          </Button>
          <Button
            className={buttonClasses.big}
            onClick={() => setShowCart(false)}
          >
            Close
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Cart
