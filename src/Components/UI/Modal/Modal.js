// CSS
import classes from './Modal.module.css'
// Packages
import ReactDOM from 'react-dom'
// UI
import Card from '../Card/Card'

const ModalOverlay = ({ backgroundClose, doNotClose, children }) => {
  return (
    <div className={classes.background} onClick={backgroundClose}>
      <Card title='Cart' className={classes.display} onClick={doNotClose}>
        {children}
      </Card>
    </div>
  )
}
const Modal = ({ backgroundClose, doNotClose, children }) => {
  return ReactDOM.createPortal(
    <ModalOverlay backgroundClose={backgroundClose} doNotClose={doNotClose}>
      {children}
    </ModalOverlay>,
    document.getElementById('modal-root')
  )
}

export default Modal
