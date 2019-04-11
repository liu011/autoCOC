import React from 'react';
import Card from 'react-bootstrap/Card';


const SkillCard = (props) => {
    console.log(props);
    return (
        <Card bg="light" style={{ width: '20rem' }}>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <Card.Title>{props.totalPts}</Card.Title>
                <Card.Text>初始技能点</Card.Text>
                <input className="form-input" name={'initPts'} type={'number'}
                    value={props.initPts} readOnly />
                <Card.Text>职业技能点</Card.Text>
                <input className="form-input" name={'occPts'} type={'number'}
                    value={props.occPts} onChange={props.handleChange} />
                <Card.Text>兴趣技能点</Card.Text>
                <input className="form-input" name={'intPts'} type={'number'}
                    value={props.intPts} onChange={props.handleChange} />
            </Card.Body>
        </Card>
    );
}

export default SkillCard;



/*
    handleInputChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState(prevState => {
            return {
                skillPts: { ...prevState.skillPts, [name]: value },
                skillPts: { totalPts: originPts + occPts + intPts }
            }
        }, () => console.log(this.state.skillPts))
    }
*/



