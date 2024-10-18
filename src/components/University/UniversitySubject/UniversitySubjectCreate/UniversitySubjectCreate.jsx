import React, { useState } from "react";
import "./UniversitySubjectCreate.css";
import {Link, useNavigate} from 'react-router-dom'

const UniversitySubjectCreate = () => {
    let navigator = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleAddSubject = () => {
    navigator('/college-subject')
  }

  const handleAllSubject = () => {
    navigator('/college-all-subject')
    // navigator('/college-all-courses')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <>
      <div id="add-college-course-wrapper">
        
        <div className="course-header-with-btns">
          <h5>Subject</h5>

          <div className="college-course-nav-btns">
            <Link to={'/college-subject'}><button className="college-add-course-add-btn" onClick={handleAddSubject}>+ Add New Subject</button></Link>
            <Link to={'/college-all-subject'}><button className="college-all-course-btn" onClick={handleAllSubject}>All Subject</button></Link>
          </div>
        </div>

        <div className="add-college-course-inner-main-wrapper">
          <div className="form-main-container">
            <h4 className="college-course-detail">Subject</h4>
            <form
              onSubmit={handleSubmit}
              className="college-course-detail-form"
            >
              <div className="input-group">
                  <label className="label">Course Name</label>
                <input
                 style={{
                  marginLeft: "1px",
                  borderBottomLeftRadius: "5px",
                  borderTopLeftRadius: "5px",
                }}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter course Name"
                  required
                />
              </div>
              <div className="input-group">
                <label className="label">Semester</label>
                <input
                 style={{
                  marginLeft: "1px",
                  borderBottomLeftRadius: "5px",
                  borderTopLeftRadius: "5px",
                }}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label className="label">Subject</label>
                <input
                 style={{
                  marginLeft: "1px",
                  borderBottomLeftRadius: "5px",
                  borderTopLeftRadius: "5px",
                }}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="college-course-form-btns">
                <button className="btn-search">Save</button>
                <button className="btn-cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversitySubjectCreate;
