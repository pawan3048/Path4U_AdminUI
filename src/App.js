import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard.js';
import CommonLayout from './components/CommonLayout/CommonLayout.js';

// School Components 
import SchoolAddSubject from "./components/School/SchoolSubjects/SchoolAddSubject/AddSubject.jsx";
import SchoolAllSubject from "./components/School/SchoolSubjects/SchoolAllSubject/AllSubject.jsx";
import SchoolAddClass from './components/School/SchoolClass/SchoolNewClass/SchoolNewClass.jsx';
import SchoolEditClass from "./components/School/SchoolClass/SchoolEditClass/SchoolEditClass.jsx";
import SchoolAllClass from './components/School/SchoolClass/SchoolAllClass/SchoolAllClasses.jsx';
import SchoolChapter from "./components/School/SchoolChapters/SchoolChapter/SchoolChapter.jsx"
import SchoolAllChapter from "./components/School/SchoolChapters/SchoolAllChapter/SchoolAllChapter.jsx"

// University Components
import UniversityCourse from "./components/University/UniversityCourses/UniversityCourse/UniversityCourse.jsx";
import UniversityAllCourse from "./components/University/UniversityCourses/UniversityAllCourses/UniversityAllCourses.jsx";
import UniversitySemesterTable from "./components/University/UniversitySemesters/UniversitySemesterTable/UniversitySemesterTable.jsx";
import UniversitySemesterCreate from "./components/University/UniversitySemesters/UniversitySemesterCreate/UniversitySemesterCreate.jsx";
import UniversitySubjectCreate from "./components/University/UniversitySubject/UniversitySubjectCreate/UniversitySubjectCreate.jsx";
import UniversitySubjectTable from "./components/University/UniversitySubject/UniversitySubjectTable/UniversitySubjectTable.jsx";

//CE Components
import CEAddExamCategory from './components/CompetitiveExam/ExamCategory/AddExamCategory/AddExamCategory.jsx';
import CEAllExamCategory from './components/CompetitiveExam/ExamCategory/AllExamCaterory/AllExamCategory.jsx';
import CEAddCompetitiveSubject from './components/CompetitiveExam/CompetitiveSubject/AddCompetitiveSubject/AddCompetitiveSubject.jsx';
import CEAllCompetitiveSubject from './components/CompetitiveExam/CompetitiveSubject/AllCompetitiveSubject/AllCompetitiveSubject.jsx';
import CEAddTopics from './components/CompetitiveExam/CompetitiveTopics/AddTopic/AddTopics.jsx';
import CEAllTopics from './components/CompetitiveExam/CompetitiveTopics/AllTopics/AllTopics.jsx';

import TMSshare from './components/Student/HomeTutor/TuitionManagementSystem/TMSshare/TMSshare.jsx';
import StudentAllDetails from "./components/Student/HomeTutor/TuitionManagementSystem/StudentAllDetails/StudentAllDetails.jsx";

//Settings
import Path4uSettings from './components/Settings/Settings.js';

// Exam Notes 
import CourseManagement from "./components/Student/ExamNotes/CourseManagement/CourseManagement.jsx";
import StudentAllNotes from "./components/Student/ExamNotes/StudentAllNotes/StudentAllNotes.jsx";
// _Upload Notes
import UploadAddCollegeNotes from "./components/Student/ExamNotes/UploadNotes/UploadAddCollegeNotes.jsx";
import UploadAllCollegeNotes from "./components/Student/ExamNotes/UploadNotes/UploadAllCollegeNotes.jsx";

import UploadAddCompetitiveNotes from "./components/Student/ExamNotes/UploadNotes/UploadAddCompetitiveNotes.jsx";
import UploadCompetitiveNotes from "./components/Student/ExamNotes/UploadNotes/UploadAllCompetitiveNotes.jsx";

import UploadAllNotes from "./components/Student/ExamNotes/UploadNotes/UploadAllNotes.jsx";
import UploadSchoolNotes from "./components/Student/ExamNotes/UploadNotes/UploadSchoolNotes.jsx";
import UploadAllSchoolNotes from "./components/Student/ExamNotes/UploadNotes/AllSchoolNotes.jsx";

import HomeTutorCourseManagement from './components/Student/HomeTutor/CourseManagement/HomeTutorCourseManagement.jsx';
import HomeTutorTuitionManagementSystem from "./components/Student/HomeTutor/TuitionManagementSystem/TuitionManagementSystem.jsx";
import HomeWorkAssistanceEnquiry from "./components/Student/HomeWorkAssistance/HomeWorkAssistanceEnquiry/HomeWorkAssistanceEnquiry.jsx";

