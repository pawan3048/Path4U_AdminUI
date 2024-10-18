import React from "react";
import WelcomeBack from "../../../WelcomeBackMsg/WelcomeBack.jsx"; // Ensure correct import paths
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import "./AllSchoolNotes.css"; // Import the CSS file
import { BiArrowBack } from "react-icons/bi";

const AllSchoolNotes = () => {
  const navigate = useNavigate();

  const handleAddNewNote = () => {
    navigate("/upload-notes/upload-school-notes");
  };

  const handleViewAllNotes = () => {
    navigate("/upload-notes/all-school-notes");
  };
  const handleGoBack = () => {
    navigate("/upload-notes/upload-all-notes");
  };

  return (
    <div id="allschoolnotes-inner-wrapper">
      <BiArrowBack
        onClick={handleGoBack}
        className="left-arrow-icon mt-3"
        style={{
          cursor: "pointer",
          marginLeft: "10px",
          fontSize: "25px",
          color: "#000", // Customize the color as needed
        }}
      />

      <div className="allschoolnotes-header-div">
        <h5>All School Notes</h5>
        <div className="allschoolnotes-header-btns">
          <button className="add-note-btn" onClick={handleAddNewNote}>
            + Upload Notes
          </button>
          <button className="all-notes-btn" onClick={handleViewAllNotes}>
            All Notes
          </button>
        </div>
      </div>

      <WelcomeBack />

      <div className="allschoolnotes-table-container">
        <h5>All School Notes</h5>
        <table className="allschoolnotes-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Number of Subjects</th>
              <th>Number of Students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data rows */}
            <tr>
              <td>Mathematics</td>
              <td>6</td>
              <td>7</td>
              <td className="table-action-icons">
                <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
            <tr>
              <td>Science</td>
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

export default AllSchoolNotes;
