const Nav = () => {
  return (
    <nav>
      <div className="nav-container container mx-auto px-3">
        <a href="#home" className="nav-logo">
          <img src="../../assets/images/logo.svg" alt="" />
        </a>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#new">New</a>
          </li>
          <li className="nav-item">
            <a href="#popular">Popular</a>
          </li>
          <li className="nav-item">
            <a href="#trending">Trending</a>
          </li>
          <li className="nav-item">
            <a href="#categories">Categories</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
