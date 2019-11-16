import React from 'react';
import { notify } from './Notify.service';
import Alert from 'react-bootstrap/Alert'

export class Notify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            msg: '',
            type: ''
        }
        notify.register(this);
    }
    show = (visible, msg, type) => {
        this.setState({
            visible,
            msg,
            type
        });
        setTimeout(() => this.hide(), 2000);
    }
    hide = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <>
                {this.state.visible && <Alert variant={this.state.type}>
                    {this.state.msg}
                </Alert>}
            </>
        );
    }
}