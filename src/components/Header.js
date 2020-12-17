import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';

import { SearchOutlined } from '@material-ui/icons';

import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ChatIcon from '@material-ui/icons/Chat';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    className="header__logo"
                    src="https://www.flaticon.com/premium-icon/icons/svg/2504/2504923.svg"
                    alt="linkedin" />
                <div className="header__search">
                    <SearchOutlined />
                    <input
                        className="header__searchInput"
                        placeholder="Search"
                        type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={WorkIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging " />
                <HeaderOption Icon={NotificationsActiveIcon} title="Notifications" />
                <HeaderOption avatar='https://g-panda.web.app/images/BHU.jpg' title="Me" />
            </div>
        </div>
    )
}

export default Header;
