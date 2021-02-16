import React from 'react';
import "antd/dist/antd.css";
import Menu from "antd/lib/menu";
import PropTypes from 'prop-types';

export const MenuContainer = ({current, setCurrent}) => {

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={(e) => handleClick(e)}
            selectedKeys={current}
            mode="horizontal"
        >
            <Menu.Item key="table" >
                Table
            </Menu.Item>
            <Menu.SubMenu key="SubMenu" title="Bar Graph" >
                <Menu.Item key="conversation_countList">Conversation count</Menu.Item>
                <Menu.Item key="missed_chat_countList">Missed chat count</Menu.Item>
                <Menu.Item key="visitors_with_countList">Visitors with conversation count</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
};

MenuContainer.propTypes = {
    setCurrent: PropTypes.func.isRequired,
    current: PropTypes.string.isRequired
};
