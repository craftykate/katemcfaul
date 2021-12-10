// CSS
import classes from './Project.module.css'
// Components
import Card from 'Components/UI/Card/Card'
import TextLink from 'Components/UI/Link/TextLink'

const Project = (project) => {
  const contentBoxClass = project.image
    ? [classes.description, classes.hasImage]
    : [classes.description]

  let image = project.image ? (
    <div className={classes.imageBox}>
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
        <div>
          <p className={classes.projectSkills}>
            Featured Skills: <span>{project.languages}</span>
          </p>
          <div className={classes.links}>
            {codeLink} {liveLink}
          </div>
        </div>
        <div className={contentBoxClass.join(' ')}>{project.description}</div>
        {image}
        <div className='clear' />
      </div>
    </Card>
  )
}

export default Project
