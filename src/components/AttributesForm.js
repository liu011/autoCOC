import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { updateAttributes } from '../actions/updateActions';


class AttributesForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            str0: 0, str1: 0, str2: 0,
            con0: 0, con1: 0, con2: 0,
            siz0: 0, siz1: 0, siz2: 6,
            dex0: 0, dex1: 0, dex2: 0,
            app0: 0, app1: 0, app2: 0, 
            int0: 0, int1: 0, int2: 6, 
            pow0: 0, pow1: 0, pow2: 0, 
            edu0: 0, edu1: 0, edu2: 6, 
            luck0: 0, luck1: 0, luck2: 0
        }
        this.roll_1d6 = this.roll_1d6.bind(this);
    }

    roll_1d6(event){
        event.target.disabled = true;
        let name = event.target.name;
        this.setState(prevState => {
          return {
             ...prevState, [name]: Math.floor(Math.random() * 6 + 1) 
          }
        }, () => console.log(this.state))
    }

    submit = () => {
        let attributes = {
            str: (this.state.str0 + this.state.str1 + this.state.str2)*5,
            con: (this.state.con0 + this.state.con1 + this.state.con2)*5,
            siz: (this.state.siz0 + this.state.siz1 + this.state.siz2)*5,
            dex: (this.state.dex0 + this.state.dex1 + this.state.dex2)*5,
            app: (this.state.app0 + this.state.app1 + this.state.app2)*5,
            int: (this.state.int0 + this.state.int1 + this.state.int2)*5,
            pow: (this.state.pow0 + this.state.pow1 + this.state.pow2)*5,
            edu: (this.state.edu0 + this.state.edu1 + this.state.edu2)*5,
            luck: (this.state.luck0 + this.state.luck1 + this.state.luck2)*5
        }
        this.props.updateAttributes(attributes);
    }

    render() {
        return (
            <form style={{ marginLeft: 5 + 'em' }}>
                <Form.Row>
                    <h3>调查员属性</h3>
                </Form.Row>
                <Form.Row>
                    <h5>力量</h5>
                    <p>&emsp; total: {this.props.attributes.str} &emsp;</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'str0'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.str0}>{this.state.str0}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'str1'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.str1}>{this.state.str1}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'str2'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.str2}>{this.state.str2}</p>
                </Form.Row>
                <Form.Row>
                    <h5>体质</h5>
                    <p>&emsp; total: {this.props.attributes.con} &emsp;</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'con0'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.con0}>{this.state.con0}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'con1'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.con1}>{this.state.con1}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'con2'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.con2}>{this.state.con2}</p>
                </Form.Row>
                <Form.Row>
                    <h5>体型</h5>
                    <p>&emsp; total: {this.props.attributes.siz} &emsp;</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'siz0'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.siz0}>{this.state.siz0}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'siz1'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.siz1}>{this.state.siz1}</p>
                    <p className="result-box" value={this.state.siz2}>&emsp;&emsp;&emsp;{this.state.siz2}</p>
                </Form.Row>
                <Form.Row>
                    <h5>敏捷</h5>
                    <p>&emsp; total: {this.props.attributes.dex} &emsp;</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'dex0'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.dex0}>{this.state.dex0}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'dex1'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.dex1}>{this.state.dex1}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'dex2'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.dex2}>{this.state.dex2}</p>
                </Form.Row>
                <Form.Row>
                    <h5>外貌</h5>
                    <p>&emsp; total: {this.props.attributes.app} &emsp;</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'app0'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.app0}>{this.state.app0}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'app1'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.app1}>{this.state.app1}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'app2'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.app2}>{this.state.app2}</p>
                </Form.Row>
                <Form.Row>
                    <h5>智力</h5>
                    <p>&emsp; total: {this.props.attributes.int} &emsp;</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'int0'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.int0}>{this.state.int0}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'int1'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.int1}>{this.state.int1}</p>
                    <p className="result-box" value={this.state.int2}>&emsp;&emsp;&emsp;{this.state.int2}</p>
                </Form.Row>
                <Form.Row>
                    <h5>意志</h5>
                    <p>&emsp; total: {this.props.attributes.pow} &emsp;</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'pow0'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.pow0}>{this.state.pow0}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'pow1'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.pow1}>{this.state.pow1}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'pow2'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.pow2}>{this.state.pow2}</p>
                </Form.Row>
                <Form.Row>
                    <h5>教育</h5>
                    <p>&emsp; total: {this.props.attributes.edu} &emsp;</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'edu0'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.edu0}>{this.state.edu0}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'edu1'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.edu1}>{this.state.edu1}</p>
                    <p className="result-box" value={this.state.edu2}>&emsp;&emsp;&emsp;{this.state.edu2}</p>
                </Form.Row>
                <Form.Row>
                    <h5>幸运</h5>
                    <p>&emsp; total: {this.props.attributes.luck} &emsp;</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'luck0'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.luck0}>{this.state.luck0}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'luck1'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.luck1}>{this.state.luck1}</p>
                    <Button variant={'info'} onClick={this.roll_1d6} name={'luck2'} disabled={false}>1D6</Button>
                    <p className="result-box" value={this.state.luck2}>{this.state.luck2}</p>
                </Form.Row>
                <Button variant={'success'} onClick={this.submit}>Good Luck!</Button>
            </form>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        attributes: {
            str: state.attributes.str,
            con: state.attributes.con,
            siz: state.attributes.siz,
            dex: state.attributes.dex,
            app: state.attributes.app,
            int: state.attributes.int,
            pow: state.attributes.pow,
            edu: state.attributes.edu,
            luck: state.attributes.luck
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAttributes: (attributes) => {
            dispatch(updateAttributes(attributes))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AttributesForm);
