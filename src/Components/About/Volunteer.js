// CSS
import classes from 'Components/UI/Card/Card.module.css'
import cardClasses from 'Components/UI/Card/Card.module.css'
// Components
import Card from 'Components/UI/Card/Card'
// Media
import bhs from './img/bhs.jpeg'

const Volunteer = () => {
  return (
    <Card title='Volunteer Work'>
      <section>
        <div className={cardClasses.img}>
          <img src={bhs} alt='BHS Volunteering' />
        </div>
        <p className={classes.subheader}>
          Guest Lecturer at Benicia High School
        </p>
        <p>
          I regularly combine my love for programming with my passion for
          teaching and my desire to give back to my community and help encourage
          the next generation of coders. Every year I do a three day course at
          the local high school and teach the AP Computer Science kids how to
          build a portfolio website from scratch. They love my unit and
          regularly say it's their favorite project of the year!
        </p>
      </section>
      <section>
        <p className={classes.subheader}>Girls Who Code Club Leader</p>
        <p>
          A few years ago no girls signed up for Intro to Programming at the
          high school (zero girls!) so I started a Girls Who Code club at the
          middle school to show girls how fun and awesome programming and
          robotics are and hopefully encourage more girls to take an interest.
          Girls make awesome programmers! My girls were interested in combining
          art with robotics and I really enjoyed coming up with projects for us
          to do.
        </p>
      </section>
    </Card>
  )
}

export default Volunteer
