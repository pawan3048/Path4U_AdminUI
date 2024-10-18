import React from 'react';
import './UniversitySemesterTable.css'
import { Link, useNavigate } from "react-router-dom"
import WelcomeBack from '../../../WelcomeBackMsg/WelcomeBack';

const UniversitySemesterTable = () => {

    let navigator = useNavigate();

    const handleAddSemester = () => {
        navigator('/college-semester')
      }
    
      const handleAllSemester = () => {
        navigator('/college-semester-table')
      }

  return (
    <>
        
        <div id="college-all-course-inner-main-wrapper">

        <div className="course-header-with-btns-table-page">
          <h5>Semester</h5>

          <div className="college-all-course-nav-btns-table">
            <Link to={'/college-semester'}><button className="college-add-course-add-btn-table-page" onClick={handleAddSemester}>+ Add New Semester</button></Link>
            <Link to={'/college-semester-table'}><button className="college-all-course-btn-table-page" onClick={handleAllSemester}>All Semester</button></Link>
          </div>
        </div>

        <WelcomeBack></WelcomeBack>

      {/* table */}
        <div className="headertable">
        <h5>All Semster</h5>
          <table>
            <thead>
              <tr>
                <th>Semester Name</th>
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

export default UniversitySemesterTable;