import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
                <h2>Class Component User</h2>
                <p>This is a user profile rendered using a class component.</p>
                <p>{this.props.name}</p>
            </div>
        );
    }

}
export default UserClass;