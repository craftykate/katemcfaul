// CSS
import '../Shop.module.css'
import cardClasses from 'Components/UI/Card/Card.module.css'
// Packages
import { Link } from 'react-router-dom'
// Components
import Card from 'Components/UI/Card/Card'
import Set from './Set'
// Media
import veggie_k_and_k from '../img/masks/veggie_k_and_k.jpg'
import assorted_boys from '../img/masks/assorted_boys.jpg'
import bold_stripes_adult from '../img/masks/bold_stripes_adult.jpg'
import bold_stripes_adult_1 from '../img/masks/bold_stripes_adult_1.jpg'
import camo_adult from '../img/masks/camo_adult.jpg'
import camo_adult_1 from '../img/masks/camo_adult_1.jpg'
import leaves_adult from '../img/masks/leaves_adult.jpg'
import leaves_adult_1 from '../img/masks/leaves_adult_1.jpg'
import gray_swirls_adult from '../img/masks/gray_swirls_adult.jpg'
import gray_swirls_adult_1 from '../img/masks/gray_swirls_adult_1.jpg'
import veggie_adult from '../img/masks/veggie_adult.jpg'
import veggie_adult_1 from '../img/masks/veggie_adult_1.jpg'
import black_cream_adult from '../img/masks/black_cream_adult.jpg'
import black_cream_adult_1 from '../img/masks/black_cream_adult_1.jpg'
import cats_adult from '../img/masks/cats_adult.jpg'
import cats_adult_1 from '../img/masks/cats_adult_1.jpg'
import giraffe_bk from '../img/masks/giraffe_bk.jpg'
import giraffe_bk_1 from '../img/masks/giraffe_bk_1.jpg'
import pinkstripe_bk from '../img/masks/pinkstripe_bk.jpg'
import pinkstripe_bk_1 from '../img/masks/pinkstripe_bk_1.jpg'
import bluegreen_bk from '../img/masks/bluegreen_bk.jpg'
import bluegreen_bk_1 from '../img/masks/bluegreen_bk_1.jpg'
import animals_lk from '../img/masks/animals_lk.jpg'
import animals_lk_1 from '../img/masks/animals_lk_1.jpg'
import bugs_lk from '../img/masks/bugs_lk.jpg'
import bugs_lk_1 from '../img/masks/bugs_lk_1.jpg'
import filters from '../img/masks/filters.jpg'
import stoppers from '../img/masks/stoppers.jpg'

