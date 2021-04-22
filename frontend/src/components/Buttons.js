import React, {Component} from 'react'
import YesButton from './YesButton.js'
import NoButton from './NoButton.js'

class Buttons extends Component{
    render(){
        return(
            <>
            <YesButton/>
            <NoButton/>
            </>
        )
    }
}

export default Buttons