import React, {Component} from 'react';
import Header from 'components/Header';
import SubHeader from 'components/SubHeader';
import IncasedList from 'components/IncasedList';
import List from 'components/List';
import Area from 'components/Area';
import Navbar from 'containers/Navbar';
import Loading from 'components/Loading';

export default class Areas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Areas',
            isLoading: true
        }

    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch(this.props.api_url)
            .then(response => response.json())
            .then(data => this.setState({note: data.note, singleActions: data.singleActions, areasIter: data.areasIter, isLoading: false}));
    }

    loadingHelper() {
        if (this.state.isLoading) {
            return <Loading/>
        }
        console.log(this.state)
        return (
            <div>
                <Header text={this.state.title}/>
                <List listItems={this.state.singleActions}/> {this
                    .state
                    .areasIter
                    .map((area) => <Area {...area}/>)}
                <Navbar/>
            </div>
        )
    }

    render() {
        return (this.loadingHelper())
    }

}
