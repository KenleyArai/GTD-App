import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'containers/App';
import registerServiceWorker from './registerServiceWorker';

var data = {
    current_state: "inbox",
    data: {
        title: "Inbox",
        listItems: [
            {
                checked: false,
                title: "test"
            }, {
                checked: false,
                title: "test2"
            }
        ]
    }
}

ReactDOM.render(
    <App baseURL={"https://demo2166501.mockable.io/"}/>, document.getElementById('root'));
registerServiceWorker();
