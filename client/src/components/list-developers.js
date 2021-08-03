import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Developer = props => (
    <tr>
        <td>{props.developer.DeveFirst_Name}</td>
        <td>{props.developer.DeveLast_name}</td>
        <td>{props.developer.DeveRole}</td>
        <td>
            <Link to={"/edit/"+props.developer._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/delete/"+props.developer._id}>DELETE</Link>
        </td>
    </tr>
)

export default class DeveloperList extends Component {

    constructor(props) {
        super(props);
        this.state = {developer: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/developer/')
            .then(response => {
                this.setState({ developer: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    DeveloperList() {
        return this.state.developer.map(function(currentDeveloper, i){
            return <Developer developer={currentDeveloper} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Developer List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Developer Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.DeveloperList() }
                    </tbody>
                </table>
            </div>
        )
    }
}