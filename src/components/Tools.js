import React from 'react'

import Header from 'components/Header';
import Menu from 'components/Menu';
import Navbar from 'containers/Navbar';

const Tools = ({}) => (
    <div>
        <Header text={"Tools"}/>
        <Menu
            menuItems={['Reference', 'Areas', 'Review', 'Mind Dump', 'Process Inbox']}/>
        <Navbar/>
    </div>
)

export default Tools