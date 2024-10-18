import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadAddCollegeNotes.css";
import { BiArrowBack } from "react-icons/bi";

const CollegeNotes = () => {
  const [className, setClassName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState(""); // State for language selection

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Class Name:", className);
    console.log("Subject Name:", subjectName);
    console.log("Chapter Name:", chapterName);
    console.log("Description:", description);
    console.log("Language:", language); // Log selected language
  };

  const handleAddNewNote = () => {
    navigate("/upload-notes/upload-add-college-notes");
  };

  const handleViewAllNotes = () => {
    navigate("/upload-notes/upload-all-college-notes");
  };
  const handleGoBack = () => {
    navigate("/upload-notes/upload-all-notes");
  };

  return (
    <>
      <div id="exam-college-notes-inner-wrapper">
        <div className="main-header">
        <BiArrowBack
                onClick={handleGoBack}
                className="left-arrow-icon"
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  fontSize: "25px",
                  color: "#000", // Customize the color as needed
                }}
              />
          <div className="exam-header-div">
            <h5>College Notes</h5>
            <div className="exam-btn-group">
              <button className="addNewNoteBtn" onClick={handleAddNewNote}>
                + Upload Notes
              </button>
              <button className="viewAllNotesBtn" onClick={handleViewAllNotes}>
                All Notes
              </button>
            </div>
          </div>

          <div className="allform-container" id="form">
            <h4 className="note-detail">Note Details</h4>
            <form onSubmit={handleSubmit} className="note-detail-form">
              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label">Course Name</label>
                </div>
                <select
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  required
                >
                  <option value="">Select Course</option>
                </select>
              </div>

              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label">Semester Name</label>
                </div>
                <select
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                  required
                >
                  <option value="">Select Semester</option>
                </select>
              </div>

              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label">Subject</label>
                </div>
                <select
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  value={chapterName}
                  onChange={(e) => setChapterName(e.target.value)}
                  required
                >
                  <option value="">Select Subject</option>
                </select>
              </div>

              {/* Radio buttons for language selection */}
              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label">Language</label>
                  <input
                    style={{
                      marginLeft: "10px",
                    }}
                    type="radio"
                    value="Hindi"
                    checked={language === "Hindi"}
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  />
                  Hindi
                  <input
                    style={{
                      marginLeft: "10px",
                    }}
                    type="radio"
                    value="English"
                    checked={language === "English"}
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  />
                  English
                </div>
              </div>

              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label">Upload File (pdf format)</label>
                </div>
                <input
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  type="file"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="form2-btns">
                <button className="btn-save">Save</button>
                <button className="btn-cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeNotes;
