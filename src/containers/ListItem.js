import React, {Component} from 'react';

export default class ListItem extends Component {

    render() {
        var {title, noteID, deadline, tags, finished} = {
            ...this.props
        }
        return (
            <div>
                {title}
            </div>
        )
    }

}
