// Packages
import { Link } from 'react-router-dom'
// CSS
import buttonClasses from 'Components/UI/Button/Button.module.css'
// Components
import Card from 'Components/UI/Card/Card'
// UI
import Button from 'Components/UI/Button/Button'

const OrderInfo = ({ cartItems, toggleCartView }) => {
  const numItems = cartItems.reduce((a, b) => a + (b.orderAmount || 0), 0)
  const buttonText =
    numItems > 0 ? `View Cart (${numItems} sets)` : '(Add items to view cart)'
  return (
    <Card title='Placing an Order'>
      <strong>Prices:</strong>
      <ul className='icon'>
        <li>
          <span className='subAccent'>Masks:</span>{' '}
          <span className='main'>$20 each set</span> Masks come in a set of two,
          in coordinating fabrics.{' '}
          <Link to='#fabrics'>(Jump to sets in stock)</Link>
        </li>
        <li>
          <span className='subAccent'>Stoppers:</span>{' '}
          <span className='main'>$1 per set</span> Optional elastic stoppers
          help tighten your mask in a jiffy.{' '}
          <Link to='#stoppers'>(See more info)</Link>
        </li>
        <li>
          <span className='subAccent'>Extra filters:</span>{' '}
          <span className='main'>$5 for 4</span> Optional extra filter packs
          come in a four pack cut to the size you need.{' '}
          <Link to='#filters'>(See more info)</Link>
        </li>
      </ul>
      <p>
        <strong>How to Buy:</strong>
        <br /> I don't have a lot of time to make extra inventory, so sales are
        usually limited to people I know. So, if you know how to contact me and
        you're interested in ordering masks, send me a message! I've made it
        really easy! Add all mask sets you want to your cart, then open your
        cart, take a screenshot of it, and send it to me!
        <br />
        <i>
          (Feel free to add masks I don't have in stock - I'll add them to my
          next batch)
        </i>
      </p>
      <Button
        onClick={toggleCartView}
        className={buttonClasses.big}
        disabled={numItems === 0}
      >
        {buttonText}
      </Button>
    </Card>
  )
}

export default OrderInfo
