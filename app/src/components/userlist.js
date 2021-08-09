import React, { Component } from 'react';
import axios from 'axios';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.getUsers = this.getUsers.bind(this);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        axios.get('http://localhost:3001/api/user').then(res => {
            this.setState({
                users: res.data.users
            });
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <h1>User List</h1>
                <p></p>
            </>
        );
    }
}