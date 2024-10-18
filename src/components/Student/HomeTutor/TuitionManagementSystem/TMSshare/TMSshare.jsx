import React from 'react';
import { PiPhoneCallLight } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";
import { CiMail,CiLocationOn } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs";
// import { TbCalendarPlus } from "react-icons/tb";
// import { MdOutlineNoteAdd } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineClipboard } from "react-icons/hi2";
// import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";

// import { FiServer } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './TMSshare.css';

const TMSshare = () => {
  return (
    <>
      <div id="tms-share-main-container">

      <div className="home-tutor-teacher-profile-container">

        <div className="home-tutor-share-teacher-image-box">
        <img src={require('../../../../../Images/student-profile-img.png')} alt="student-img" />
        </div>

        <div className="home-tutor-teacher-details-box">
        <p className='student-name-b'>
          <b>Himanshu Sharma <span className='tuition-per-month-fee-amount'>
            <img src={require('../../../../../Images/rupee-icon.png')} alt="rupees-icon" /> 2000/m<BiPencil style={{fontSize:'14px', marginLeft:'5px'}}/>
            </span>
          </b>
          <br />
          <span style={{color:'#404040', fontSize:'18px'}}><CiStar/><CiStar/><CiStar/><CiStar/><CiStar/></span>
        </p>
        <Link to={'./student-all-details'}><p className='share-teacher-profile'><HiOutlineUsers className='icon-margin'/>Profile</p></Link>
        {/* <p className='tuition-joining-date' style={{position:'absolute', top:'10px', right:'20px'}}><CiCalendar className='icon-margin' style={{fontSize:'20px'}}/>12 Oct 2024</p> */}
        <p className='student-phone-and-email'><span className='student-contact'><PiPhoneCallLight className='icon-margin'/>+91 6358021496</span><span className="student-email"><CiMail className='icon-margin'/>info@appminglemedia.com</span></p>
        <p className='student-address'><CiLocationOn className='icon-margin'/> 3rd floor, G-13, Noida Sector 6</p>
        <p className='teacher-accept-class-checks-boxes'>
          <div><HiOutlineClipboard style={{marginRight:'5px'}}/>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
        </p>
        <p className="teacher-accept-subjects-boxes">
          <div className="subject-checkbox"><IoBookOutline />Maths</div>
          <div className="subject-checkbox">Physics <input type="checkbox" /></div>
          <div className="subject-checkbox">Social Science <input type="checkbox" /></div>
          <div className="subject-checkbox">Art <input type="checkbox" /></div>
          <div className="subject-checkbox">English <input type="checkbox" /></div>
        </p>
        <p className='share-rejected-accepted-requests-and-forwards'><span className='rejected'>rejected&nbsp;12<BsInfoCircle className='info-icon' /></span><span className="accepted">accepted&nbsp;12<BsInfoCircle className='info-icon' /></span></p>
        </div>

      </div>

      <div className="home-tutor-teacher-profile-container">

        <div className="home-tutor-share-teacher-image-box">
        <img src={require('../../../../../Images/student-profile-img.png')} alt="student-img" />
        </div>

        <div className="home-tutor-teacher-details-box">
        <p className='student-name-b'>
          <b>Himanshu Sharma <span className='tuition-per-month-fee-amount'>
            <img src={require('../../../../../Images/rupee-icon.png')} alt="rupees-icon" /> 2000/m<BiPencil style={{fontSize:'14px', marginLeft:'5px'}}/>
            </span>
          </b>
          <br />
          <span style={{color:'#404040', fontSize:'18px'}}><CiStar/><CiStar/><CiStar/><CiStar/><CiStar/></span>
        </p>
        <Link to={'./student-all-details'}><p className='share-teacher-profile'><HiOutlineUsers className='icon-margin'/>Profile</p></Link>
        {/* <p className='tuition-joining-date' style={{position:'absolute', top:'10px', right:'20px'}}><CiCalendar className='icon-margin' style={{fontSize:'20px'}}/>12 Oct 2024</p> */}
        <p className='student-phone-and-email'><span className='student-contact'><PiPhoneCallLight className='icon-margin'/>+91 6358021496</span><span className="student-email"><CiMail className='icon-margin'/>info@appminglemedia.com</span></p>
        <p className='student-address'><CiLocationOn className='icon-margin'/> 3rd floor, G-13, Noida Sector 6</p>
        <p className='teacher-accept-class-checks-boxes'>
          <div><HiOutlineClipboard style={{marginRight:'5px'}}/>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
        </p>
        <p className="teacher-accept-subjects-boxes">
          <div className="subject-checkbox"><IoBookOutline />Maths</div>
          <div className="subject-checkbox">Physics <input type="checkbox" /></div>
          <div className="subject-checkbox">Social Science <input type="checkbox" /></div>
          <div className="subject-checkbox">Art <input type="checkbox" /></div>
          <div className="subject-checkbox">English <input type="checkbox" /></div>
        </p>
        <p className='share-rejected-accepted-requests-and-forwards'><span className='rejected'>rejected&nbsp;12<BsInfoCircle className='info-icon' /></span><span className="accepted">accepted&nbsp;12<BsInfoCircle className='info-icon' /></span></p>
        </div>

      </div>

      <div className="home-tutor-teacher-profile-container">

        <div className="home-tutor-share-teacher-image-box">
        <img src={require('../../../../../Images/student-profile-img.png')} alt="student-img" />
        </div>

        <div className="home-tutor-teacher-details-box">
        <p className='student-name-b'>
          <b>Himanshu Sharma <span className='tuition-per-month-fee-amount'>
            <img src={require('../../../../../Images/rupee-icon.png')} alt="rupees-icon" /> 2000/m<BiPencil style={{fontSize:'14px', marginLeft:'5px'}}/>
            </span>
          </b>
          <br />
          <span style={{color:'#404040', fontSize:'18px'}}><CiStar/><CiStar/><CiStar/><CiStar/><CiStar/></span>
        </p>
        <Link to={'./student-all-details'}><p className='share-teacher-profile'><HiOutlineUsers className='icon-margin'/>Profile</p></Link>
        {/* <p className='tuition-joining-date' style={{position:'absolute', top:'10px', right:'20px'}}><CiCalendar className='icon-margin' style={{fontSize:'20px'}}/>12 Oct 2024</p> */}
        <p className='student-phone-and-email'><span className='student-contact'><PiPhoneCallLight className='icon-margin'/>+91 6358021496</span><span className="student-email"><CiMail className='icon-margin'/>info@appminglemedia.com</span></p>
        <p className='student-address'><CiLocationOn className='icon-margin'/> 3rd floor, G-13, Noida Sector 6</p>
        <p className='teacher-accept-class-checks-boxes'>
          <div><HiOutlineClipboard style={{marginRight:'5px'}}/>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
        </p>
        <p className="teacher-accept-subjects-boxes">
          <div className="subject-checkbox"><IoBookOutline />Maths</div>
          <div className="subject-checkbox">Physics <input type="checkbox" /></div>
          <div className="subject-checkbox">Social Science <input type="checkbox" /></div>
          <div className="subject-checkbox">Art <input type="checkbox" /></div>
          <div className="subject-checkbox">English <input type="checkbox" /></div>
        </p>
        <p className='share-rejected-accepted-requests-and-forwards'><span className='rejected'>rejected&nbsp;12<BsInfoCircle className='info-icon' /></span><span className="accepted">accepted&nbsp;12<BsInfoCircle className='info-icon' /></span></p>
        </div>

      </div>

      <div className="home-tutor-teacher-profile-container">

        <div className="home-tutor-share-teacher-image-box">
        <img src={require('../../../../../Images/student-profile-img.png')} alt="student-img" />
        </div>

        <div className="home-tutor-teacher-details-box">
        <p className='student-name-b'>
          <b>Himanshu Sharma <span className='tuition-per-month-fee-amount'>
            <img src={require('../../../../../Images/rupee-icon.png')} alt="rupees-icon" /> 2000/m<BiPencil style={{fontSize:'14px', marginLeft:'5px'}}/>
            </span>
          </b>
          <br />
          <span style={{color:'#404040', fontSize:'18px'}}><CiStar/><CiStar/><CiStar/><CiStar/><CiStar/></span>
        </p>
        <Link to={'./student-all-details'}><p className='share-teacher-profile'><HiOutlineUsers className='icon-margin'/>Profile</p></Link>
        {/* <p className='tuition-joining-date' style={{position:'absolute', top:'10px', right:'20px'}}><CiCalendar className='icon-margin' style={{fontSize:'20px'}}/>12 Oct 2024</p> */}
        <p className='student-phone-and-email'><span className='student-contact'><PiPhoneCallLight className='icon-margin'/>+91 6358021496</span><span className="student-email"><CiMail className='icon-margin'/>info@appminglemedia.com</span></p>
        <p className='student-address'><CiLocationOn className='icon-margin'/> 3rd floor, G-13, Noida Sector 6</p>
        <p className='teacher-accept-class-checks-boxes'>
          <div><HiOutlineClipboard style={{marginRight:'5px'}}/>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
          <div>Class 10th <input type="checkbox" /></div>
        </p>
        <p className="teacher-accept-subjects-boxes">
          <div className="subject-checkbox"><IoBookOutline />Maths</div>
          <div className="subject-checkbox">Physics <input type="checkbox" /></div>
          <div className="subject-checkbox">Social Science <input type="checkbox" /></div>
          <div className="subject-checkbox">Art <input type="checkbox" /></div>
          <div className="subject-checkbox">English <input type="checkbox" /></div>
        </p>
        <p className='share-rejected-accepted-requests-and-forwards'><span className='rejected'>rejected&nbsp;12<BsInfoCircle className='info-icon' /></span><span className="accepted">accepted&nbsp;12<BsInfoCircle className='info-icon' /></span></p>
        </div>

      </div>

      </div>
    </>
  );
}

export default TMSshare;
