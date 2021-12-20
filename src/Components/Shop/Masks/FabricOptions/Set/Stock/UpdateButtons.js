// Packages
import React from 'react'
// CSS
import classes from './UpdateButtons.module.css'
// Context
import AuthContext from 'Context/auth-context'
// UI
import Button from 'Components/UI/Button/Button'

const UpdateButtons = ({
  fullSizeName,
  fabric_title,
  stockAmount,
  images,
  numberInCart,
  adjustItemInCart,
}) => {
  const auth = React.useContext(AuthContext)
  if (auth.isLoggedIn) return null

  const data = {
    'data-size': fullSizeName,
    'data-fabric_title': fabric_title,
    'data-in_stock': stockAmount,
    'data-image': images[0],
  }

  const addButton = (
    <Button
      className='add'
      data={data}
      name='increase'
      onClick={adjustItemInCart}
    >
      Add to Cart
    </Button>
  )

  const plusMinus = (
    <>
      <Button
        data={data}
        name='decrease'
        onClick={adjustItemInCart}
        className={classes.minus}
      >
        &#8722;
      </Button>
      In cart: <span className={classes.amount}>{numberInCart}</span>
      <Button
        data={data}
        name='increase'
        onClick={adjustItemInCart}
        className={classes.plus}
      >
        &#43;
      </Button>
    </>
  )

  return (
    <span className={classes.buttons}>
      {numberInCart ? plusMinus : addButton}
    </span>
  )
}

export default UpdateButtons
