import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import "./ButtonsGroup.css";


const ButtonsGroup = props => {
const {onSelectForm, selectedForm} =props;
    return (
        <ButtonGroup className="radioBtnGroupe">
          <Button className="radioBtn" color="primary" onClick={() => onSelectForm(1)} active={selectedForm === 1}>Random</Button>
          <Button className="radioBtn" color="primary" onClick={() => onSelectForm(2)} active={selectedForm === 2}>Search</Button>
        </ButtonGroup>
    );
  }
  
  export default ButtonsGroup;