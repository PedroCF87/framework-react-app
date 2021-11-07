import Link from 'next/link'

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary my-3">
        <a className="navbar-brand" href="#">{props.appName}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-md-4" id="navbarNav">
            <ul className="navbar-nav">
            <li className={props.activePage === 'Postagens' ? 'nav-item active' : 'nav-item'}>
                <Link href="/">
                    <a className="nav-link" href="/">Postagens <span className="sr-only">(current)</span></a>
                </Link>
            </li>
            <li className={props.activePage === 'Álbuns' ? 'nav-item active' : 'nav-item'}>
                <Link href="/albuns">
                    <a className="nav-link" href="/albuns">Álbuns</a>
                </Link>
            </li>
            <li className={props.activePage === 'TO DOs' ? 'nav-item active' : 'nav-item'}>
                <Link href="/todos">
                    <a className="nav-link" href="/todos">TO-DOs</a>
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    )
}
export default Navbar
