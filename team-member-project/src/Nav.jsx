import { Link } from 'react-router-dom'; // to link to certain components

const Nav = () => {
    return ( /*This is to have a nav bar with clickable routes */
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className='nav-item'> 
                    <Link className='nav-link' to="/team-member-allocation">Home</Link> {/**For Nav text */}
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/GroupedTeamMembers'>Teams</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;