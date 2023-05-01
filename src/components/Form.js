const Form = (props) => {
    
    return (
        <>
        <form onSubmit={props.submit}>
        <div className="form-title">
            <h3>Send a message</h3>
        </div>
        <div className="input-form">
            <div className="form-field">
            <label>First name</label>
            <input type="text" id="firstname" name="firstname" onChange={props.handler} />
            </div>

            <div className="form-field">
            <label>Last name</label>
            <input type="text" id="lastname" name="lastname" onChange={props.handler} />
            </div>

            <div className="form-field">
            <label>Phone number:</label>
            <input type="text" id="phonenum" name="phonenum" onChange={props.handler} />
            </div>

            <div className="form-field">
            <label>Select your role:</label>  
            <select id="select-role" name="role" onChange={props.handler}>
                <option value="select" invalid="true" hidden>Select one..</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
            </select>
            </div>

            <div className="form-field">
            <label id="textarea-label">Message:</label>
            <textarea id="message" name="message" rows="4" cols="40" onChange={props.handler}></textarea>
            </div>

        </div>
        </form>
        </>
    )
}

export default Form