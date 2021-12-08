const Links = () => {
  const links = [
    {
      title: 'Github',
      link: 'https://github.com/craftykate',
      linkName: 'github.com/craftykate',
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/katemcfaul/',
      linkName: 'linkedin.com/in/katemcfaul',
    },
  ]
  return (
    <ul>
      {links.map((link) => (
        <li key={link.title}>
          {link.title}:{' '}
          <a href={link.link} target='_blank' rel='noopener noreferrer'>
            {link.linkName}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Links
