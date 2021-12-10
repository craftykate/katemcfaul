// Packages
import { Link } from 'react-router-dom'
// CSS
import classes from './Shop.module.css'
import cardClasses from 'Components/UI/Card/Card.module.css'
// Components
import Card from 'Components/UI/Card/Card'
// Media
import masks from './img/masks/animals_davin.jpg'
import scrubbies from './img/scrubbies/scrubbies_all_2.jpg'

const Categories = () => {
  return (
    <>
      <Card>
        <p>
          I'm a busy mom and full-time software developer, but I'm always
          creating things. Sometimes, when I make something I really love and I
          think other people would love, too, I make a few extras to sell.
        </p>
      </Card>
      <Card title='Fabric Masks' titleType='bold'>
        <div className={cardClasses.img}>
          <img src={masks} alt='Masks' />
        </div>
        <p>
          Features: a <strong>removable N95 filter</strong> that fits in an
          inner pocket; removable, <strong>flexible wire</strong> across the
          nose; adjustable, <strong>stretchy ties</strong> that tie behind the
          head and go through side channels so you can sub out your own ties or
          cut them down to make ear loops; the masks come in under the chin to{' '}
          <strong>reduce gaps</strong> at the bottom; made from high-quality,
          tight-weave, <strong>100% cotton quilter's fabric</strong>.
        </p>
        <p>
          I worked hard to come up with a mask that I felt comfortable sending
          my own family out with, made from the{' '}
          <strong>best materials I could find</strong>.
        </p>
        <Link to='/shop/masks' className={classes.pageLink}>
          See available fabrics
        </Link>
      </Card>
      <Card title='Super Scrubby Sponge Set' titleType='bold'>
        <div className={cardClasses.img}>
          <img src={scrubbies} alt='Scrubbies' />
        </div>{' '}
        <p>
          These are the <strong>BEST scrubbies!</strong> Each set includes a
          super <strong>scouring scrubby</strong> for stubborn, caked-on food,
          an all-purpose <strong>dish sponge</strong> that dries quickly and
          works amazingly well, and an all-cotton{' '}
          <strong>counter sponge</strong> that's more absorbent while still
          being scrubby enough to really clean. They are machine washable, too!
        </p>
        <p>
          I've been making my own sponges for years and years and love these.
        </p>
        <Link to='/shop/scrubbies' className={classes.pageLink}>
          See more info
        </Link>
      </Card>
    </>
  )
}

export default Categories
