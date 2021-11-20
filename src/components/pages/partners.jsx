import React from 'react';
import finish from '../../assets/finish.png';
import worldpac from '../../assets/worldpac.png';
import reilly from '../../assets/reilly.png';
import audi from '../../assets/audi.png';
import bmw from '../../assets/bmw.png';
import ford from '../../assets/ford.png';
import toyota from '../../assets/toyota.png';
import chev from '../../assets/chev.png';
import interstate from '../../assets/interstate.png';


function Partners () { 
    return ( 
        <div className="partners">
            <div className="partners__wrapper">
                <div className="partners__inner">
                    <div className="partners__text">
                    <h1 className="partners__title">Our <br/> partners</h1>
                    <p className="partners__subtitle">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. </p>
                    </div>
                    <div>
                     <ul>
                        <li> <img src={finish} alt="partner" /> </li>
                        <li> <img src={worldpac} alt="partner" /> </li>
                        <li> <img src={reilly} alt="partner" /> </li>
                        <li> <img src={interstate} alt="pinteresta" /> </li>
                    </ul>
                    <button className="partners__button">Scroll</button>
                 </div>
                 <div className="partners__cars">
                     <h2 className="partners__cars-title">Cars we <br/> service</h2>
                     <p className="partners__cars-subtitle"> <strong>Lorem ipsum dolor sit amet, consectetur<br/>  adipiscing elit.</strong> Faucibus sit scelerisque viverra<br/>  aliquam commodo in risus pretium morbi.<br/>  Euismod sed at odio mauris urna, tempor sed.</p>
                      </div>
                </div>
                <div className="partners__cars-list">
                     <ul>
                        <li> <img src={audi} alt="partner" /> </li>
                        <li> <img src={bmw} alt="partner" /> </li>
                        <li> <img src={ford} alt="partner" /> </li>
                        <li> <img src={toyota} alt="pinteresta" /> </li>
                        <li> <img src={chev} alt="partner" /> </li>
                        <li> <img src={audi} alt="partner" /> </li>
                        <li> <img src={bmw} alt="partner" /> </li>
                        <li> <img src={ford} alt="pinteresta" /> </li>
                    </ul>
                 </div>
            </div>
        </div>  
    )
}


export default Partners;