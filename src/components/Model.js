import './Modal.css'

const Model = (props) => {
    return (
        <>
         <div className="overlay">
        <div className="popup">
            <div className="form-content">
            <label>Your firstname</label> 
            <div className="firstname">{props.firstname}</div>

            <label>Your lastname</label> 
            <div className="lastname">{props.lastname}</div>
            </div>

            <label>Your phone number:</label> 
            <div className="phonenum">{props.phonenum}</div>

            <label>Your role:</label> 
            <div className="role">{props.role}</div>

            <label>Your message:</label> 
            <div className="message">{props.message}</div>

            <p>Do you want to send the form data ?</p>

            <div className="buttons">
            <div className="button">
            <button onClick={props.click}>Yes, sure</button>
            </div>

            <div className="button">
            <button onClick={props.click}>No, cancel</button>
            </div>
            </div>
            
        </div>
        </div>

        </>
    )
}
export default Model
