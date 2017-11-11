import React from 'react'

import ListItem from 'containers/ListItem';

const List = ({title, listItems}) => (
    <div>
        {listItems.map((listItem) => <ListItem {...listItem}/>)}
    </div>
)

export default List