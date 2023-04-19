import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <ul className="sidebar-category-list">
                <li className="sidebar-category">
                    <Link to="/category/pizza">Піци</Link>
                </li>
                <li className="sidebar-category">
                    <Link to="/category/burgers">Бургери</Link>
                </li>
                <li className="sidebar-category">
                    <Link to="/category/soups">Супи</Link>
                </li>
                <li className="sidebar-category">
                    <Link to="/category/sushi">Суші</Link>
                </li>
                <li className="sidebar-category">  
                     <Link to="/category/salads">Салати</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;