import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import JobDetails from './JobDetails';
import AllInfo from './AllInfo';
import App from '../camera2';
import Camera1 from './camera';
import ImagePreview from '../ImagePreview';

export class StepForm extends Component {
    state = {
        step: 1,

        // step 1
        firstName: '',
        lastName: '',
        email: '',

        // step 2
        jobTitle: '',
        jobCompany: '',
        jobLocation: '',

        //step 3
        //dataUri: '',
        //setDataUri: ''
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, firstName, lastName, jobTitle, jobCompany, jobLocation } = this.state;

        if(step === 1)
            return (<PersonalInfo 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                firstName={firstName} 
                lastName={lastName}
            />);
        if(step === 2)
            return (<JobDetails 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                jobTitle={jobTitle} 
                jobCompany={jobCompany}
                jobLocation={jobLocation}
            />);
        if(step === 3)
            return (<AllInfo 
                firstName={firstName} 
                lastName={lastName}
                jobTitle={jobTitle} 
                jobCompany={jobCompany}
                jobLocation={jobLocation}
                prevStep = {this.prevStep}
                nextStep = {this.nextStep}
            />);
        if(step === 4)
            return(<App
                nextStep= {this.nextStep}
                handleChange = {this.handleChange}
               // dataUri={this.dataUri}
                //setDataUri={this.setDataUri}
            />);
        if(step === 5)
             return(<ImagePreview
                
             />);   
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h2>Step {step} of 5.</h2>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;