import React from 'react';
import Explanation from '../components/Explanation.js'; 
import Features from '../components/Features.js'
import Team from '../components/Team.js'

function LandingPage(){
    return(
        <div>
            <Explanation/>
            <Features/>
            <Team/>
        </div>
    )
}

export default LandingPage;