import React, {Component} from 'react';
import Area from 'components/Area';
import Navbar from 'containers/Navbar';
import Loading from 'components/Loading';

export default class Today extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Area',
            isLoading: true
        }

    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch(this.props.api_url)
            .then(response => response.json())
            .then(data => this.setState({title: data.title, note: data.note, singleActions: data.singleActions, projectIter: data.projectIter, isLoading: false}));
    }

    loadingHelper() {
        if (this.state.isLoading) {
            return <Loading/>
        }
        return (
            <div>
                <Area
                    title={this.state.title}
                    note={this.state.note}
                    singleActions={this.state.singleActions}
                    projectIter={this.state.projectIter}/>
                <Navbar/>
            </div>
        )
    }

    render() {
        return (this.loadingHelper())
    }

}
