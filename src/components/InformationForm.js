import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import Input from './Input';
import Select from './Select';

import { connect } from 'react-redux';
import { updateInformation } from '../actions/updateActions';



class InformationForm extends Component {

  handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.props.updateInformation(name, value);
  }

  render() {
    return (
      <form style = {{ marginLeft: 5 + 'em' }}>
        <Form.Row>
        <h3>调查员信息</h3>
        </Form.Row>
        <Form.Row>
          <Input type={'text'} title={'姓名'} name={'fakeName'} value={this.props.information.fakeName}
            placeholder={'请输入新身份的姓名'} handleChange={this.handleInputChange} />
          <Input type={'number'} title={'年龄'} name={'age'} value={this.props.information.age}
            placeholder={'请输入角色的年龄'} handleChange={this.handleInputChange} />
          <Select title={'性别'} name={'sex'} options={this.props.genderOptions}
            value={this.props.information.sex} placeholder={'请选择角色的性别'} handleChange={this.handleInputChange} />
        </Form.Row>
        <Form.Row>
          <Input type={'text'} title={'出生地'} name={'birthplace'} value={this.props.information.birthplace}
            placeholder={'请输入角色的出生地'} handleChange={this.handleInputChange} />
          <Input type={'text'} title={'居住地'} name={'residence'} value={this.props.information.residence}
            placeholder={'请输入角色的居住地'} handleChange={this.handleInputChange} />
          <Input type={'text'} title={'时代'} name={'era'} value={this.props.information.era}
            placeholder={'请输入角色生活的时代，如：1920年代'} handleChange={this.handleInputChange} />
        </Form.Row>
        <Form.Row>
          <Input type={'text'} title={'头像'} name={'avatarUrl'} value={this.props.information.avatarUrl}
            placeholder={'请输入头像图片的链接'} handleChange={this.handleInputChange} />
        </Form.Row>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    information: {
      fakeName: state.information.fakeName,
      age: state.information.age,
      sex: state.information.sex,
      birthplace: state.information.birthplace,
      residence: state.information.residence,
      era: state.information.era,
      avatarUrl: state.information.avatarUrl
    },
    genderOptions: ['男', '女', '未知']
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInformation: (name, value) => {
      dispatch(updateInformation(name, value))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InformationForm);
