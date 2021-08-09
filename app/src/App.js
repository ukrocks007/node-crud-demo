import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserList from './components/userlist';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // must
        return (
            <>
                <UserList />
            </>
        );
    }
}

export default App;
