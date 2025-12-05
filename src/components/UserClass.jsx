import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cnt:0,
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
                <button onClick={
                    this.setState({
                        cnt:this.state.cnt+1
                    })
                }>cnt ++</button>
                <p>{this.props.name}</p>
            </div>
        );
    }

}
export default UserClass;