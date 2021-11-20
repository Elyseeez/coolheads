import React from 'react';
import Mech from '../../assets/keys.png'

function Mechanic () {
    return (
        <div className='mechanic'>
            <div className="mechanic__wrapper">
                <div className="mechanic__text">
                    <h1 className="mechanic__title">Lorem ipsum <br/> dolor sit amet,<br/> consectetur elit.</h1>
                    <p className="mechanic__subtitle">Lorem ipsum dolor sit amet</p>
                    <div className="mechanic__lower-text">Lorem ipsum dolor sit amet, consectetur <br/>  adipiscing elit. Faucibus sit scelerisque viverra<br/>  aliquam commodo in risus pretium morbi.<br/>  Euismod sed at odio mauris urna, tempor sed.</div>
                    <button className="mechanic__button">CALL TO ACTION</button>
                </div>
                <div className="mechanic__inner">
                    <div className="mechanic__inner-text">
                    <h2 className="mechanic__inner-title">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</h2>
                    <p className="mechanic__inner-subtitle">Faucibus sit scelerisque viverra<br/> aliquam comodo in pretium morbi.</p>
                    </div>
                    <img src={Mech} alt="man" />
                </div>
            </div>
        </div>
    )
}


export default Mechanic;