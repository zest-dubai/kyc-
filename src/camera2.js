import React, { useState } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
import '../src/styles/imagePreview.css';

function App () {
  const [dataUri, setDataUri] = useState('');
  
 
  function handleTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
    
    //this.props.nextStep();
  }

  function handleCameraError (error) {
    console.log('handleCameraError', error);
  }
 
  const isFullscreen = false;
  return (
    <div>
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <div className=".videoId"><Camera onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
           onCameraError = { (error) => { handleCameraError(error); } }
            isFullscreen={isFullscreen}
            idealFacingMode = {FACING_MODES.USER}
            idealResolution = {{width: 640, height: 680}}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.97}
            isMaxResolution = {true}
            isSilentMode = {false}
            isDisplayStartCameraError = {true}
            isFullscreen = {true}
            sizeFactor = {1}
          /> </div>
      }
    </div>
  );
}
 
export default App;