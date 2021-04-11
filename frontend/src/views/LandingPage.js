import React from 'react';
import Tools from '../components/Tools.js'
import Explanation from '../components/Explanation.js'; 
import Features from '../components/Features.js'
import Team from '../components/Team.js'

function LandingPage(){
    return(
        <div>
            <Explanation/>
            <Tools/>
            <Features/>
            <Team/>
        </div>
    )
}

export default LandingPage;