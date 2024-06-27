import React, { Component } from 'react'
import axios from 'axios'

class PostHTTP extends Component {
    responseData = [];
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: '',
            view: false
        }
    }

    eventChangehandler = (data) => {
        this.setState({
            [data.target.name]: data.target.value
        })
    }

    sumbitHandler = (formData) => {
        formData.preventDefault();
        const payload = this.state
        axios
        .post('https://jsonplaceholder.typicode.com/posts', payload)
        .then(res => {
            this.state.view = true;
            console.log(res.data, "Direct Data")
            this.responseData.push(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { userId, title, body, view } = this.state
        return (
            <div>
                <form onSubmit={this.sumbitHandler}>
                    <input type='text' name='userId' placeholder='User ID' value={userId} onChange={this.eventChangehandler}/>
                    <br></br><br></br>
                    <input type="text" name="title" placeholder="Title" value={title} onChange={this.eventChangehandler}/>
                    <br></br><br></br>
                    <input type="text" name="body" placeholder="Body" value={body} onChange={this.eventChangehandler}/>
                    <br></br><br></br>
                    <input type="submit" value="Submit" />
                </form>
                <div view={'true'}><h3>Hi {this.responseData.userId}, You Name is: {this.responseData.title} {this.responseData.body}</h3></div>
            </div>
        )
        
    }
}

export default PostHTTP
