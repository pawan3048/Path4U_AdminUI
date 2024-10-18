import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCompetitiveSubject.css";

const AddCompetitiveSubject = () => {
  const [examName, setExamName] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Class Name:", examName);
    console.log("Subject:", subject);
    console.log("Chapter:", chapter);
  };

  const handleAddNewExam = () => {
    navigate("/ce-add-subject");
  };

  const handleViewAllExams = () => {
    navigate("/ce-all-subject");
  };

  return (
    <>
      <div className="competitive-subject-wrapper">
        <div className="competitive-subject-header-container">
          <div className="competitive-subject-header-content">
            <h5>Competitive Exam Subject</h5>
            <div className="competitive-subject-buttons-container">
              <button
                className="competitive-subject-add-btn"
                onClick={handleAddNewExam}
              >
                + Add New Subject
              </button>
              <button
                className="competitive-subject-view-btn"
                onClick={handleViewAllExams}
              >
                All Subject
              </button>
            </div>
          </div>

          <div className="competitive-subject-form-container">
            <h4 className="competitive-subject-detail-header">Competitive Subject</h4>
            <form onSubmit={handleSubmit} className="competitive-subject-form">
              <div className="competitive-subject-input-group">
                <div className="competitive-subject-input-label">
                  <label className="competitive-subject-label">Course Name</label>
                </div>
                <select
                  className="competitive-subject-input-field"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                  required
                >
                  <option value="">Select Course Name</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="competitive-subject-input-group">
                <div className="competitive-subject-input-label">
                  <label className="competitive-subject-label">Subject</label>
                </div>
                <select
                  className="competitive-subject-input-field"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                >
                  <option value="">Select Subject</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="competitive-subject-input-group">
                <div className="competitive-subject-input-label">
                  <label className="competitive-subject-label">Category</label>
                </div>
                <select
                  className="competitive-subject-input-field"
                  value={chapter}
                  onChange={(e) => setChapter(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="competitive-subject-form-buttons">
                <button type="submit" className="competitive-subject-btn-submit">
                  Save
                </button>
                <button type="button" className="competitive-subject-btn-cancel">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCompetitiveSubject;
