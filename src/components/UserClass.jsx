import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cnt1:1,
        }
    };
    
    render(){
        return(
            <div>
                <h2>Class Component User</h2>
                <p>This is a user profile rendered using a class component.</p>
                cnt1: {this.state.cnt1}
                <p>{this.props.name}</p>
            </div>
        );
    }

}
export default UserClass;