const Form = () => {
    return (
        <div>
        <div className="row">
            <div className="col">
            <div className="mb-3">
                <label htmlFor="address" className="form-label" style={{marginTop: "50px"}}>Address</label>
                <input type="text" className="form-control" id="address" placeholder="14585 10th AveWhitehouse, NY" style={{width: "300px", margin: "auto"}}>   
                </input>
            </div>
            
            <div className="mb-3">
                <label htmlFor="telephone" className="form-label">Telephone</label>
                <input type="tel" className="form-control" id="telephone" placeholder="+1-202-555-0160" style={{width: "300px", margin: "auto"}}>
                </input>
            </div>

            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="someone@example.com" style={{width: "300px", margin: "auto"}}>
                </input>
            </div>

            <div className="mb-3">
                <label htmlFor="aboutMe">About Me</label>
                <textarea className="form-control" id="aboutMe" placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ..." rows="3" style={{height: "100px" , width: "300px", margin: "auto", resize: "none"}}>
                </textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="workExperience">Work Experience</label>
                <textarea className="form-control" id="workExperience" placeholder="#Position&#13;&#10;Company Name/City/Year&#13;&#10;Description" rows="3" style={{height: "100px" , width: "300px", margin: "auto", resize: "none"}}>
                </textarea>
            </div>
            </div>
            <div className="col">
            <div className="mb-3">
                <label htmlFor="education" className="form-label" style={{marginTop: "50px"}}>Education</label>
                <textarea className="form-control" id="education" placeholder="#Bachelor in Graphic Design&#13;&#10;Description" rows="3" style={{height: "100px" , width: "300px", margin: "auto", resize: "none"}}>
                </textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="skills" className="form-label">Skills</label>
                <input type="text" className="form-control" id="skills" placeholder="Teamwork, Creativity, HTML/CSS, Photoshop" style={{width: "300px", margin: "auto"}}>   
                </input>
            </div>
            <div className="mb-3">
                <label htmlFor="hobbies" className="form-label">Hobbies</label>
                <input type="text" className="form-control" id="hobbies" placeholder="Art, Traveling, Photography, Sports, Music" style={{width: "300px", margin: "auto"}}>   
                </input>
            </div>
            </div>
        </div>
        <button className="btn btn-primary" style={{width: "90px", margin: "auto", marginTop: "10px"}}>Generate</button>
        </div>
    )
}

export default Form;