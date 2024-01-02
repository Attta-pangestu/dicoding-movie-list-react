import { Link } from "react-router-dom";

function Navigation (){
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/now-playing">Now Playing</Link></li>
            <li><Link to="/upcoming">Upcoming</Link></li>
            <li><Link to="/search ">Search Movie</Link></li>
        </ul>
    );
}

export default Navigation;