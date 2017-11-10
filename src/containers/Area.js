import React, {Component} from 'react';
import Header from 'components/Header';
import SubHeader from 'components/SubHeader';
import IncasedList from 'components/IncasedList';
import ProjectList from 'components/ProjectList';
import Note from 'components/Note';
import Navbar from 'containers/Navbar';
import Loading from 'components/Loading';

export default class Area extends Component {

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
                <Header text={this.state.title}/>
                <Note text={this.state.note}/>
                <IncasedList title={"Single Actions"} listItems={this.state.singleActions}/>
                <ProjectList projectIter={this.state.projectIter}/>
                <Navbar/>
            </div>
        )
    }

    render() {
        return (this.loadingHelper())
    }

}
