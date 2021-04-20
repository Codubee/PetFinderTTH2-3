import React from 'react';
import Tools from '../components/Tools.js'
import Explanation from '../components/Explanation.js'; 
import Features from '../components/Features.js'
import Team from '../components/Team.js'
import DisplayMatches from '../components/DisplayMatches.js';

function LandingPage(){
    return(
        <div>
            <Explanation/>
            <Tools/>
            <Features/>
            <Team/>
            <DisplayMatches/>
        </div>
    )
}

export default LandingPage;