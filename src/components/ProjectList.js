import React from 'react'

import SubHeader from 'components/SubHeader';
import List from 'components/List';

function projectListHelper(item) {
    switch (item.type) {
        case('list'):
            return <List listItems={item.data}/>
        case('header'):
            return <SubHeader text={item.data}/>
        default:
            return <List listItems={item.data}/>

    }
}

const ProjectList = ({projectIter}) => (
    <div>
        {projectIter.map((item) => projectListHelper(item))}
    </div>
)

export default ProjectList