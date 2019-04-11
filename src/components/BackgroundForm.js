import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import Textarea from './Textarea';

import { connect } from 'react-redux';
import { updateBackground } from '../actions/updateActions';



class BackgroundForm extends Component {

  handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.props.updateBackground(name, value);
  }
  

  render() {
    return (
      <Form style={{ marginLeft: 5 + 'em' }}>
        <Form.Row>
          <h3>背景故事</h3>
        </Form.Row>
        <Form.Row>
          <Textarea title={'背景描述'} name={'personalDescription'} value={this.props.background.personalDescription}
            rows={4} cols={30} placeholder={'请输入角色的详细背景描述'} handleChange={this.handleInputChange} />
          <Textarea title={'思念与信念'} name={'ideologyOrBeliefs'} value={this.props.background.ideologyOrBeliefs}
            rows={4} cols={30} placeholder={'请输入角色的思念与信念'} handleChange={this.handleInputChange} />
        </Form.Row>
        <Form.Row>
          <Textarea title={'重要之人'} name={'significantPeople'} value={this.props.background.significantPeople}
            rows={4} cols={30} placeholder={'请输入角色的重要之人'} handleChange={this.handleInputChange} />
          <Textarea title={'意义非凡之地'} name={'meaningfulLocations'} value={this.props.background.meaningfulLocations}
            rows={4} cols={30} placeholder={'请输入角色的意义非凡之地'} handleChange={this.handleInputChange} />
        </Form.Row>
        <Form.Row>
          <Textarea title={'宝贵之物'} name={'treasuredPossessions'} value={this.props.background.treasuredPossessions}
            rows={4} cols={30} placeholder={'请输入角色的宝贵之物'} handleChange={this.handleInputChange} />
          <Textarea title={'特点'} name={'traits'} value={this.props.background.traits}
            rows={4} cols={30} placeholder={'请输入角色的特点'} handleChange={this.handleInputChange} />
        </Form.Row>
        <Form.Row>
          <Textarea title={'创伤和疤痕'} name={'injuriesAndScars'} value={this.props.background.injuriesAndScars}
            rows={4} cols={30} placeholder={'请输入角色的创伤和疤痕'} handleChange={this.handleInputChange} />
          <Textarea title={'恐惧和狂热'} name={'phobiasAndManias'} value={this.props.background.phobiasAndManias}
            rows={4} cols={30} placeholder={'请输入角色的恐惧和狂热'} handleChange={this.handleInputChange} />
        </Form.Row>
        <Form.Row>
          <Textarea title={'神秘卷轴、咒文和古文物'} name={'arcaneTomesSpellsAndArtifacts'} value={this.props.background.arcaneTomesSpellsAndArtifacts}
            rows={4} cols={30} placeholder={'若没有请填写“无”'} handleChange={this.handleInputChange} />
          <Textarea title={'第三类接触'} name={'encountersWithStrangeEntities'} value={this.props.background.encountersWithStrangeEntities}
            rows={4} cols={30} placeholder={'若没有请填写“无”'} handleChange={this.handleInputChange} />
        </Form.Row>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    background: {
        personalDescription: state.background.personalDescription,
        ideologyOrBeliefs: state.background.ideologyOrBeliefs,
        significantPeople: state.background.significantPeople,
        meaningfulLocations: state.background.meaningfulLocations,
        treasuredPossessions: state.background.treasuredPossessions,
        traits: state.background.traits,
        injuriesAndScars: state.background.injuriesAndScars,
        phobiasAndManias: state.background.phobiasAndManias,
        arcaneTomesSpellsAndArtifacts: state.background.arcaneTomesSpellsAndArtifacts,
        encountersWithStrangeEntities: state.background.encountersWithStrangeEntities
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBackground: (name, value) => {
      dispatch(updateBackground(name, value))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BackgroundForm);