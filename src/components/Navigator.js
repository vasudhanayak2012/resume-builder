import React from 'react';
import Builder from './Builder';
import Home from './Home';
import {Route, Routes} from 'react-router-dom';
import Contact from './Contact';
import TopRatedResume from './TopRatedResume';
import FinalResume from './FinalResume';



const Navigator = () => {

    return(
        <Routes>
            <Route path='/' exact = {true} element={<Home/>}/>
            <Route path='/resumebuilder' element={<Builder/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
            <Route path='/top-rated-resume' element={<TopRatedResume/>}/>
            <Route path='/final-resume' element={<FinalResume/>}/>
        </Routes>
    )
}

export default Navigator;