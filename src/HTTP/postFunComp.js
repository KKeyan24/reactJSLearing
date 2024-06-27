import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PostFunComp() {
    const [userDetail, setUserDetail] = useState({
        userId: '',
        title: '',
        body: '',
    })

    useEffect(() => {
        console.log(userDetail)
    }, [userDetail])

    const sumbitHandler = (formData) => {
        formData.preventDefault();
        axios
            .post('https://jsonplaceholder.typicode.com/posts', userDetail)
            .then(res => {
                setUserDetail(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const changeHandler = (e, eventFor) => {
        setUserDetail({ ...userDetail, [eventFor]: e.target.value })
    }
    
    return (
        <div>
            <form onSubmit={sumbitHandler}>
                <input type='text' name='userId' placeholder='User ID' value={userDetail.userId} onChange={(e) => changeHandler(e, 'userId')} />
                <br></br><br></br>
                <input type="text" name="title" placeholder="Title" value={userDetail.title} onChange={(e) => changeHandler(e, 'title')} />
                <br></br><br></br>
                <input type="text" name="body" placeholder="Body" value={userDetail.body} onChange={(e) => changeHandler(e, 'body')} />
                <br></br><br></br>
                <input type="submit" value="Submit" />
            </form>
            {
                userDetail.id ? <div ><h3>Hi {userDetail.userId}, You Name is: {userDetail.title} and Your Body is: {userDetail.body}</h3></div> : null

            }
        </div>
    )
}

export default PostFunComp;
