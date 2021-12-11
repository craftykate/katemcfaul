// CSS
import cardClasses from 'Components/UI/Card/Card.module.css'
// Components
import Card from 'Components/UI/Card/Card'
import Set from './Set'
// Media
import scrubbies_set from '../img/scrubbies/scrubbies_set.jpg'
import scrubbies_all_2 from '../img/scrubbies/scrubbies_all_2.jpg'
import scrubbies_scouring from '../img/scrubbies/scrubbies_scouring.jpg'
import scrubbies_acrylic from '../img/scrubbies/scrubbies_acrylic.jpg'
import scrubbies_cotton from '../img/scrubbies/scrubbies_cotton.jpg'

const Scrubbies = () => {
  return (
    <>
      <Card title='Placing an Order'>
        <div className={cardClasses.img}>
          <img src={scrubbies_set} alt='Scrubby set' />
        </div>
        <p>
          <strong>Price:</strong>
          <br />
          <span className='main'>$20 for each set</span>. Sets come in{' '}
          <span style={{ color: 'rgb(241, 0, 0)' }}>red</span>,{' '}
          <span style={{ color: 'rgb(245, 215, 32)' }}>yellow</span>,{' '}
          <span style={{ color: 'rgb(0, 181, 38)' }}>green</span>,{' '}
          <span style={{ color: 'rgb(0, 212, 236)' }}>teal</span> and{' '}
          <span style={{ color: 'rgb(0, 29, 236)' }}>blue</span>, tied together
          with a little bow and a cute tag with the scrubby descriptions on the
          back. These make cute gifts!
        </p>
        <p>
          <strong>How to Buy:</strong>
          <br /> I don't have a lot of time to make extra inventory, so sales
          are usually limited to people I know. So, if you know how to contact
          me and you're interested in ordering scrubbies, send me a message! Let
          me know <span className='main'>which color set</span> you want (by
          name of set or screenshot).
        </p>
      </Card>
      <Card title='Scrubby Details'>
        <div className={cardClasses.img}>
          <img src={scrubbies_all_2} alt='All scrubbies' />
        </div>
        <p>
          My scrubbies are back, and this time they come in a set of three! Each
          set includes:
        </p>
        <ul className='icon'>
          <li>
            A <span className='subAccent'>super scouring</span> scrubby,
          </li>
          <li>
            An <span className='subAccent'>all-purpose</span> scrubby, and
          </li>
          <li>
            A <span className='subAccent'>cotton</span> scrubby
          </li>
        </ul>
        <p>
          They are <strong>machine washable</strong> so you can use them for a
          long time. They each have a built-in loop to hang them from a hook and
          all are <strong>hand-knit</strong> by me, using two strands of yarn
          for durability. They work amazingly well, they're eco-friendly, and
          they're cute, too!
        </p>
      </Card>
      <Card title='Each set includes one of each:'>
        <Set title='Super Scouring Scrubby' image={scrubbies_scouring}>
          <p>
            Made from one strand fabulous cotton scrubby yarn and one strand
            quick-drying acrylic yarn for extra strength, this scrubby is great
            for those really tough spots. Use on dishes, carpet stains, soap
            scum in the shower, etc.
          </p>
        </Set>
        <Set title='All-Purpose Dish Scrubby' image={scrubbies_acrylic}>
          <p>
            I've been making a version of this scrubby for over 10 years.
            Acrylic closely mimics the properties of microfiber, and these
            scrubbies are made with two strands of it, making them incredibly
            effective and durable. And they are safe for non-stick pans. I have
            one in my bathroom and use it to clean my make-up brushes, and use
            another one for dusting.
          </p>
          <p>
            I first use new sponges for dishes, then as they get a little less
            clean over time I use them on counters and tables and then when they
            are ready to be retired I'll use them to scrub out the cat litter
            box or a garbage can and throw them out. Each sponge has a lot of
            life in it!
          </p>
        </Set>
        <Set title='100% Cotton Counter Scrubby' image={scrubbies_cotton}>
          <p>
            The cotton scrubby rounds out the set nicely. Cotton is a more
            absorbent fiber so these are great for counters and tables, but they
            are so durable they also do a great job scrubbing away tough spots.
            And because they are all cotton I even use one to wash my face!
          </p>
        </Set>
      </Card>
    </>
  )
}

export default Scrubbies
