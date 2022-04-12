import React from 'react';
import people from '../../assets/people.png';
import thor from '../../assets/Thor.png';
import './header.css';
import Video from '../../assets/testv.mp4';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">

        <img  src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image  videoOut">
    <img   className='imageIn' src={thor} />
    <video className='videoIn' src={Video} muted loop autoPlay="true" />
    </div>
  </div>
);

export default Header;
