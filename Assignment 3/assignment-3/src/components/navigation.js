import './components.css';

function Navigation() {
  return (
    <nav className="nav">
        <a className="nav-link active light-css p-3" aria-current="page" href="#">Home</a>
        <a className="nav-link p-3 dark-css" href="#">Contact</a>
        <a className="nav-link p-3 dark-css" href="#">About</a>
        <a className="nav-link p-3 dark-css" href="#">Login</a>
    </nav>
  );
}

export default Navigation;
