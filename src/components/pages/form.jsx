import React from 'react';


function Form () { 
    return ( 
        <div className="form"> 
        <div className="form__wrapper">
            <div className="form__text">
            <p className="form__subtitle">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Faucibus sit scelerisque viverra<br/>aliquam commodo in risus pretium<br/> morbi. Euismod sed at odio mauris<br/> urna, tempor sed.</p>
            <h1 className="form__title">Having a car <br/> problem?</h1>
            </div>
            <div className="form__inner">
            <div className="form__left">
                <div className="form__item">
                    <label className="form__name">
                        <p className="form__inner-text">Youre name</p> 
                         <input className="form__input" type="text" name="name" placeholder="John Smith"/>
                         </label>
                         </div>
                         <div className="form__item">
                         <label className="form__phone">
                        <p className="form__inner-text">Your phone number</p>
                         <input className="form__input" type="phone" name="Phone" placeholder="Youre Number" />
                         </label>
                         </div>
                         <div className="form__item">
                         <label className="form__email">
                        <p className="form__inner-text">Your email</p>
                         <input className="form__input" type="email" name="email" placeholder="Email Address" />
                         </label>
                         </div>
             </div>
             <div className="form__right">
                        <div className="form__item">
            
                         <label className="form__issue">
                        <p className="form__inner-text">The Issue</p>
                         <input className="form__input" type="text" name="issue"placeholder="Youre problem" />
                         </label>
                         </div>
                         <div className="form__item">
                         <label className="form__comment">
                        <p className="form__inner-text">Your comment</p>
                         <input className="form__input-last" type="text" name="comment" placeholder="Youre comment" />
                         </label>
                         </div>
                         <div className="form__button-d">
                        <input className="form__button" type="submit" value="SEND" />
                        </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Form;