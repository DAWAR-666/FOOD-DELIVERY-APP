import React from "react";
import UserContext from "../utils/UserContext";
interface UserProps{
    name:string;
}
interface UserState{
    cnt:number;
}
class UserClass extends React.Component<UserProps,UserState>{
    constructor(props:UserProps){
        super(props);
        this.state={
            cnt:0,
            
        }
    };
    
    render(){
        return(
            <div>
                <UserContext.Consumer>
                    {({user}) => (
                        <p>Current User: {user}</p>
                    )}
                </UserContext.Consumer>
                <h2>Class Component User</h2>
                <p>This is a user profile rendered using a class component.</p>
                cnt1: {this.state.cnt}
                <br/>
                <button onClick={()=>{
                    this.setState({
                        cnt:this.state.cnt+1
                    })
                }}>cnt ++</button>
                <p>{this.props.name}</p>
            </div>
        );
    }

}
export default UserClass;