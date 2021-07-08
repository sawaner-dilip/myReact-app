import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);

        this.state ={planet:"Earth",};
        console.log("hey I from Constructor ");
    }
    componentDidMount(){
        console.log("hey I from Did mount ");
    }
    // Component Life cycle Methods
    render(){ 
        console.log("hey I from render ");
        return(
            
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet}</h4>
            </div>
        )

    }
}
export default User;