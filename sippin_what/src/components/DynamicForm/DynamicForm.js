import React, { Component } from 'react';
import { Row, Button, Input } from 'react-materialize';
import { PropTypes } from 'prop-types';


const DynamicForm = (props) => {
    return (
        <form onSubmit={props.handleFormSubmit}>

            { props.inputs.map((input, index) => (
                <Row key={ index }>
                    <Input type={ input.type } name={ input.name } label={ input.label }
                        s={ input.smScreenSize} m={ input.medScreenSize } l={ input.lgScreenSize }
                        checked={ input.checked }/>
                </Row>
            ))}
        
            <Button type="submit">Submit</Button>
        </form>
    )
}

DynamicForm.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    inputs: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        smScreenSize: PropTypes.number.isRequired,
        medScreenSize: PropTypes.number,
        lgScreenSize: PropTypes.number,
        checked: PropTypes.boolean
    }).isRequired).isRequired
}

export default DynamicForm;

