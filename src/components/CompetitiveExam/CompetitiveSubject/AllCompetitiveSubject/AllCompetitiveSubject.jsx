import React from "react";
import WelcomeBack from "../../../WelcomeBackMsg/WelcomeBack.jsx"; // Adjust path based on your structure
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import "./AllCompetitiveSubject.css"; // Updated CSS file import

const AllCompetitiveSubject = () => {
  const navigate = useNavigate();
  
  const handleAddNewCategory = () => {
    navigate("/ce-add-subject");
  };

  const handleViewAllCategories = () => {
    navigate("/ce-add-subject");
  };

  return (
    <div id="comp-subject-inner-wrapper">
      <div className="comp-subject-header">
        <h5>Exam Categories</h5>
        <div className="comp-subject-header-btns">
          <button className="comp-subject-add-btn" onClick={handleAddNewCategory}>
            + Add New Subject
          </button>
          <button className="comp-subject-view-all-btn" onClick={handleViewAllCategories}>
            All Subject
          </button>
        </div>
      </div>

      <WelcomeBack />

      <div className="comp-subject-table-wrapper">
        <h5>All Categories</h5>
        <table className="comp-subject-table">
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Number of Exams</th>
              <th>Number of Students</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data rows */}
            <tr>
              <td>Math Exam</td>
              <td>5</td>
              <td>100</td>
              <td className="comp-subject-action-icons">
                <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
            <tr>
              <td>Science Exam</td>
              <td>6</td>
              <td>90</td>
              <td className="comp-subject-action-icons">
                <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCompetitiveSubject;
