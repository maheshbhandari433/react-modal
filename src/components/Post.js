const Post = (props) => {

    return (
    <>
    <div className = "post">
    <h2>Notes List</h2> 

    {props.data.map(item =>
   <li key = {item.firstname}>
    {item.firstname} {item.lastname} {item.phonenum} {item.role} {item.message} 
   </li>)}  
   </div>
    </>
    )
   }

export default Post