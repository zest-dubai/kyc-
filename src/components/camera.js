import React, {Component, useState} from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
import ImagePreview from '../ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
import '../styles/imagePreview.css';

class Camera1 extends Component{
     
    handleTakePhotoAnimationDone = (dataUri) => {
        console.log('takePhoto');
        const {  handleChange }= this.props;
        handleChange('dataUri');
        //setDataUri(dataUri);
        this.props.nextStep();
      }

       handleCameraError = (error) => {
        console.log('handleCameraError', error);
      }

      render(){
        const isFullscreen = false;
        const { dataUri } = this.props;
        return (
            <div>
              {
                (dataUri)
                  ? <ImagePreview dataUri={dataUri}
                    isFullscreen={isFullscreen}
                  />
                  : <div className=".videoId"><Camera onTakePhotoAnimationDone = { (dataUri) => { this.handleTakePhotoAnimationDone(dataUri); } }
                   onCameraError = { (error) => { this.handleCameraError(error); } }
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
}

export default Camera1;