import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./AddSubject.css";

const AddSubject = () => {
  const [schoolClassName, setSchoolClassName] = useState("");
  const [schoolSubjectName, setSchoolSubjectName] = useState("");
  // const [reference, setReference] = useState("");
  // const [subjectUploadIcon, setSubjectUploadIcon] = useState(null);
  // const [subjectDescription, setSubjectDescription] = useState("");

  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/subjects`,{subjectName:schoolSubjectName}).then((resp)=>{
      console.log(resp.data)
      alert("Subject Add Successfully")
    }).catch((err)=>{
      alert("Subject Error",err)
      console.log("Error",err)
    })
  };
  
  const handleAddNewSubject = () => {
    navigate("/school-add-subject");
  };

  const handleViewAllSubjects = () => {
    navigate("/school-all-subject");
  };

  // const API_BASE_URL = process.env.REACT_APP_API_BASEURL;
    // CLASSES DATA GET FUN AXIOS --
    const getClasses = ()=>{
      axios
        .get(`${API_BASE_URL}/classes`)
        .then((resp) => {
          const { data } = resp.data;
          setSchoolClassName(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    useEffect(() => {
      getClasses();
    }, []);

  return (
    <>
          <div id="add-subject-inner-wrapper">
            <div className="superheader">
              <div className="subjectHeaderdiv">
                <h5>Subject</h5>
                <div className="subjectdiv2">
                  <button
                    className="handleNewSubject"
                    onClick={handleAddNewSubject}
                  >
                    + Add New Subject
                  </button>
                  <button
                    className="allSubjects"
                    onClick={handleViewAllSubjects}
                  >
                    All Subjects
                  </button>
                </div>
              </div>

              <div className="form-sub-container mt-4" id="form">
                <h4 className="subject-detail">Subject Details</h4>
                <form className="subject-detail-form">
                  <div className="input-group">
                    <div style={{ paddingBottom: "10px" }}>
                      <label className="label">Class Name</label>
                    </div>
                    <select
                      className="select-dropdown"
                      // value={subjectName}
                      // onChange={(e) => setSubjectName(e.target.value)}
                      required
                    >
                      <option value="">-Select Class</option>
                      {
                        schoolClassName &&
                        schoolClassName.map((classes)=>(
                          <option value={classes._id} key={classes._id}>{classes?.className}</option>
                        ))
                      }
                    </select>
                  </div>

                  <div className="input-group">
                    <div style={{ paddingBottom: "10px" }}>
                      <label className="label">Subject</label>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Subject"
                      onChange={(e) => setSchoolSubjectName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <div style={{ paddingBottom: "10px" }}>
                      <label className="label">Upload Icon</label>
                    </div>
                    {/* const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }; */}
                    <input type="file" id="subject-upload-icon" onChange={(e)=>e.target.files[0]} />
                  </div>

                  <div className="school-subj-form-btns">
                    <button className="btn-search" onClick={handleSubmit}>Save</button>
                    <button className="btn-cancel">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </>
  );
};

export default AddSubject;
