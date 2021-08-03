import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProjects extends Component {
    constructor(props) {
        super(props);

        this.onChangeProject_Name = this.onChangeProject_Name.bind(this);
        this.onChangeDeveFirst_Name = this.onChangeDeveFirst_Name.bind(this);
        this.onChangeProject_Detail = this.onChangeProject_Detail.bind(this);
        this.onChangeDeveRole = this.onChangeDeveRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Project_Name: '',
            DeveFirst_Name: '',
            Project_Detail: '',
            DeveRole: '',
            Job_completed: false
        }
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

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Project_Name: ${this.state.Project_Name}`);
        console.log(`DeveFirst_Name: ${this.state.DeveFirst_Name}`);
        console.log(`Project_Detail: ${this.state.Project_Detail}`);
        console.log(`DeveRole: ${this.state.DeveRole}`);
        

        const newProject = {
            Project_Name: this.state.Project_Name,
            DeveFirst_Name: this.state.DeveFirst_Name,
            Project_Detail: this.state.Project_Detail,
            DeveRole: this.state.DeveRole,
            Job_completed: this.state.Job_completed
        };

        axios.post('http://localhost:3001/project/add', newProject)
            .then(res => console.log(res.data));


        this.setState({
            Project_Name: '',
            DeveFirst_Name: '',
            Project_Detail: '',
            DeveRole: '',
            Job_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create projects</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>Project_Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Project_Name}
                                onChange={this.onChangeProject_Name}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>First_Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.DeveFirst_Name}
                                onChange={this.onChangeDeveFirst_Name}
                                />
                    </div>

                    <div className="form-group"> 
                        <label>Project_Detail: </label>
                        <input  type="text"
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
                            <label className="form-check-label">DEVELOPER</label>
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
                            <label className="form-check-label">MANAGER</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="NEW Project" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}