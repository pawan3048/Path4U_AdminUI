import React from "react";
import WelcomeBack from "../../../WelcomeBackMsg/WelcomeBack.jsx"; // Ensure correct import paths
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import "./AllSubject.css"; // Import the CSS file

const AllSubject = () => {
  const navigate = useNavigate();
  
  const handleAddNewClass = () => {
    navigate("/school-add-subject");
  };

  const handleViewAllClasses = () => {
    navigate("/school-all-subject");
  };

  return (
        <div id="classes-inner-wrapper">
          <div className="classes-header-div">
            <h5>All Subjects</h5>
            <div className="classes-header-btns">
              <button className="add-class-btn" onClick={handleAddNewClass}>
                + Add New Subject
              </button>
              <button className="all-classes-btn" onClick={handleViewAllClasses}>
                All Subject
              </button>
            </div>
          </div>

          <WelcomeBack />

          <div className="classes-table-container">
            <h5>All Subject</h5>
            <table className="classes-table">
              <thead>
                <tr>
                  <th> Class</th>
                  <th>Number of Subject</th>
                  <th>Number of Students</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample data rows */}
                <tr>
                  <td>Scrum Master</td>
                  <td>6</td>
                  <td>7</td>
                  <td className="table-action-icons">
                    <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                    <i className="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
                <tr>
                  <td>Scrum Master</td>
                  <td>6</td>
                  <td>7</td>
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

export default AllSubject;
