import React from 'react';
import mech from '../../assets/mech.png';
import collision from '../../assets/collision.png';
import hybrid from '../../assets/hybrid.png';

function Repair () {
    return ( 
        <div className="repair">
            <div className="repair__wrapper">
                <div className="repair__inner">
                <div className="repair__item">
            <div className="repair__box"> 
                 <img src={mech} alt="Написание программного обеспечения" width="386"/>
                    <div className="repair__overlay">
                    <p className="repair__text">Mechanical <br/> Repair</p>
                    <button className="repair__btn">Learn More</button>
                    </div>
                   </div>
                   </div>
                   <div className="repair__item">
            <div className="repair__box"> 
                 <img src={collision} alt="Написание программного обеспечения" width="386"/>
                 <div className="repair__overlay">
                    <p className="repair__text">Body/<br/>Collision<br/> Repair</p>
                    <button className="repair__btn">Learn More</button>
                    </div>
                   </div>
                   </div>
               
                </div>
                <div className="repair__item">
            <div className="repair__box"> 
                 <img src={hybrid} alt="Написание программного обеспечения" width="386" height="584"/>
                    <div className="repair__overlay">
                    <p className="repair__text">Hybrid Repair</p>
                    <button className="repair__btn">Learn More</button>
                    </div>
                   </div>
                   </div>
                <div className="repair__title-block">
                    <h1 className="repair__title">What <br/> we do?</h1>
                </div>
                
            </div>
            <div className="repair__lower-text">
                    <h2 className="repair__lower-title">we can do more</h2>
                    <button className="repair__lower-btn">all services</button>
                </div>
        </div>
    ) 

}


export default Repair;