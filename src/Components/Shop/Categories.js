// Packages
import { Link } from 'react-router-dom'
// Components
import Card from 'Components/UI/Card/Card'

const Categories = () => {
  return (
    <>
      <Card title='Disclaimer'>
        <p>
          I'm a busy mom and full-time software developer, but I'm always
          creating things. Sometimes, when I make something I really love and I
          think other people would love, too, I make a few extras to sell.
        </p>{' '}
        <p>
          How to buy: I don't have a lot of time to make extra inventory, so
          sales are usually limited to people I know. So, if you know how to
          contact me and you're interested in one of the items below, send me a
          message!
        </p>
      </Card>
      <Card title='Fabric Masks' titleType='bold'>
        <p>
          Features: a removable N95 filter that fits in an inner pocket;
          removable, flexible wire across the nose; adjustable, stretchy ties
          that tie behind the head and go through side channels so you can sub
          out your own ties or cut them down to make ear loops; the masks come
          in under the chin to reduce gaps at the bottom; made from
          high-quality, tight-weave, 100% cotton quilter's fabric.
        </p>
        <p>
          I worked hard to come up with a mask that I felt comfortable sending
          my own family out with, made from the best materials I could find.
        </p>
        <Link to='/shop/masks'>See available fabrics</Link>
      </Card>
      <Card title='Super Scrubby Sponge Set' titleType='bold'>
        <p>
          These are the BEST scrubbies! Each set includes a super scouring
          scrubby for stubborn, caked-on food, an all-purpose dish sponge that
          dries quickly and works amazingly well, and an all-cotton counter
          sponge that's more absorbent while still being scrubby enough to
          really clean. They are machine washable, too!
        </p>
        <p>
          I've been making my own sponges for years and years and love these.
        </p>
        <Link to='/shop/scrubbies'>See more info</Link>
      </Card>
    </>
  )
}

export default Categories
