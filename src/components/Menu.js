import React from 'react'

import MenuItem from 'components/MenuItem'

const Menu = ({menuItems}) => (
    <div>
        {menuItems.map((item) => <MenuItem item={item}/>)
}
    </div>
)

export default Menu