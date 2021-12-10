// CSS
import cardClasses from 'Components/UI/Card/Card.module.css'
// Components
import Card from 'Components/UI/Card/Card'

const Work = () => {
  return (
    <Card title='Sr. Full-Stack Software Engineer'>
      <p className={cardClasses.subheader}>Hard Skills</p>
      <p>
        I have worked professionally in React and PHP. I have built powerful
        features in customer facing sites, streamlined employee workflow in
        internal sites, and I built a whole complex React app from front to back
        to solve a unique problem one of our departments was having. I've worked
        extensively on the backend, working with data and making API calls to
        Cybersource, DocuSign and more. I've designed frontends, paying close
        attention to usability and web standards. Working for a security company
        I have had to make sure my code was tightly secure. Working at a company
        with millions of users I've had to make sure my code scales well.
      </p>
      <p className={cardClasses.subheader}>Soft Skills</p>
      <p>
        I am truly a full-stack developer, used to handling multiple languages,
        picking up new ones quickly, working with stakeholders and coming up
        with elegant solutions, rather than being told what to do and how to do
        it. I'm comfortable being uncomfortable and I'm always trying to push
        myself to grow and learn.
      </p>
    </Card>
  )
}

export default Work
