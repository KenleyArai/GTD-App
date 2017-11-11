import React from 'react'

import SubHeader from 'components/SubHeader';
import List from 'components/List';

const IncasedList = ({title, listItems}) => (
    <div>
        <SubHeader text={title}/>
        <List listItems={listItems}/>
    </div>
)

export default IncasedList