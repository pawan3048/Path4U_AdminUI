import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SchoolChapter.css"; // Updated CSS file name

const SchoolChapter = () => {

  const [schoolClassName, setSchoolClassName] = useState();
  
  const [chapterName, setChapterName] = useState("");
  const [chapterDescription, setChapterDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Chapter Name:", chapterName);
    console.log("Chapter Description:", chapterDescription);
    // Add logic to handle form submission, e.g., API calls to save data
  };

  const handleAddNewChapter = () => {
    navigate("/school-add-chapter");
  };

  const handleViewAllChapters = () => {
    navigate("/school-all-chapter");
  };

  const handleCancel = () => {
    // Reset form or navigate to a different page
    setChapterName("");
    setChapterDescription("");
  };

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;
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
          <div id="new-chapter-content-wrapper">
            <div className="new-chapter-header">
              <h5>Add Chapters</h5>
              <div className="new-chapter-buttons">
                <button
                  className="new-chapter-add-btn"
                  onClick={handleAddNewChapter}
                >
                  + Add New Chapter
                </button>
                <button
                  className="new-chapter-view-all-btn"
                  onClick={handleViewAllChapters}
                >
                 All Chapters
                </button>
              </div>
            </div>

          

            <div className="new-chapter-form-container" id="form">
              <h4 className="new-chapter-details-header">Chapter Details</h4>
              <form onSubmit={handleSubmit} className="new-chapter-form">
                <div className="new-chapter-form-group">
                  <label className="new-chapter-label">Class Name</label>
                  <select
                    className="new-chapter-dropdown"
                    value={chapterName}
                    onChange={(e) => setChapterName(e.target.value)}
                    required
                  >
                    <option value="">-Select Class-</option>
                    {
                        schoolClassName &&
                        schoolClassName.map((classes)=>(
                          <option value={classes._id}>{classes?.className}</option>
                        ))
                      }
                  </select>
                </div>
                <div className="new-chapter-form-group">
                  <label className="new-chapter-label">Subject Name</label>
                  <select
                    className="new-chapter-dropdown"
                    value={chapterName}
                    onChange={(e) => setChapterName(e.target.value)}
                    required
                  >
                    <option value="">-Select Subject-</option>
                    {/* Add your chapter options here */}
                  </select>
                </div>
                <div className="new-chapter-form-group">
                  <label className="new-chapter-label">Chapter </label>
                  <input
                    type="text"
                    value={chapterDescription}
                    onChange={(e) => setChapterDescription(e.target.value)}
                    required
                    className="new-chapter-description-input"
                  />
                </div>

                <div className="new-chapter-form-buttons">
                  <button type="submit" className="new-chapter-submit-btn">
                    Save
                  </button>
                  <button
                    type="button"
                    className="new-chapter-cancel-btn"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
    </>
  );
};

export default SchoolChapter;
