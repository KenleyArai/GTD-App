import React, {Component} from 'react';
import Header from 'components/Header';
import List from 'components/List';
import NewTodoButton from 'containers/NewTodoButton';
import Navbar from 'containers/Navbar';
import Loading from 'components/Loading'

export default class Inbox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Inbox',
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch(this.props.baseURL + 'inbox')
            .then(response => response.json())
            .then(data => this.setState({listItems: data.items, isLoading: false}));
    }

    loadingHelper() {
        if (this.state.isLoading) {
            return <Loading/>
        }
        return (
            <div>
                <Header text={this.state.title}/>
                <List listItems={this.state.listItems}/>
                <NewTodoButton/>
                <Navbar/>
            </div>
        )
    }

    render() {
        return (this.loadingHelper())
    }

}
