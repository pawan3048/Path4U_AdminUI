import React, { useState } from "react";
import "./UniversitySemesterCreate.css";
import {Link, useNavigate} from 'react-router-dom'

const UniversitySemesterCreate = () => {
    let navigator = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleAddSemester = () => {
    navigator('/college-semester')
  }

  const handleAllSemester = () => {
    navigator('/college-semester-table')
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
          <h5>Semester</h5>

          <div className="college-course-nav-btns">
            <Link to={'/college-semester'}><button className="college-add-course-add-btn" onClick={handleAddSemester}>+ Add New Semester</button></Link>
            <Link to={'/college-semester-table'}><button className="college-all-course-btn" onClick={handleAllSemester}>All Semester</button></Link>
          </div>
        </div>

        <div className="add-college-course-inner-main-wrapper">
          <div className="form-main-container">
            <h4 className="college-course-detail">Semester</h4>
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
                  placeholder="Enter college-course Name"
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
                  placeholder="Write Short Description"
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

export default UniversitySemesterCreate;