const Masks = () => {
  const sizeOptions = {
    adult: 'Adult',
    bk: 'Big Kid',
    lk: 'Little Kid',
    ib: 'Itty Bitty',
  }

  return (
    <>
      <Card title='Placing an Order'>
        <strong>Prices:</strong>
        <ul className='icon'>
          <li>
            <span className='subAccent'>Masks:</span>{' '}
            <span className='main'>$20 each set</span> Masks come in a set of
            two, in coordinating fabrics.{' '}
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
          <br /> I don't have a lot of time to make extra inventory, so sales
          are usually limited to people I know. So, if you know how to contact
          me and you're interested in ordering masks, send me a message! Let me
          know <span className='main'>which fabric set</span> you want (by name
          of set or screenshot), <span className='main'>which size</span> you
          want it in (sizing guide below), and if you want the{' '}
          <span className='main'>elastic stoppers</span>.
        </p>
      </Card>
      <Card title='Mask Details'>
        <div className={cardClasses.img}>
          <img src={veggie_k_and_k} alt='Adult masks' />
        </div>
        <strong>Features:</strong>
        <ul className='icon'>
          <li>
            <span className='subAccent'>A removable N95 filter</span> that fits
            in an inner pocket so you can sub out your own filter if you want or
            remove it altogether
          </li>
          <li>
            <span className='subAccent'>Removable flexible wire</span> across
            the nose for a snug fit
          </li>
          <li>
            <span className='subAccent'>Adjustable stretchy ties</span> that tie
            behind the head (and don't pinch your hair like regular elastic) and
            go through side channels so you can sub out your own ties or cut
            them down to make ear loops
          </li>
          <li>
            <span className='subAccent'>Full-coverage fit</span> wide enough
            across the face and come in under the chin to reduce gaps
          </li>
          <li>
            <span className='subAccent'>Made from high-quality</span>,
            tight-weave, 100% cotton quilter's fabric
          </li>
        </ul>
        <p>
          I worked hard to come up with a mask that I felt comfortable sending
          my own family out with, made from the{' '}
          <strong>best materials I can find</strong>.
        </p>
      </Card>
      <Card title='Sizes'>
        <div className={cardClasses.img}>
          <img src={assorted_boys} alt='Kid masks' />
        </div>
        <ul className='icon'>
          <li>
            <span className='subAccent'>Adult</span>
          </li>
          <li>
            <span className='subAccent'>Big Kid</span> (~7yrs to mid-teen)
          </li>
          <li>
            <span className='subAccent'>Little Kid</span> (~4yrs to ~8yrs)
          </li>
          <li>
            <span className='subAccent'>Itty Bitty</span> (~2yrs to ~4yrs)
          </li>
        </ul>
        <p>
          The boys pictured are wearing Big Kid, Little Kid and Adult. Sizing is
          approximate and there's plenty of overlap in ages each mask can fit.
        </p>
      </Card>
      <Card title='Mask Fabric Options' id='fabrics'>
        <Set
          title='Green and orange stripes'
          images={[bold_stripes_adult, bold_stripes_adult_1]}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Green "camo" dots'
          images={[camo_adult, camo_adult_1]}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Leaves on green'
          images={[leaves_adult, leaves_adult_1]}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Gray swirls'
          images={[gray_swirls_adult, gray_swirls_adult_1]}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Black and white veggies'
          images={[veggie_adult, veggie_adult_1]}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Black and cream'
          images={[black_cream_adult, black_cream_adult_1]}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Cats'
          images={[cats_adult, cats_adult_1]}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Giraffe and blue geometric'
          images={[giraffe_bk, giraffe_bk_1]}
          stock={{ [sizeOptions.ib]: 2 }}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Pink and black flowers and stripes'
          images={[pinkstripe_bk, pinkstripe_bk_1]}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Blue and green'
          images={[bluegreen_bk, bluegreen_bk_1]}
          stock={{ [sizeOptions.ib]: 2 }}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Animals'
          images={[animals_lk, animals_lk_1]}
          sizeOptions={sizeOptions}
        />
        <Set
          title='Bugs'
          images={[bugs_lk, bugs_lk_1]}
          sizeOptions={sizeOptions}
        />
      </Card>
      <Card title='Elastic Stoppers' id='stoppers'>
        <div className={cardClasses.img}>
          <img src={stoppers} alt='Stoppers' />
        </div>
        <p>
          I 3D print these fabulous elastic stoppers using flexible filament
          that make it very easy to adjust your masks. I love them the most when
          I'm putting on my toddler's mask - even when he's on the move I can
          easily put his mask on and adjust it. If I'm wearing a hat or have my
          hair in a ponytail it's nice to slide the stopper up and down instead
          of having to untie and retie the elastic.
        </p>
        <p>
          <strong>Price: $1 per mask set.</strong>
        </p>
        <p>
          <i>
            (These can be washed, I wash mine all the time, but they don't like
            high heat. They can probably stand up to 150°F, so they can probably
            go in a dryer on low, but I haven't tested that. I air dry all our
            masks to extend the life of the masks, wires, elastic and stoppers.)
          </i>
        </p>
      </Card>
      <Card title='Extra Filters' id='filters'>
        <div className={cardClasses.img}>
          <img src={filters} alt='Filters' />
        </div>
        <p>
          I am now offering packs of <strong>extra N95 filters</strong>{' '}
          exclusively for customers who have bought my masks! Filters go in the
          masks with the fuzzier side facing away from your face.
        </p>
        <p>
          <strong>Price: Each pack is $5 for 4 filters</strong>, and are limited
          to three packs for each mask set previously purchased. You do not have
          to order the extra filters at the same time as the masks.
        </p>
        <p>
          <i>
            (I recommend checking with the CDC on the latest guidance for
            cleaning and sanitizing your PPE. In our house, we remove the
            filters and quarantine them for five days, and wash the masks with
            the regular laundry. You can iron the masks after washing if you
            like - but I usually don't, who has time for that - then I put a
            post-quarantine filter back in. I also write our initials with
            permanent marker on a corner of each filter so I can easily match
            filters to masks.)
          </i>
        </p>
      </Card>
    </>
  )
}

export default Masks
