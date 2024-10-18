import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddExamCategory.css";

const AddAddExamCategory = () => {
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
    navigate("/ce-exam-add-category");
  };

  const handleViewAllExams = () => {
    navigate("/ce-exam-all-category");
  };

  return (
    <>
      <div className="add-exam-category-wrapper">
        <div className="add-exam-category-header-container">
          <div className="add-exam-category-header-content">
            <h5>Competitive Exam Category</h5>
            <div className="add-exam-category-buttons-container">
              <button
                className="add-exam-category-exam-btn"
                onClick={handleAddNewExam}
              >
                + Add New Exam
              </button>
              <button
                className="category-exam-view-all-btn"
                onClick={handleViewAllExams}
              >
                All Exams
              </button>
            </div>
          </div>

          <div className="add-exam-category-form-container">
            <h4 className="add-exam-category-detail-header">Exam Category</h4>
            <form onSubmit={handleSubmit} className="add-exam-category-form">
              <div className="add-exam-category-input-group">
                <div className="add-exam-category-input-label">
                  <label className="add-exam-category-label">Course Name</label>
                </div>
                <select
                  className="add-exam-category-input-field"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                  required
                >
                  <option value="" >Select Course Name</option>
                  
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="add-exam-category-input-group">
                <div className="add-exam-category-input-label">
                  <label className="add-exam-category-label">Subject</label>
                </div>
                <select
                  className="add-exam-category-input-field"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                >
                  <option value="" >Select Subject</option>
                 
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="add-exam-category-input-group">
                <div className="add-exam-category-input-label">
                  <label className="add-exam-category-label">Category</label>
                </div>
                <select
                  className="add-exam-category-input-field"
                  value={chapter}
                  onChange={(e) => setChapter(e.target.value)}
                  required
                >
                  <option value="" >Select Category</option>
                  
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="add-exam-category-exam-form-buttons">
                <button type="submit" className="add-exam-category-btn-submit">
                  Save
                </button>
                <button type="button" className="add-exam-category-btn-cancel">
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

export default AddAddExamCategory;
