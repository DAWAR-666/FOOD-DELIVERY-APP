const UserFunc=(props)=>{
    return(
        <div>
            <h2>Functional Component User</h2>
            <p>This is a user profile rendered using a functional component.</p>
            <p>{props.name}</p>
        </div>
    );
}
export default UserFunc;