import React from 'react'

function ListRendering({persons}) {
    console.log(persons)
    return (
        <div>
            <h2> I am {persons.fullName}.</h2>
            <p>My username is <b>{persons.username}</b>, with FiduciaryId: <b>{persons.fiduciaryId}</b></p>
        </div>
    )
}

export default ListRendering
