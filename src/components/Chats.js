import React from 'react';
import Arrow from '../images/arrow.png';
import Attachment from '../images/attachment.png';

const Chats = () => {
   return (
      <div className="chat-content">
         <h2><b>WhatsApp for Business: Dont forget to start your free trial</b></h2>
         <div className="chats">
            <h3><b>Zarela Reed</b> <span>
               <img src={Arrow} alt='Arrow' />
               Reply this conversation
               </span></h3>
            <div className="inner-chat">
               <p>
                  Having a baby can be a nerve racking experience for new parents - not the nine months of pregnancy, I'm talking about after the infant is brought home from the hospital. It's always the same thing, by the time they have their third child they have it all figured out, but with number one it's a learning thing.
               </p>
            </div>
            <p className="chat-time">12:59pm</p>
         </div>

         <div className="chats">
            <h3><b>Collins Iheagwara</b></h3>
            <div className="inner-chat non-active">
               <p>
                  Having a baby can be a nerve racking experience for new parents - not the nine months of pregnancy, I'm talking about after the infant is brought home from the hospital. It's always the same thing, by the time they have their third child they have it all figured out, but with number one it's a learning thing.
               </p>
            </div>
            <p className="chat-time">12:59pm<i class="fas fa-check-double"></i></p>
         </div>

         <div className="chats">
            <h3><b>Collins Iheagwara</b></h3>
            <div className="inner-chat non-active">
               <p>
                  Having a baby can be a nerve racking experience for new parents - not the nine months of pregnancy, I'm talking about after the infant is brought home from the hospital. It's always the same thing, by the time they have their third child they have it all figured out, but with number one it's a learning thing.
               </p>
            </div>
            <p className="chat-time">02:00pm <ion-icon name="heart"></ion-icon></p>
         </div>

         <div className="base inner-chat">
            <p>Type a message...</p>
            <img src={Attachment} alt='attachment' />
         </div>
      </div >
   );
}

export default Chats;
