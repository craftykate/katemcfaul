// CSS
import classes from './Project.module.css'
import cardClasses from 'Components/UI/Card/Card.module.css'
// Components
import Card from 'Components/UI/Card/Card'
import TextLink from 'Components/UI/TextLink/TextLink'

const Project = (project) => {
  let image = project.image ? (
    <div className={cardClasses.img}>
      <img src={project.image} alt={project.name} />
    </div>
  ) : null

  const codeLink = (
    <TextLink
      href={project.codeLink}
      name='(Link to code)'
      className={classes.codeLink}
      target='_blank'
    />
  )

  const liveLink = (
    <TextLink
      href={project.liveLink}
      name='(See it live)'
      className={classes.liveLink}
      target='_blank'
    />
  )

  return (
    <Card title={project.name} titleType='bold'>
      <div className={classes.project}>
        <div className={classes.info}>
          <p className={classes.projectSkills}>
            Featured Skills: <span>{project.languages}</span>
          </p>
          <p>
            {codeLink} {liveLink}
          </p>
        </div>
        {image}
        <div>{project.description}</div>
      </div>
    </Card>
  )
}

export default Project
