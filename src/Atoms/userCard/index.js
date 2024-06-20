
 const UserCard =(image, fullName,id)=>{
    return(
        <div>
            <img src={image} alt={`${fullName} profile`}/>
            <h3>(fullName)</h3>
        </div>
    )
 } 
 export default UserCard