import React, { Component } from 'react';
import axios from 'axios';

export default class EditProject extends Component {

    constructor(props) {
        super(props);

        this.onChangeProject_Name = this.onChangeProject_Name.bind(this);
        this.onChangeDeveFirst_Name = this.onChangeDeveFirst_Name.bind(this);
        this.onChangeProject_Detail = this.onChangeProject_Detail.bind(this);
        this.onChangeDeveRole = this.onChangeDeveRole.bind(this);
        this.onChangeJob_completed = this.onChangeJob_completed.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Project_Name: '',
            DeveFirst_Name: '',
            Project_Detail: '',
            DeveRole: '',
            Job_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/project/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Project_Name: response.data.Project_Name,

                    DeveFirst_Name: response.data.DeveFirst_Name,

                    Project_Detail: response.data.Project_Detail,

                    DeveRole: response.data.DeveRole,

                    Job_completed: response.data.Job_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeProject_Name(e) {
        this.setState({
            Project_Name: e.target.value
        });
    }
    onChangeDeveFirst_Name(e) {
        this.setState({
            DeveFirst_Name: e.target.value
        });
    }

    onChangeProject_Detail(e) {
        this.setState({
            Project_Detail: e.target.value
        });
    }

    onChangeDeveRole(e) {
        this.setState({
            DeveRole: e.target.value
        });
    }


    onChangeJob_completed(e) {
        this.setState({
            Job_completed: !this.state.Job_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Project_Name: this.state.Project_Name,
            DeveFirst_Name: this.state.DeveFirst_Name,
            Project_Detail: this.state.Project_Detail,
            DeveRole: this.state.DeveRole,
            Job_completed: this.state.Job_completed
        };
        console.log(obj);
        axios.post('http://localhost:3001/project/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
           
        this.props.history.push('/project');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Project</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Project_Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Project_Name}
                                onChange={this.onChangeProject_Name}
                                />
                    </div>
                    <div className="form-group">
                        <label>DeveFirst_Name </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.DeveFirst_Name}
                                onChange={this.onChangeDeveFirst_Name}
                                />
                    </div>
                    <div className="form-group">
                        <label>Project_Detail </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Project_Detail}
                                onChange={this.onChangeProject_Detail}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="RoleOptions" 
                                    id="RoleDeveloper" 
                                    value="DEVELOPER"
                                    checked={this.state.DeveRole==='Developer'} 
                                    onChange={this.onChangeDeveRole}
                                    />
                            <label className="form-check-label">Developer</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="RoleOptions" 
                                    id="RoleManager" 
                                    value="MANAGER" 
                                    checked={this.state.DeveRole==='Manager'} 
                                    onChange={this.onChangeDeveRole}
                                    />
                            <label className="form-check-label">Manager</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeJob_completed}
                                checked={this.state.Job_completed}
                                value={this.state.Job_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Project" className="btn btn-primary" />
                    </div>
                    
                </form>
            </div>
        )
    }
}