import React, {createRef} from "react";

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    toggleMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        this.props.updateUserStatus(this.state.status);
    };

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.toggleMode}>
                        {this.props.status ? this.props.status : 'Your status'}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input defaultValue={this.state.status} placeholder={'status'}
                               autoFocus={true}
                               onBlur={this.toggleMode}
                               onChange={this.onStatusChange}/>
                    </div>
                }
            </div>
        )
    };
}

export default Status;