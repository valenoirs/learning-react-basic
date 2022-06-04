import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/learning-react-basic/">Home</Link>
            </li>
            <li>
              <Link to="/learning-react-basic/about">About</Link>
            </li>
            <li>
              <Link to="/learning-react-basic/information">Information</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Nav