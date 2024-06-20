import React from "react";

const KKNProps = (props) => {
    return (
        <div>
            <h2><u>Function Props</u></h2>
            <h3>My Name is {props.name}</h3>
            <h5>{props.children}</h5>
        </div>
    )
}

export default KKNProps