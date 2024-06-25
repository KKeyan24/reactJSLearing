import React from 'react'
import ListRendering from './ListRendering'

function DataJson() {
    // method I:-
    // const persons = ['karthi', 'Anand', 'yoga', 'vishnu']
    // return (
    //     <div>
    //         {
    //             persons.map(persons => {
    //                 return <h1>{persons}</h1>
    //             })
    //         }
    //     </div>
    // )
    // method II:- 
const names = [
    {
        fullName: 'Hamilton, Deborah J',
        fiduciaryId: "C-00006469",
        username: "ftciuatuser200"
    },
    {
        fiduciaryId: "C-00011496",
        username: "FNEUBAUER",
        fullName: "Neubauer, Frank",
    },
    {
        fiduciaryId: "C-00002880",
        username: "ftciuatuser201",
        fullName: "Cohn, Marc S.",
    } 
]
const nameList = names.map(name => <ListRendering persons={name}></ListRendering>)
return <div>{nameList}</div>
}

export default DataJson
