import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Project = props => (
    <tr>
        <td>{props.project.Project_Name}</td>
        <td>{props.project.DeveFirst_Name}</td>
        <td>{props.project.Project_Detail}</td>
        <td>{props.project.DeveRole}</td>
        <td>
            <Link to={"/list/edit/"+props.project._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/list/delete/"+props.project._id}>DELETE</Link>
        </td>
    </tr>
)

export default class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.state = {project: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/project/')
            .then(response => {
                this.setState({ project: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    ProjectList() {
        return this.state.project.map(function(currentProject, i){
            return <Project project={currentProject} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Project List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Project Name </th>
                            <th>DeveFirst Name</th>
                            <th>Project_Detail</th>
                            <th>Developer Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.ProjectList() }
                    </tbody>
                </table>
            </div>
        )
    }
}