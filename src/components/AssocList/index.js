import './style.scss';
// import React from 'react';
import { Segment } from 'semantic-ui-react';
import img1 from 'src/assets/img/carousel1.jpg';
import img2 from 'src/assets/img/carousel2.jpg';
import img3 from 'src/assets/img/carousel3.jpg';

const AssocList = () => (

  <Segment>
    <ul className="list">
      <li className="list__item">
        <img className="list__item-logo" src={img1} alt="" />
        <div className="list__item-infos">
          <h3 className="list__item-title">Première Assoc</h3>
          <p className="list__item-description">Descriptif Première assoc bla blabla bla blablabla blabla bla blablabla bla blablabla bla blablabla bla blablabla bla blablabla bla blablabla bla blabla blabla blablabla</p>
        </div>
      </li>
      <li className="list__item">
        <img className="list__item-logo" src={img2} alt="" />
        <div className="list__item-infos">
          <h3 className="list__item-title">Première Assoc</h3>
          <p className="list__item-description">Descriptif Première assoc bla blabla bla blablabla bblabla bla blablabla bla blablabla bla blablabla bla blablabla bla blablabla bla blablabla bla blablabla bla blablabla bla blala blabla blablabla</p>
        </div>
      </li>
      <li className="list__item">
        <img className="list__item-logo" src={img3} alt="" />
        <div className="list__item-infos">
          <h3 className="list__item-title">Première Assoc</h3>
          <p className="list__item-description">Descriptif Première assoc bla blabla bla blablablablabla bla blablabla bla blablabla bla blablabla bla blablabla bla blablabla bla bla bla blabla blablabla</p>
        </div>
      </li>
    </ul>
  </Segment>

);

export default AssocList;
