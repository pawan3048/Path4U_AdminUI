import React from "react";
import WelcomeBack from "../../../WelcomeBackMsg/WelcomeBack.jsx"; // Adjust path based on your structure

import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import "./AllExamCategory.css"; // Updated CSS file import

const AllExamCategory = () => {
  const navigate = useNavigate();
  
  const handleAddNewCategory = () => {
    navigate("/ce-exam-add-category");
  };

  const handleViewAllCategories = () => {
    navigate("/ce-exam-all-category");
  };

  return (
    <div id="all-exam-category-inner-wrapper">
      <div className="all-exam-category-header-div">
        <h5>Exam Categories</h5>
        <div className="all-exam-category-header-btns">
          <button className="add-category-btn" onClick={handleAddNewCategory}>
            + Add New Exam
          </button>
          <button className="all-categories-btn" onClick={handleViewAllCategories}>
            All Exam
          </button>
        </div>
      </div>

      <WelcomeBack />

      <div className="all-exam-category-table-container">
        <h5>All Categories</h5>
        <table className="all-exam-category-table">
          <thead>
            <tr>
              <th>Name of Subject</th>
              <th>Number of Exams</th>
              <th>Number of Students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data rows */}
            <tr>
              <td>Math Exam</td>
              <td>5</td>
              <td>100</td>
              <td className="table-action-icons">
                <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
            <tr>
              <td>Science Exam</td>
              <td>6</td>
              <td>90</td>
              <td className="table-action-icons">
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

export default AllExamCategory;
