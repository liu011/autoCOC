import React, { Component } from 'react';
import InformationForm from './components/InformationForm';
import AttributesForm from './components/AttributesForm';
import BackgroundForm from './components/BackgroundForm';
import SkillForm from './components/SkillForm';

class App extends Component {
    render() {
        return (
            <div>
                <InformationForm />
                <AttributesForm />
                <BackgroundForm />
                <SkillForm />
            </div>

        )
    }
}

export default App;