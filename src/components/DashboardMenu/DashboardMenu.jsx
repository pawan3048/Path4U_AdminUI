import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaAngleRight, FaRegBuilding, FaChalkboardTeacher } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { LuArrowLeftToLine, LuClock3 } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline, IoSettingsOutline, IoOptions } from "react-icons/io5";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GoFileDirectory } from "react-icons/go";
import { MdPendingActions } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { GrDocumentNotes } from "react-icons/gr";
import './DashboardMenu.css'
import { useState } from 'react';

const DashboardMenu = () => {
  const [examNotesAllLinksToggle, setExamNotesAllLinksToggle] = useState(false);
  const [homeTutorAllLinksToggle, setHomeTutorAllLinksToggle] = useState(false);
  const [homeWorkAssitAllLinksToggle, setHomeWorkAssitAllLinksToggle] = useState(false);
  function handleExamNotesToggleFun(){
    setExamNotesAllLinksToggle(!examNotesAllLinksToggle)
    // setExamNotesAllLinksToggle(false)
    setHomeTutorAllLinksToggle(false)
    setHomeWorkAssitAllLinksToggle(false)
  }
  function handleHomeTutorToggleFun(){
    setHomeTutorAllLinksToggle(!homeTutorAllLinksToggle)
    setExamNotesAllLinksToggle(false)
    // setHomeTutorAllLinksToggle(false)
    setHomeWorkAssitAllLinksToggle(false)
  }
  function handlehomeWorkAssitToggleFun(){
    setHomeWorkAssitAllLinksToggle(!homeWorkAssitAllLinksToggle)
    setExamNotesAllLinksToggle(false)
    setHomeTutorAllLinksToggle(false)
    // setHomeWorkAssitAllLinksToggle(false)
  }

  let [studentLinksVisible, setStudentLinksVisible] = useState(false);
  let [studentLinkUpIcon, setStudentLinkUpIcon] = useState(false);
  let [studentbgColorChange, setStudentbgColorChange] = useState(false);

  let [courseLinksVisible, setCourseLinksVisible] = useState(false);
  let [courseLinkUpIcon, setCourseLinkUpIcon] = useState(false);
  let [coursebgColorChange, setCoursebgColorChange] = useState(false);

  let [departmentLinksVisible, setDepartmentLinksVisible] = useState(false);
  let [departmentLinkUpIcon, setDepartmentLinkUpIcon] = useState(false);
  let [departmentbgColorChange, setDepartmentbgColorChange] = useState(false);
  
  let [feeManagementLinksVisible, setFeeManagementLinksVisible] = useState(false);
  let [feeManagementLinkUpIcon, setFeeManagementLinkUpIcon] = useState(false);
  let [feeManagementbgColorChange, setFeeManagementbgColorChange] = useState(false);
  
  // let [settingLinksVisible, setSettingLinksVisible] = useState(false);
  let handleStudLinkDrop=()=>{
    setStudentLinksVisible(!studentLinksVisible);
    setStudentLinkUpIcon(!studentLinkUpIcon);
    setStudentbgColorChange(!studentbgColorChange);

    // icon offs 
    // setStudentLinkUpIcon(false)
    setCourseLinkUpIcon(false)
    setDepartmentLinkUpIcon(false)
    setFeeManagementLinkUpIcon(false)

    // bgcolor offs 
    setCoursebgColorChange(false)
    setDepartmentbgColorChange(false)
    setFeeManagementbgColorChange(false)

    // offs
    setCourseLinksVisible(false)
    setDepartmentLinksVisible(false)
    setFeeManagementLinksVisible(false)
    setStudentbgColorChange(!studentbgColorChange);
  }
  let handleCourseLinkDrop=()=>{
    setCourseLinksVisible(!courseLinksVisible);
    setCourseLinkUpIcon(!courseLinkUpIcon);
    setCoursebgColorChange(!coursebgColorChange);
    
    // icon offs 
    setStudentLinkUpIcon(false)
    setDepartmentLinkUpIcon(false)
    setFeeManagementLinkUpIcon(false)

    // bgcolor offs 
    setStudentbgColorChange(false)
    setDepartmentbgColorChange(false)
    setFeeManagementbgColorChange(false)

    // offs 
    setStudentLinksVisible(false)
    setDepartmentLinksVisible(false)
    setFeeManagementLinksVisible(false)
  }
  let handleDepLinkDrop=()=>{
    setDepartmentLinksVisible(!departmentLinksVisible);
    setDepartmentLinkUpIcon(!departmentLinkUpIcon);
    setDepartmentbgColorChange(!departmentbgColorChange);
    
    // icon offs 
    setStudentLinkUpIcon(false)
    setCourseLinkUpIcon(false)
    setFeeManagementLinkUpIcon(false)

    // bgcolor offs 
    setStudentbgColorChange(false)
    setCoursebgColorChange(false)
    setFeeManagementbgColorChange(false)
    
    // offs 
    setStudentLinksVisible(false)
    setCourseLinksVisible(false)
    setFeeManagementLinksVisible(false)
  }
 
  let handleFeeManagLinkDrop=()=>{
    setFeeManagementLinksVisible(!feeManagementLinksVisible);
    setFeeManagementLinkUpIcon(!feeManagementLinkUpIcon);
    setFeeManagementbgColorChange(!feeManagementbgColorChange);
    
    // icon offs 
    setStudentLinkUpIcon(false)
    setCourseLinkUpIcon(false)
    setDepartmentLinkUpIcon(false)

    // bgcolor offs 
    setStudentbgColorChange(false)
    setCoursebgColorChange(false)
    setDepartmentbgColorChange(false)

    // offs 
    setStudentLinksVisible(false)
    setCourseLinksVisible(false)
    setDepartmentLinksVisible(false)
  }
  return (
    <>
        <aside className="dashboard-aside" >
            
                <ul id="aside-menu">
                <li  className='menu-link-item'><div><NavLink to={'/dashboard'}><AiOutlineHome className='menu-icon-mr' style={{marginBottom:'5px'}} />Dashboard</NavLink></div></li>
                
                    <div className="stud-dropdown-main-button">
                    
                    <li onClick={handleStudLinkDrop} id={`${studentbgColorChange?'menu-link-bgColor':null}`} className="menu-link-item"><div><NavLink><IoPersonOutline className='menu-icon-mr'/>School{ !studentLinkUpIcon? <FaChevronDown className='main-up-down-icon'/> : <FaChevronUp className='main-up-down-icon'/>}</NavLink></div></li>
                    
                    {
                      studentLinksVisible?<div className='student-dropdown'>
                      <ul className='menu-link-dropdown-ul'>
                        <li className='menu-link-dropdown-li'><Link to={'/school-add-class'}>Class</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/school-add-subject'}>Subject</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/school-add-chapter'}>Chapter</Link></li>
                      </ul>
                      <hr />
                    </div>:null
                    }

                    </div>
                    {/* student-link-end  */}

                    <div className="course-dropdown-main-btn">
                    <li onClick={handleCourseLinkDrop} id={`${coursebgColorChange?'menu-link-bgColor':null}`} className="menu-link-item course-menu-link-item"><div><Link><FaRegBuilding className='menu-icon-mr'/>University{!courseLinkUpIcon?<FaChevronDown className='main-up-down-icon'/> : <FaChevronUp className='main-up-down-icon'/>}</Link></div></li>
                    {
                      courseLinksVisible? <div className='course-dropdown'>
                      <ul className='menu-link-dropdown-ul'>
                        <li className='menu-link-dropdown-li'><Link to={'/college-add-course'} >Course</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/college-semester'} >Semester</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/college-subject'} >Subject</Link></li>
                      </ul>
                      <hr />
                    </div>:null
                    }
                    </div>


                    <div className="department-dropdown-main-btn">
                    <li onClick={handleDepLinkDrop} id={`${departmentbgColorChange?'menu-link-bgColor':null}`} className="menu-link-item department-menu-link-item">
                      <div>                        
                        <Link><LuArrowLeftToLine className='menu-icon-mr'/>Competitive Exam{!departmentLinkUpIcon?<FaChevronDown className='main-up-down-icon'/> : <FaChevronUp className='main-up-down-icon'/>}</Link>
                        </div>
                        </li>

                    {
                      departmentLinksVisible? <div className='department-dropdown'>
                      <ul className='menu-link-dropdown-ul'>
                        <li className='menu-link-dropdown-li'><Link to={"/ce-exam-add-category"}>Exam Category</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/ce-add-subject'}>Subject</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/ce-add-topic'}>Topic</Link></li>
                      </ul>
                      <hr />
                    </div>:null
                    }

                    </div>
                    {/* CE dropdown end  */}

                    {/* Student Dropdown Start */}
                    <div className="feeManagement-dropdown-main-btn">
                    <li onClick={handleFeeManagLinkDrop} className="menu-link-item">
                      <div><NavLink><LuClock3 className='menu-icon-mr'/>Student{!feeManagementLinksVisible?<FaChevronDown className='main-up-down-icon'/> : <FaChevronUp className='main-up-down-icon'/>}</NavLink>
                    </div>
                    </li>
                    {
                      feeManagementLinksVisible?<div className='feeManagement-dropdown'>
                      <ul className='menu-link-dropdown-ul'>
                        <li className='menu-link-dropdown-li' onClick={handleExamNotesToggleFun}><GrDocumentNotes className='menu-icon-mr'/><Link>Exam Notes</Link></li>
                        {
                          examNotesAllLinksToggle?<ul className='menu-exam-notes-ul'>
                          <li className="menu-exam-notes-li"><RxDotFilled/><Link to={'/exam-all-notes'}>All Notes</Link></li>
                          <li className="menu-exam-notes-li"><RxDotFilled/><Link to={'/exam-course-management'}>Course Management</Link></li>
                          <li className="menu-exam-notes-li"><RxDotFilled/><Link to={'/upload-notes/upload-all-notes'}>Upload Notes</Link></li>
                        </ul>:null
                        }
                        <li className='menu-link-dropdown-li'><IoOptions className='menu-icon-mr'/><Link to={'/management'}>Choose Career</Link></li>
                        <li className='menu-link-dropdown-li' onClick={handleHomeTutorToggleFun}><FaChalkboardTeacher className='menu-icon-mr'/><Link>Home Tutor</Link></li>
                        {
                          homeTutorAllLinksToggle?<ul className='exam-notes-home-tutor-ul'>
                          <li className="exam-notes-home-tutor-li"><RxDotFilled/><Link to={'home-tutor/course-management'}>Course Management</Link></li>
                          <li className="exam-notes-home-tutor-li"><RxDotFilled/><Link to={'home-tutor/tuition-management-system'}>Tuition Management</Link></li>
                        </ul>:null
                        }
                        <li className='menu-link-dropdown-li' onClick={handlehomeWorkAssitToggleFun}><SiHomeassistantcommunitystore className='menu-icon-mr'/><Link>Homework Assistance</Link></li>
                        {
                          homeWorkAssitAllLinksToggle?<ul className='exam-notes-home-work-assistance-ul'>
                          <li className="exam-notes-home-work-assistance-li"><RxDotFilled/><Link to={'home-work-assistance/course-management'}>Course Management</Link></li>
                          <li className="exam-notes-home-work-assistance-li"><RxDotFilled/><Link to={'home-work-assistance/enquiry'}>Enquiry</Link></li>
                        </ul>:null
                        }
                        <li className='menu-link-dropdown-li'><FaAngleRight/><Link to={'*'}>Subjective Exam</Link></li>
                        <li className='menu-link-dropdown-li'><FaAngleRight/><Link to={'/student-assignment'}>Assignment</Link></li>
                        <li className='menu-link-dropdown-li'><FaAngleRight/><Link to={'*'}>Govt. Approved Council</Link></li>
                        <li className='menu-link-dropdown-li'><FaAngleRight/><Link to={'*'}>Doubts</Link></li>
                        <li className='menu-link-dropdown-li'><FaAngleRight/><Link to={'*'}>Student Scholarship</Link></li>
                      </ul>
                      <hr />
                    </div>:null
                    }
                    </div>

                    <li className='menu-link-item'>
                      <div>
                        <Link to={"/income"}><GoFileDirectory className='menu-icon-mr'/>Teacher</Link>
                      </div>
                    </li>
                    <li className='menu-link-item'>
                      <div>
                        <Link to={"/student-profile"}><MdPendingActions className='menu-icon-mr'/>Student Profile</Link>
                      </div>
                    </li>
                    <li className='menu-link-item'><div><Link to={"/teacher-profile"}><IoSettingsOutline className='menu-icon-mr'/>Teacher Profile</Link></div></li>
                    <li className='menu-link-item'><div><Link to={"/settings"}><IoSettingsOutline className='menu-icon-mr'/>Settings</Link></div></li>
                    <li className='menu-link-item'><div><Link to={"/login"}><SlLogout className='menu-icon-mr'/>Logout</Link></div></li>
                </ul>
                
        </aside>
    {/* dashboard-wrapper  */}
    </>
  );
}

export default DashboardMenu;