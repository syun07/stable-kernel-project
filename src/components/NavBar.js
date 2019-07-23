import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return(
        <Menu pointing secondary>
            <Menu.Item as={Link} to="/"
                name='HOME'
                active={props.activeItem === 'HOME'}
                onClick={props.handleItemClick}
            />
            <Menu.Item as={Link} to="/test"
                name='TEST'
                active={props.activeItem === 'TEST'}
                onClick={props.handleItemClick}
            />
        </Menu>
    )
}

export default NavBar;