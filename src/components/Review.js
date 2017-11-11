import React from 'react'

import Header from 'components/Header';
import Menu from 'components/Menu';
import Navbar from 'containers/Navbar';

const Review = ({}) => (
    <div>
        <Header text={"Review"}/>
        <Menu menuItems={['Daily', 'Weekly']}/>
        <Navbar/>
    </div>
)

export default Review