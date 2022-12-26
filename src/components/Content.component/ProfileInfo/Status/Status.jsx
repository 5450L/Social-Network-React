import React from "react";

class Status extends React.Component {

    state = {
        editMode: false
    };

    toggleMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.toggleMode.bind(this)}>
                        {this.props.status}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input placeholder={'status'} autoFocus={true} onBlur={this.toggleMode.bind(this)}/>
                    </div>
                }
            </div>
        )
    };
}

export default Status;