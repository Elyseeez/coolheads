import React from 'react'; 
import john from '../../assets/john.png';
import jane from '../../assets/jane.png';
import johng from '../../assets/johng.png';


function Reviews () { 
    return (
        <div className="reviews"> 
            <div className="reviews__wrapper">
                <h1 className="reviews__title"> Reviews</h1>
                <div className="reviews__inner">
                    <div className="reviews__item">
                        <h2 className="reviews__item-title">Lorem ipsum<br/> dolor sit amet</h2>
                        <p className="reviews__item-subtitle">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Faucibus sit scelerisque viverra<br/> aliquam commodo in risus pretium<br/> morbi. Euismod sed at odio mauris<br/> urna, tempor sed.</p>
                        <div className="reviews__item-human">
                            <img src={john} alt="human" />
                            <p className="reviews__item-name">John Smith</p>
                        </div>
                    </div>
                    <div className="reviews__item">
                        <h2 className="reviews__item-title">Lorem ipsum<br/> dolor sit amet</h2>
                        <p className="reviews__item-subtitle">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Faucibus sit scelerisque viverra<br/> aliquam commodo in risus pretium<br/> morbi. Euismod sed at odio mauris<br/> urna, tempor sed.</p>
                        <div className="reviews__item-human">
                            <img src={jane} alt="human" />
                            <p className="reviews__item-name">Jane Smith</p>
                        </div>
                    </div>
                    <div className="reviews__item">
                        <h2 className="reviews__item-title">Lorem ipsum<br/> dolor sit amet</h2>
                        <p className="reviews__item-subtitle">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Faucibus sit scelerisque viverra<br/> aliquam commodo in risus pretium<br/> morbi. Euismod sed at odio mauris<br/> urna, tempor sed.</p>
                        <div className="reviews__item-human">
                            <img src={johng} alt="human" />
                            <p className="reviews__item-name">John Smith</p>
                        </div>
                    </div>
                </div>
                <button className="reviews__button">Scroll</button>
            </div>
        </div>
    )
}


export default Reviews;