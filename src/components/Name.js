import React from 'react';
import Twitter from '../images/twitter.png';
import Attachment from '../images/attachment.png';
import Whatsapp from '../images/whatsapp.png';
import Apple from '../images/apple.png';


const Name = () => {
   return (
      <React.Fragment>
         <div className="name-content">

            <div className="content">
               <div><img src={Twitter} alt='twitter' className="social" /></div>
               <div>
                  <h4> Zarela Reed <span className="hrs">19hrs</span></h4>
                  <h5>Used Electronic Tech Equipment Not Wor...<span className="s-one">2</span></h5>
                  <p>Hellomguys, I have been unable to make us of</p>
                  <hr className="divider" />
               </div>
            </div>

            <div className="content">
               <div><i className="fab fa-facebook-messenger social"></i></div>
               <div>
                  <div className="inner-content">
                     <h4> Ava Gregoraci <span className="hrss">23hrs</span></h4>
                     <div><img src={Attachment} alt='attachment' className="inner-icon" /></div>
                  </div>
                  <h5>Used Electronic Tech Equipment Not Wor...</h5>
                  <p>Hellomguys, I have been unable to make us of</p>
                  <hr className="divider" />
               </div>
            </div>

            <div className="content">
               <div><i class="fas fa-paper-plane social"></i></div>
               <div>
                  <div className="inner-content">
                     <h4> Iruka Akuchi <span className="hrsss hrss"> Jan 1</span></h4>
                     <div><img src={Attachment} alt='attachment' className="inner-icon" /></div>
                  </div>
                  <h5>Used Electronic Tech Equipment Not Wor...</h5>
                  <p>Hellomguys, I have been unable to make us of</p>
                  <hr className="divider" />
               </div>
            </div>

            <div className="content">
               <div><img src={Whatsapp} alt='WhatsApp' className="social" /></div>
               <div>
                  <h4> Charles Davise <span className="hrs hrrs"> Jan 1 </span></h4>
                  <h5>Used Electronic Tech Equipment Not Wor... </h5>
                  <p>Hellomguys, I have been unable to make us of</p>
                  <hr className="divider" />
               </div>
            </div>

            <div className="content">
               <div><img src={Apple} alt='Apple' className="social" /></div>
               <div>
                  <h4> Kari Granleese <span className="hrs hrrs"> Jan 1 </span></h4>
                  <h5>Used Electronic Tech Equipment Not Wor... </h5>
                  <p>Hellomguys, I have been unable to make us of</p>
                  <hr className="divider" />
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}

export default Name;
