export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="new-site-title">
        Gravity's Pull
      </a>
      <ul>
        <li className="active">
          <a href="/weight">Explore Weight</a>
        </li>
        <li className="active">
          <a href="age">Explore Age</a>
        </li>
      </ul>
    </nav>
  );
}
