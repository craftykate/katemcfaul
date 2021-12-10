import Card from 'Components/UI/Card/Card'

const Background = () => {
  let started = new Date('08/01/2004')
  let now = new Date()
  let years = now.getFullYear() - started.getFullYear()

  return (
    <Card title='Background'>
      <h4>{years} years and counting</h4>
      <p>
        I have been programming for {years} years and I love it. My favorite
        class in junior high was programming and I have the same awe for it now
        that I had all those years ago.{' '}
      </p>

      <h4>What is HTML?</h4>
      <p>
        My web design journey in particular started out of curiosity. I wanted
        to know how my browser knew how to display all the images and text the
        right way so I scanned through a kid's book on HTML at the library and
        was immediately hooked. I bought an HTML textbook the next day and read
        through the whole thing over a long weekend up the coast. After that I
        went through programming textbooks like other people go through trashy
        novels. As a child I thought it was weird that my step-dad would relax
        on the couch with a giant C++ book but now I totally get it!{' '}
      </p>

      <h4>People Skills</h4>
      <p>
        I've added a lot of languages to my arsenal since junior high (HTML/JSX,
        CSS/SCSS, JavaScript, ReactJS, C++, jQuery, PHP, MySQL, SQL, Ruby and
        Ruby on Rails to name a handful) but I can also communicate well with
        people, not just computers. In college I was a preschool teacher and
        after college I was a bartender. Remarkably, the skills for both jobs
        are quite similar and both taught me a lot about patience and
        communicating clearly. I can talk to a client about the design of her
        website, go over options and features and not intimidate her with
        needless talk of coding. I'll admit, sometimes I bore my friends with my
        latest coding adventures, but hey, they're my friends and have to put up
        with me!
      </p>
    </Card>
  )
}

export default Background
