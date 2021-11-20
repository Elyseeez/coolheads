import React from 'react';
import Mechanic from './pages/mechanic';
import Choose from './pages/choose';
import Partners from './pages/partners';
import Repair from './pages/repair';
import Reviews from './pages/reviews';
import Form from './pages/form';


function Content () { 

    return (
        <div className="content">
            <Mechanic/>
            <Choose/>
            <Partners/>
            <Repair/>
            <Reviews/>
            <Form/>
        </div>
    )
}



export default Content;