import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import SkillCard from './SkillCard';

import { connect } from 'react-redux';
import { updateOccupation, updateSkillPts, updateSkill } from '../actions/updateActions';



class SkillForm extends Component {

    handleSelectChange = (event) => {
        let code = event.target.value;
        let name = this.props.occupationOptions[code].name;
        this.props.updateOccupation(code, name);
        let attr0 = this.props.occupationOptions[code].occPts[0];
        let maxAttr = this.props.attributes[attr0];
        if(this.props.occupationOptions[code].occPts[1]){
            let attr1 = this.props.occupationOptions[code].occPts[1];
            let tmpAttr = this.props.attributes[attr1];
            maxAttr = Math.max(maxAttr, tmpAttr);
        }
        let occPts = maxAttr*2 + this.props.attributes.edu*2;
        let intPts = this.props.attributes.int*2;
        this.props.updateSkillPts(occPts, intPts);
        console.log(occPts, intPts);
    }

    handleDataChange = (event) => {

        let occPts = event.target.occPts;
        console.log("occPts");
        console.log(occPts.value);

        let intPts = event.target.initPts;
        this.props.updateSkill(occPts, intPts);
    }

    render() {
        console.log(this.props);
        return (
            <form style={{ marginLeft: 5 + 'em' }}>
                <Form.Row>
                    <h3>调查员职业与技能</h3>
                </Form.Row>
                <div className="form-group">
                    <label>{'职业'}</label>
                    <select value={this.props.occupation.occupationCode} onChange={this.handleSelectChange}>
                        <option value="" disabled>{'请选择角色的职业'}</option>
                        {this.props.occupationOptions.map((option, index) => {
                            return (
                                <option key={index} value={index} name={option.name} label={option.name}>
                                    {option.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>职业技能点：&emsp; {this.props.skillPts.occPts}</div>
                <div>兴趣技能点：&emsp; {this.props.skillPts.intPts}</div>
                <br/>
                <SkillCard title={this.props.skills[0].skillName} initPts={this.props.skills[0].init}
                    occPts={this.props.skills[0].occAdd} intPts={this.props.skills[0].intAdd}
                    totalPts={this.props.skills[0].total} handleChange={this.handleDataChange} />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        attributes: state.attributes,
        occupation: {
            occupationCode: state.occupation.occupationCode,
            occupationName: state.occupation.occupationName
        },
        skillPts: state.skillPts,
        skills: state.skills,
        occupationOptions: state.occupationOptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateOccupation: (code, name) => {
            dispatch(updateOccupation(code, name))
        },
        updateSkill: (occPts, intPts) => {
            dispatch(updateSkill(occPts, intPts))
        },
        updateSkillPts: (occPts, intPts) => {
            dispatch(updateSkillPts(occPts,intPts))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SkillForm);
