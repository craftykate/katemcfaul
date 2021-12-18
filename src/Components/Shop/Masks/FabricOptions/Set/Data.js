// Media
import bold_stripes_adult from '../../../img/masks/bold_stripes_adult.jpg'
import bold_stripes_adult_1 from '../../../img/masks/bold_stripes_adult_1.jpg'
import camo_adult from '../../../img/masks/camo_adult.jpg'
import camo_adult_1 from '../../../img/masks/camo_adult_1.jpg'
import leaves_adult from '../../../img/masks/leaves_adult.jpg'
import leaves_adult_1 from '../../../img/masks/leaves_adult_1.jpg'
import gray_swirls_adult from '../../../img/masks/gray_swirls_adult.jpg'
import gray_swirls_adult_1 from '../../../img/masks/gray_swirls_adult_1.jpg'
import veggie_adult from '../../../img/masks/veggie_adult.jpg'
import veggie_adult_1 from '../../../img/masks/veggie_adult_1.jpg'
import black_cream_adult from '../../../img/masks/black_cream_adult.jpg'
import black_cream_adult_1 from '../../../img/masks/black_cream_adult_1.jpg'
import cats_adult from '../../../img/masks/cats_adult.jpg'
import cats_adult_1 from '../../../img/masks/cats_adult_1.jpg'
import giraffe_bk from '../../../img/masks/giraffe_bk.jpg'
import giraffe_bk_1 from '../../../img/masks/giraffe_bk_1.jpg'
import pinkstripe_bk from '../../../img/masks/pinkstripe_bk.jpg'
import pinkstripe_bk_1 from '../../../img/masks/pinkstripe_bk_1.jpg'
import bluegreen_bk from '../../../img/masks/bluegreen_bk.jpg'
import bluegreen_bk_1 from '../../../img/masks/bluegreen_bk_1.jpg'
import animals_lk from '../../../img/masks/animals_lk.jpg'
import animals_lk_1 from '../../../img/masks/animals_lk_1.jpg'
import bugs_lk from '../../../img/masks/bugs_lk.jpg'
import bugs_lk_1 from '../../../img/masks/bugs_lk_1.jpg'

export const sizeOptions = {
  adult: 'Adult',
  bk: 'Big Kid',
  lk: 'Little Kid',
  ib: 'Itty Bitty',
}

export const allMasks = [
  {
    fabric_title: 'Green and orange stripes',
    images: [bold_stripes_adult, bold_stripes_adult_1],
  },
  {
    fabric_title: 'Green "camo" dots',
    images: [camo_adult, camo_adult_1],
  },
  {
    fabric_title: 'Leaves on green',
    images: [leaves_adult, leaves_adult_1],
  },
  {
    fabric_title: 'Gray swirls',
    images: [gray_swirls_adult, gray_swirls_adult_1],
  },
  {
    fabric_title: 'Black and white veggies',
    images: [veggie_adult, veggie_adult_1],
  },
  {
    fabric_title: 'Black and cream',
    images: [black_cream_adult, black_cream_adult_1],
  },
  {
    fabric_title: 'Cats',
    images: [cats_adult, cats_adult_1],
  },
  {
    fabric_title: 'Giraffe and blue geometric',
    images: [giraffe_bk, giraffe_bk_1],
    sizesInStock: { [sizeOptions.ib]: 2 },
  },
  {
    fabric_title: 'Pink and black flowers and stripes',
    images: [pinkstripe_bk, pinkstripe_bk_1],
  },
  {
    fabric_title: 'Blue and green',
    images: [bluegreen_bk, bluegreen_bk_1],
    sizesInStock: { [sizeOptions.ib]: 2 },
  },
  {
    fabric_title: 'Animals',
    images: [animals_lk, animals_lk_1],
  },
  {
    fabric_title: 'Bugs',
    images: [bugs_lk, bugs_lk_1],
  },
]
