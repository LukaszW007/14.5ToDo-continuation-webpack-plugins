import React from 'react';
import { Modal, Button } from 'react-bootstrap'

class Todo extends React.Component {
    constructor (props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        };
    }

    componentWillReceiveProps(next) {
        this.setState({show: next.showModal});
    }

    handleClose () {
        this.setState({show: false});
    }

    handleShow () {
        this.setState({show: true});
    }

    render () {
        return (
            <div>
                <Modal show = {this.state.show} onHide = {this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Item of the list</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Your task</h4>
                        <p>
                            {this.props.taskText}
                        </p>
                        <hr/>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick = {this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Todo;
