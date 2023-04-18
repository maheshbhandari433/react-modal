const Model = () => {
    return (
        <>
        <div className="model">
            <div className="form-content">
            <label>Your firstname</label> 
            <div className="firstname"></div>

            <label>Your lastname</label> 
            <div className="lastname"></div>
            </div>

            <label>Your phone number:</label> 
            <div className="phone-num"></div>

            <label>Your role:</label> 
            <div className="role"></div>

            <label>Your message:</label> 
            <div className="message"></div>

            <p>Do you want to send the form data ?</p>

            <div className="buttons">
            <div className="button">
            <button>Yes, sure</button>
            </div>

            <div className="button">
            <button>No, cancel</button>
            </div>
            </div>
            
        </div>

        </>
    )
}
export default Model
