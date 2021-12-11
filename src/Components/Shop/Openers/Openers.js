import React from 'react'

import opener from '../img/openers/opener.JPG'
import opener_bags from '../img/openers/opener_bags.JPG'
import opener_light from '../img/openers/opener_light.JPG'
import opener_tie from '../img/openers/opener_tie.JPG'
import opener_set from '../img/openers/opener_set.JPG'

// copied over from old site
const openers = () => (
  <React.Fragment>
    <div className='openers'>
      <div className='imageBox'>
        <img src={opener} alt='Door openers' />
        <img src={opener_bags} alt='Carry bags' />
        <img src={opener_light} alt='Flip switches' />
        <img src={opener_tie} alt='Hang from ties' />
        <img src={opener_set} alt='Gift set' />
      </div>
      <p>
        Even in the best of times there are plenty of door handles I don’t want
        to touch, and I’m even less eager in a pandemic to touch all the things,
        so I designed this no-touch door opener and I love it SO MUCH. It gives
        me so much peace of mind right now.
      </p>
      <p>
        It{' '}
        <strong>
          opens doors, carries grocery bags, flips light switches, pushes
          grocery carts, has a nub on the front
        </strong>{' '}
        for pressing keypads and a hole to tie it to a lanyard. I keep one tied
        to my wrist so I can easily reach it when needed. It’s{' '}
        <strong>strong</strong> (I was carrying a gallon of milk on each side
        with no issues) and even makes carrying heavy bags more comfortable
        since there are no bag handles digging into your fingers. It’s{' '}
        <strong>ergonomic</strong> and fits around your fingers. It’s{' '}
        <strong>washable</strong>! Wash with soap and water when you wash your
        hands.
      </p>
      <p>
        <strong>
          <span className='price'>Price:</span>
        </strong>{' '}
        They are <span className='price'>$7/each or $5/each</span> if you buy
        more than one, to cover my cost of materials.
      </p>
      <div className='clear' />
    </div>
  </React.Fragment>
)

export default openers
