import React, { Component } from 'react'
import formStyle from './formStyle.module.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fName: '',
            lName: '',
            age: '',
            occupation: '',
            email: '',
            mobileNumber: '',
            gender: 'default'
        }
    }

    fname = (event) => {
        this.setState({
            fName: event.target.value,
        })
    }
    lName = (event) => {
        this.setState({
            lName: event.target.value,
        })
    }
    age = (event) => {
        this.setState({
            age: event.target.value,
        })
    }
    occupation = (event) => {
        this.setState({
            occupation: event.target.value,
        })
    }
    email = (event) => {
        this.setState({
            email: event.target.value,
        })
    }
    mobileNumber = (event) => {
        this.setState({
            mobileNumber: event.target.value,
        })
    }
    gender = (event) => {
        this.setState({
            gender: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.sumbitData} className={formStyle.content}>
                    <label>First Name:</label>
                    <input type='text' placeholder='FirstName' value={this.state.fName} onChange={this.fname}></input>
                    <label>Last Name:</label>
                    <input type='text' placeholder='LastName' value={this.state.lName} onChange={this.lName}></input>
                    <label>Age:</label>
                    <input type='text' placeholder='Age' value={this.state.age} onChange={this.age}></input>
                    <label>Occupation:</label>
                    <input type='text' placeholder='Occupation' value={this.state.occupation} onChange={this.occupation}></input>
                    <label>Email ID:</label>
                    <input type='text' placeholder='Email' value={this.state.email} onChange={this.email}></input>
                    <label>Mobile Number:</label>
                    <input type='text' placeholder='MobileNumber' value={this.state.mobileNumber} onChange={this.mobileNumber}></input>
                    <label>Gender:</label>
                    <select value={this.state.gender} onChange={this.gender}>
                        <option value='default'>default</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                    <button type='sumbit'>Sumbit</button>
                </form>
            </div>
        )
    }

    sumbitData = (event) => {
        console.log(this.state, "State Item")
        alert('From Sumbitted')
        event.preventDefault();
    }
}

export default Form
