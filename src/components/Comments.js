import React from 'react';
import Profile from '../images/profile.png';

const Comments = () => {
   return (
      <div className="inner-comments">
         <h3><b>Comments</b></h3>
         <div className="comment">
            <img src={Profile} alt='profile pic' />
            <div>
               <p>Having a baby can be a nerve racking experience for new parents - not the nine months of pregnancy.</p>
            </div>
         </div>

         <div className="comment">
            <img src={Profile} alt='profile pic' />
            <div>
               <p>Having a baby can be a nerve racking experience for new parents - not the nine months of pregnancy.</p>
            </div>
         </div>

         <div className="comment">
            <img src={Profile} alt='profile pic' />
            <div>
               <p>Having a baby can be a nerve racking experience for new parents - not the nine months of pregnancy.</p>
            </div>
         </div>

         <div className="comment">
            <img src={Profile} alt='profile pic' />
            <div>
               <p>Having a baby can be a nerve racking experience for new parents - not the nine months of pregnancy.</p>
            </div>
         </div>

         <div className="comment">
            <img src={Profile} alt='profile pic' />
            <div>
               <p>Having a baby can be a nerve racking experience for new parents - not the nine months of pregnancy.</p>
            </div>
         </div>

         <div className="type-comment">
            <img src={Profile} alt='profile pic' />
            <div>
               <p>Write your comment... <i class="fas fa-paper-plane"></i></p>
            </div>
         </div>
      </div>
   );
}

export default Comments;
