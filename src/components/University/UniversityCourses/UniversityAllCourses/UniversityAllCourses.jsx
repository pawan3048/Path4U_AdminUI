import React from 'react';
import './UniversityAllCourses.css'
import { Link, useNavigate } from "react-router-dom"
import WelcomeBack from '../../../WelcomeBackMsg/WelcomeBack';

const UniversityAllCourses = () => {

    let navigator = useNavigate();

    const handleAddCourseNav = () => {
        navigator('/college-add-course')
      }
    
      const handleAllCourseNav = () => {
        navigator('/college-all-courses')
      }

  return (
    <>
        
        <div id="college-all-course-inner-main-wrapper">

        <div className="course-header-with-btns-table-page">
          <h5>Course</h5>

          <div className="college-all-course-nav-btns-table">
            <Link to={'/college-add-course'}><button className="college-add-course-add-btn-table-page" onClick={handleAddCourseNav}>+ Add New Course</button></Link>
            <Link to={'/college-all-courses'}><button className="college-all-course-btn-table-page" onClick={handleAllCourseNav}>All Courses</button></Link>
          </div>
        </div>

        <WelcomeBack></WelcomeBack>

      {/* table */}
        <div className="college-all-courses-table">
        <h5>All Courses</h5>
          <table>
            <thead>
              <tr>
                <th>Course Name</th>
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

export default UniversityAllCourses;
