import PropTypes from 'prop-types'

function Navbar(props){
    return (
      
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">Disabled</a>
                </li>
              </ul>
            </div>
            {/* <form class="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav>
      
    );
}
export default Navbar;
Navbar.propTypes= {
    title:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:"Default"
}