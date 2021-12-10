const Link = ({ href, name, className = null, target = null }) => {
  return href && name ? (
    <a
      href={href}
      className={className}
      target={target}
      rel='noopener noereferrer'
    >
      {name}
    </a>
  ) : null
}

export default Link
