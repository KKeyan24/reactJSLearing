import React from "react";

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
    
        incermentCounter = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }

        render() {
            return <OriginalComponent  countValue={this.state.count} incrementFunc={this.incermentCounter}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent