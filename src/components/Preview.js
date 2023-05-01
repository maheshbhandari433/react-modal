const Preview = (props) => {
    return (
        <>
        <div className="preview">
        <div className="lines"> </div>
        <form onSubmit={props.submit} className="preview-form">
        <div className="preview-field">
            <h3>Preview</h3>
        </div>
            
        <div className="preview-field">
        <p>First name</p>
        <div className="single-preview-field">{props.firstname}</div>
         </div>

        <div className="preview-field">
        <p>Last name</p>
        <div className="single-preview-field">{props.lastname}</div>
            </div>

        <div className="preview-field">
        <p>Phone number</p>
        <div className="single-preview-field">{props.phonenum}</div>
            </div>

        <div className="preview-field">
        <p>Role</p>
        <div className="single-preview-field">{props.role}</div>
            </div>

        <div className="preview-field">
        <p>Your message:</p>
        <div className="single-preview-field">{props.message}</div>
            </div>

        <div className="button">
         <button>Send</button>
         </div>

        </form>

        </div>
        </>
    )
}

export default Preview 