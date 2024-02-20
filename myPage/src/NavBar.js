import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';


export function NavBar() {
    return <>
        <nav id="mobile_menu"></nav>
        <nav id="nav_menu">
            <ul>
                <li><a href="../Html/index.html"> <FontAwesomeIcon icon={faHouse} /> Home</a></li>
                <li><a href="../Html/nathans-page.html"> <FontAwesomeIcon icon={faFolderOpen} /> Nathan</a></li>
                <li><a href="../Html/zacks-page.html"> Zack</a></li>
                <li><a href="../Html/roberts-page.html"> Robert</a></li>
                <li><a href="../"> <FontAwesomeIcon icon={faAddressBook} /> Contact information</a></li>
            </ul>
        </nav>

    </>
}