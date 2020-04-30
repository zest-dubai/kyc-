import React from 'react';
import PropTypes from 'prop-types';
import App from './camera2';

import './styles/imagePreview.css';


export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? 'fullscreen' : '';

  let val=false;
   function click() {
    //this.val= true;
    sessionStorage.setItem("img", JSON.stringify(dataUri));
    console.log('Stored');
  };

  function retake(){
      console.log('retake');
      return(
      <div>
        <App />
        </div>
      );
  };
  

  return (
    <div className={'demo-image-preview ' + classNameFullscreen}>
      <img src={dataUri} />
      <button type="button" onClick={click}>Submit</button>
      <button type="button" onClick={retake}>Retake</button>
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;