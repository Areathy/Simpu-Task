import React from 'react';
import Analtyics from '../images/analytics.png';
import Happy from '../images/happy.png';
import Schedule from '../images/schedule.png';
import Comment from '../images/comment.png';
import Time from '../images/time.png';
import Bin from '../images/bin.png';
import File from '../images/file.png';
import More from '../images/more.png';
import Profile from '../images/profile.png';
import Name from './Name';
import Chats from './Chats';
import Comments from './Comments';

const Body = () => {
   return (
      <React.Fragment>
         <div className="body-div">
            <div className="side-div">
               <img src={Analtyics} alt='Analtyics' className="side-image analytics" /><br />
               <img src={Happy} alt='Happy' className="side-image" /><br />
               <img src={Schedule} alt='Scheduleo' className="side-image" /><br />
               <img src={Comment} alt='Comment' className="side-image" />
            </div>

            <div className="container">
               <div className="title">
                  <p>Conversations</p>
               </div>

               <div>
                  <div className="heading">
                     <div className="name-heading">
                        <ul>
                           <li><span className="active">Open</span></li>
                           <li>Archived</li>
                           <li>Snoozed</li>
                           <li>Trash</li>
                        </ul>
                     </div>

                     <div className="icon-heading">
                        <img src={Time} alt='time' className="heading-image" />
                        <img src={Bin} alt='bin' className="heading-image" />
                        <img src={File} alt='file' className="heading-image" />
                        <img src={More} alt='more' className="heading-image" />

                        <div className="right-header">
                           <div className="heading-pics">
                              <img src={Profile} alt='profile pic' className="profile-pic p-one" />
                              <img src={Profile} alt='profile pic' className="profile-pic p-two" />
                              <img src={Profile} alt='profile pic' className="profile-pic p-three" />
                           </div>
                           <div className="assign">Assign</div>
                           <i className="fas fa-user-circle"></i>
                        </div>
                     </div>
                  </div>
                  <div className="conversation">
                     <div className="names">
                        <Name />
                     </div>

                     <div className="chat">
                        <Chats />
                     </div>

                     <div className="comments">
                        <Comments />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}

export default Body;
