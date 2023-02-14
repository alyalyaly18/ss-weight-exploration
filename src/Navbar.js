export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        <img
          className="title-img"
          src="images/spaceheader.png"
          alt="force of gravity"
        />
      </a>
      <ul>
        <CustomLink href="/weight">EXPLORE WEIGHT</CustomLink>
        <CustomLink href="/age">EXPLORE AGE</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
