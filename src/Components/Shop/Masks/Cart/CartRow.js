// CSS
import classes from './CartRow.module.css'
// UI
import Button from 'Components/UI/Button/Button'

const CartRow = ({ item, adjustItemInCart }) => {
  const data = {
    'data-size': item.size,
    'data-fabric_title': item.fabric_title,
    'data-in_stock': item.in_stock,
    'data-image': item.image,
  }
  return (
    <div className={classes.row}>
      <img src={item.image} alt={item.fabric_title} />
      <div className={classes.buttons}>
        <Button
          data={data}
          name='decrease'
          onClick={adjustItemInCart}
          className={classes.minus}
        >
          &#8722;
        </Button>
        <span className={classes.amount}>
          {item.orderAmount} set{item.orderAmount > 1 && 's'}
        </span>
        <Button
          data={data}
          name='increase'
          onClick={adjustItemInCart}
          className={classes.plus}
        >
          &#43;
        </Button>
      </div>
      <span className={classes.title}>{item.fabric_title}</span> Size:{' '}
      <span className={classes.size}>{item.size}</span>
    </div>
  )
}

export default CartRow
