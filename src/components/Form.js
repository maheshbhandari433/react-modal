const Form = (props) => {
    
    return (
        <>
        <form onSubmit={props.click}>
        <div className="form-title">
            Send a message
        </div>
        <div className="input-form">
            <div className="form-field">
            <label>First name</label>
            <input type="text" id="firstname" />
            </div>

            <div className="form-field">
            <label>Last name</label>
            <input type="text" id="lastname" />
            </div>

            <div className="form-field">
            <label>Phone number:</label>
            <input type="text" id="phonenum" />
            </div>

            <div className="form-field">
            <label>Select your role:</label>  
            <select id="select-role">
                <option value="select" invalid="true" hidden>Select one..</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
            </select>
            </div>

            <div className="form-field">
            <label id="textarea-label">Message:</label>
            <textarea id="message" rows="4" cols="40"></textarea>
            </div>

            <div className="button">
                <button>Send</button>
            </div>

        </div>
        </form>
        </>
    )
}

export default Form