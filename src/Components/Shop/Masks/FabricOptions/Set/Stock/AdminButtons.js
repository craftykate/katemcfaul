// Packages
import React from 'react'
// CSS
import classes from './UpdateButtons.module.css'
// Context
import AuthContext from 'Context/auth-context'
// UI
import Button from 'Components/UI/Button/Button'

const AdminButtons = ({
  adjustInventoryHandler,
  stockAmount,
  fabric_title,
  fullSizeName,
}) => {
  const auth = React.useContext(AuthContext)
  const lower = Number(stockAmount) !== 0 ? stockAmount - 1 : 0
  const higher = stockAmount + 1
  // Disable the lower button if stock is already at zero to prevent uneccessary
  // db hits
  const disabled = Number(stockAmount) === 0 ? 'disabled' : null
  if (!auth.isLoggedIn) return null

  return (
    <span className={classes.buttons}>
      <Button
        name='decrease'
        onClick={() =>
          adjustInventoryHandler(fabric_title, fullSizeName, lower)
        }
        className={classes.minus}
        disabled={disabled}
      >
        &#8722;
      </Button>
      <Button
        name='increase'
        onClick={() =>
          adjustInventoryHandler(fabric_title, fullSizeName, higher)
        }
        className={classes.plus}
      >
        &#43;
      </Button>
    </span>
  )
}

export default AdminButtons
