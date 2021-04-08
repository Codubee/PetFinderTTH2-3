import React from 'react'

const img_URL = <ShowImage image='https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'/>

/* this function takes a prop as a parameter which will be the image url */
function ShowImage(props) {
    return <img src={props.image} alt="Logo" />;
}


ReactDOM.render(
    img_URL,
    document.getElementById('root')
  );

