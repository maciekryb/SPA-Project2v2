import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';

const Header = () => {
  // const images = [img1, img2, img3];
  // const index = Math.floor(Math.random() * 3);
  // const img = images[index];
  // <img src={img} atl='header' />

  return (
    <>
      <Switch>
        <Route path='/' exact render={() => <img src={img1} alt='city' />} />
        <Route path='/products' render={() => <img src={img2} alt='city' />} />
        <Route path='/contact' render={() => <img src={img3} alt='city' />} />
        <Route path='/admin' render={() => <img src={img3} alt='city' />} />
        <Route render={() => <img src={img1} alt='city' />} />
      </Switch>
    </>
  );
};

export default Header;