// Profiles
import StudentsProfile from "./components/StrudentsProfile/StudentsProfile.jsx";
import TeachersProfile from "./components/TeachersProfile/TeachersProfile.jsx";


function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
        <Route path={"login"} element={<Login />} />
        <Route element={<CommonLayout />}>
          <Route index element={<h1 style={{background:'#fff',margin:'20px', padding:'5px 10px',borderRadius:'10px'}}>Path 4 U Admin</h1>} />
          <Route path={"dashboard"} element={<Dashboard />} />
          <Route path={"*"} element={<h1 style={{textAlign:'center',margin:'20px',padding:'50px 0',background:'#fff', borderRadius:'10px', height:'200px'}}>404, Page Not Found</h1>} />
          {/* school routes  */}
          <Route path={"school-add-class"} element={<SchoolAddClass />} />
          <Route path={"school-edit-class/:id"} element={<SchoolEditClass />} />
          <Route path={"school-all-class"} element={<SchoolAllClass />} />
          <Route path={"school-add-subject"} element={<SchoolAddSubject />} />
          <Route path={"school-all-subject"} element={<SchoolAllSubject />} />
          <Route path={"school-add-chapter"} element={<SchoolChapter />} />
          <Route path={"school-all-chapter"} element={<SchoolAllChapter />} />
          {/* college routes  */}
          <Route path={"college-add-course"} element={<UniversityCourse />} />
          <Route path={"college-all-courses"} element={<UniversityAllCourse />} />
          <Route path={"college-subject"} element={<UniversitySubjectCreate />} />
          <Route path={"college-all-subject"} element={<UniversitySubjectTable />} />
          <Route path={"college-semester"} element={<UniversitySemesterCreate />} />
          <Route path={"college-semester-table"} element={<UniversitySemesterTable />} />
          {/* competitive exam routes  */}
          <Route path={"ce-exam-add-category"} element={<CEAddExamCategory/>} />
          <Route path={"ce-exam-all-category"} element={<CEAllExamCategory/>} />
          <Route path={"ce-add-subject"} element={<CEAddCompetitiveSubject/>} />
          <Route path={"ce-all-subject"} element={<CEAllCompetitiveSubject/>} />
          <Route path={"ce-add-topic"} element={<CEAddTopics/>} />
          <Route path={"ce-all-topic"} element={<CEAllTopics/>} />

          {/* Exam Notes -> All Notes  */}
          <Route path={"exam-all-notes"} element={<StudentAllNotes />} />
          <Route path={"exam-course-management"} element={<CourseManagement />} />
          <Route path={"exam-upload-notes"} element={<UniversitySemesterTable />} />

          <Route path={"settings"} element={<Path4uSettings />} />

          {/* Home Tutor  */}
          <Route path={"home-tutor/course-management"} element={<HomeTutorCourseManagement />} />
          <Route path={"home-tutor/tuition-management-system"} element={<HomeTutorTuitionManagementSystem />} />
          <Route path={"home-tutor/tuition-management-system/tms-share"} element={<TMSshare />} />
          <Route path={"home-tutor/tuition-management-system/home-tutor/tuition-management-system/tms-share/student-all-details"} element={<TMSshare />} />
          <Route path={"home-tutor/tuition-management-system/tms-share/student-all-details"} element={<StudentAllDetails />} />
          
          {/* upload Notes  */}
          <Route path={"upload-notes/upload-add-university-notes"} element={<UploadAddCollegeNotes/>}/>
          <Route path={"upload-notes/upload-all-university-notes"} element={<UploadAllCollegeNotes/>}/>
          <Route path={"upload-notes/upload-add-competitive-notes"} element={<UploadAddCompetitiveNotes/>}/>
          <Route path={"upload-notes/upload-all-competitive-notes"} element={<UploadCompetitiveNotes/>}/>
          <Route path={"upload-notes/upload-competitive-notes"} element={<UploadAddCompetitiveNotes/>}/>
          <Route path={"upload-notes/upload-all-notes"} element={<UploadAllNotes/>}/>
          <Route path={"upload-notes/upload-school-notes"} element={<UploadSchoolNotes/>}/>
          <Route path={"upload-notes/all-school-notes"} element={<UploadAllSchoolNotes/>}/>
          {/* ////  */}

          {/* Home Work Assistance  */}
          <Route path={"home-work-assistance/course-management"} element={<CourseManagement/>}/>
          <Route path={"home-work-assistance/enquiry"} element={<HomeWorkAssistanceEnquiry/>}/>

          <Route path={"student-profile"} element={<StudentsProfile/>}/>
          <Route path={"teacher-profile"} element={<TeachersProfile/>}/>

        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
