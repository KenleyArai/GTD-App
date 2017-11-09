import React, {Component} from 'react';
import Navitem from 'components/Navitem';

export default class Navbar extends Component {

    render() {
        var {clickHandler} = {
            ...this.props
        }
        return (
            <div>
                <Navitem text={'Inbox'}/>
                <Navitem text={'Tools'}/>
                <Navitem text={'Today'}/>
                <Navitem text={'Maintain'}/>
            </div>
        )
    }

}
