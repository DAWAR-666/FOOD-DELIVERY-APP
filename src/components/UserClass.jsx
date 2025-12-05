import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cnt1:1,
            cnt2:2
        }
    };
    
    render(){
        return(
            <div>
                <h2>Class Component User</h2>
                <p>This is a user profile rendered using a class component.</p>
                cnt1: {this.state.cnt1}
                <br/>
                cnt2: {this.state.cnt2}
                <br/>
                <p>{this.props.name}</p>
            </div>
        );
    }

}
export default UserClass;