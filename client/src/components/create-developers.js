import React, { Component } from 'react';
import axios from 'axios';

export default class CreateDevelopers extends Component {
    constructor(props) {
        super(props);

        this.onChangeDeveFirst_Name = this.onChangeDeveFirst_Name.bind(this);
        this.onChangeDeveLast_name = this.onChangeDeveLast_name.bind(this);
        this.onChangeDeveRole = this.onChangeDeveRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            DeveFirst_Name: '',
            DeveLast_name: '',
            DeveRole: '',
            Job_completed: false
        }
    }

    onChangeDeveFirst_Name(e) {
        this.setState({
            DeveFirst_Name: e.target.value
        });
    }

    onChangeDeveLast_name(e) {
        this.setState({
            DeveLast_name: e.target.value
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
        console.log(`DeveFirst_Name: ${this.state.DeveFirst_Name}`);
        console.log(`DeveLast_name: ${this.state.DeveLast_name}`);
        console.log(`DeveRole: ${this.state.DeveRole}`);
        

        const newDeveloper = {
            DeveFirst_Name: this.state.DeveFirst_Name,
            DeveLast_name: this.state.DeveLast_name,
            DeveRole: this.state.DeveRole,
            Job_completed: this.state.Job_completed
        };

        axios.post('http://localhost:3001/developer/add', newDeveloper)
            .then(res => console.log(res.data));


        this.setState({
            DeveFirst_Name: '',
            DeveLast_name: '',
            DeveRole: '',
            Job_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create Developers</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First_Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.DeveFirst_Name}
                                onChange={this.onChangeDeveFirst_Name}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last_Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.DeveLast_name}
                                onChange={this.onChangeDeveLast_name}
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
                        <input type="submit" value="NEW Developer" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}