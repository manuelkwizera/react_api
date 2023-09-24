import { Link } from "react-router-dom"

function Navbar(){
    return (
        // <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //     <div className="container-fluid">
        //         <Link className="navbar-brand" to="#">Navbar</Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //             <li className="nav-item">
        //             <Link className="nav-Link active" aria-current="page" to="#">Home</Link>
        //             </li>
        //             <li className="nav-item">
        //             <Link className="nav-Link" to="#">Link</Link>
        //             </li>
        //             <li className="nav-item dropdown">
        //             <Link className="nav-Link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 Dropdown
        //             </Link>
        //             <ul className="dropdown-menu">
        //                 <li><Link className="dropdown-item" to="#">Action</Link></li>
        //                 <li><Link className="dropdown-item" to="#">Another action</Link></li>
        //                 <li><Link className="dropdown-divider"></Link></li>
        //                 <li><Link className="dropdown-item" to="#">Something else here</Link></li>
        //             </ul>
        //             </li>
        //             <li className="nav-item">
        //             <Link className="nav-Link disabled" aria-disabled="true">Disabled</Link>
        //             </li>
        //         </ul>
        //         <form className="d-flex" role="search">
        //             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        //             <button className="btn btn-outline-success" type="submit">Search</button>
        //         </form>
        //         </div>
        //     </div>
        // </nav>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            {/* <li><hr class="dropdown-divider"></li> */}
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar