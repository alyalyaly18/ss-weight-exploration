export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Gravity's Pull
      </a>
      <ul>
        <CustomLink href="/weight">Explore Weight</CustomLink>
        <CustomLink href="/age">Explore Age</CustomLink>
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
