//CSS
import classes from './About.module.css'
import cardClasses from 'Components/UI/Card/Card.module.css'
// Components
import Card from 'Components/UI/Card/Card'
// Media
import kate from './img/kate.jpg'

const Background = () => {
  let started = new Date('08/01/2004')
  let now = new Date()
  let years = now.getFullYear() - started.getFullYear()

  return (
    <Card title='Background'>
      <div className={cardClasses.img}>
        <img src={kate} alt='Kate' />
      </div>
      <section>
        <p className={classes.subheader}>{years} years and counting</p>
        <p>
          I have been programming for {years} years and I love it. My favorite
          class in junior high was programming and I have the same awe for it
          now that I had all those years ago.
        </p>
      </section>
      <section>
        <p className={classes.subheader}>What is HTML?</p>
        <p>
          My web design journey started out of curiosity. I wanted to know how
          my browser knew how to display all the images and text so I scanned
          through a kid's book on HTML at the library and was immediately
          hooked. I bought an HTML textbook the next day and read through the
          whole thing over a long weekend.
        </p>
      </section>
      <section>
        <p className={classes.subheader}>JavaScript, Rails, React and more!</p>
        <p>
          From there I learned everything I could. I wanted my sites to be more
          interactive so I learned JavaScript and jQuery. I wanted data to
          persist in a database so I learned PHP and SQL. For fun I picked up
          Ruby and loved it, so I did a bootcamp to learn Rails. In 2017 I found
          React and fell instantly in love. Almost all my personal projects
          since then have been in React - except for when I dabble in robotics.
          For those projects I picked up C++.
        </p>
      </section>
    </Card>
  )
}

export default Background
