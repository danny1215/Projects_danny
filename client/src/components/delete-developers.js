import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteDeveloper extends Component {

    constructor(props) {
        super(props);

        this.onChangeDeveFirst_Name = this.onChangeDeveFirst_Name.bind(this);
        this.onChangeDeveLast_name = this.onChangeDeveLast_name.bind(this);
        this.onChangeDeveRole = this.onChangeDeveRole.bind(this);
        this.onChangeJob_completed = this.onChangeJob_completed.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            DeveFirst_Name: '',
            DeveLast_name: '',
            DeveRole: '',
            Job_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/developer/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    DeveFirst_Name: response.data.DeveFirst_Name,
                    DeveLast_name: response.data.DeveLast_name,
                    DeveRole: response.data.DeveRole,
                    Job_completed: response.data.Job_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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


    onChangeJob_completed(e) {
        this.setState({
            Job_completed: !this.state.Job_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            DeveFirst_Name: this.state.DeveFirst_Name,
            DeveLast_name: this.state.DeveLast_name,
            DeveRole: this.state.DeveRole,
            Job_completed: this.state.Job_completed
        };
        console.log(obj);
        axios.delete('http://localhost:3001/developer/delete/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">ARE YOU SURE YOU WANT TO Delete Developer ?</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.DeveFirst_Name}
                                onChange={this.onChangeDeveFirst_Name}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
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
                        <input type="submit" value="Delete Developer" className="btn btn-primary" />
                    </div>
                    
                </form>
            </div>
        )
    }
}