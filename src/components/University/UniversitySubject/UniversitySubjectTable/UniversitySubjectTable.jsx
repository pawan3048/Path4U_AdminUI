import React from 'react';
import './UniversitySubjectTable.css'
import { Link, useNavigate } from "react-router-dom"
import WelcomeBack from '../../../WelcomeBackMsg/WelcomeBack';

const UniversitySubjectTable = () => {

    let navigator = useNavigate();

    const handleAddSubject = () => {
        navigator('/college-subject')
      }
    
      const handleAllSubject = () => {
        navigator('/college-all-subject')
      }

  return (
    <>
        
        <div id="college-all-course-inner-main-wrapper">

        <div className="course-header-with-btns-table-page">
          <h5>All Subject</h5>

          <div className="college-all-course-nav-btns-table">
            <Link to={'/college-subject'}><button className="college-add-course-add-btn-table-page" onClick={handleAddSubject}>+ Add New Subject</button></Link>
            <Link to={'/college-all-subject'}><button className="college-all-course-btn-table-page" onClick={handleAllSubject}>All Subject</button></Link>
          </div>
        </div>

        <WelcomeBack></WelcomeBack>

      {/* table */}
        <div className="headertable">
        <h5>All College Subject</h5>
          <table>
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Number of Student</th>
                <th>Number of subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Scrum Master</td>
                <td>6</td>
                <td>7</td>
                <td><i class="fa-solid fa-file-pen"></i><i class="fa-solid fa-trash-can"></i></td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>6</td>
                <td>7</td>
                <td><i class="fa-solid fa-file-pen"></i><i class="fa-solid fa-trash-can"></i></td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>6</td>
                <td>7</td>
                <td><i class="fa-solid fa-file-pen"></i><i class="fa-solid fa-trash-can"></i></td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>6</td>
                <td>7</td>
                <td><i class="fa-solid fa-file-pen"></i><i class="fa-solid fa-trash-can"></i></td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>6</td>
                <td>7</td>
                <td><i class="fa-solid fa-file-pen"></i><i class="fa-solid fa-trash-can"></i></td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>6</td>
                <td>7</td>
                <td><i class="fa-solid fa-file-pen"></i><i class="fa-solid fa-trash-can"></i></td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>6</td>
                <td>7</td>
                <td><i class="fa-solid fa-file-pen"></i><i class="fa-solid fa-trash-can"></i></td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>6</td>
                <td>7</td>
                <td><i class="fa-solid fa-file-pen"></i><i class="fa-solid fa-trash-can"></i></td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>6</td>
                <td>7</td>
                <td><i class="fa-solid fa-file-pen"></i><i class="fa-solid fa-trash-can"></i></td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>6</td>
                <td>7</td>
                <td><i class="fa-solid fa-file-pen"></i><i class="fa-solid fa-trash-can"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* headertable  */}
        </div>
        {/* college-all-course-inner-main-wrapper  */}

    </>
  );
}

export default UniversitySubjectTable;