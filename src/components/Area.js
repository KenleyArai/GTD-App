import React from 'react'

import Header from 'components/Header';
import Note from 'components/Note';
import IncasedList from 'components/IncasedList';
import ProjectList from 'components/ProjectList';

const Area = ({title, note, singleActions, projectIter}) => (
    <div>
        <Header text={title}/>
        <Note text={note}/>
        <IncasedList title={"Single Actions"} listItems={singleActions}/>
        <ProjectList projectIter={projectIter}/>
    </div>
)

export default Area