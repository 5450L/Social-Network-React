import React, {useEffect, useState} from "react";

const StatusWHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const toggleMode = () => {
        setEditMode(!editMode);
    };

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
        props.updateUserStatus(status);
    };

    return (
        <div>
            {!editMode &&
                <div onDoubleClick={toggleMode}>
                    {props.status ? props.status || 'something' : 'Your status'}
                </div>
            }
            {editMode &&
                <div>
                    <input placeholder={'status'}
                           autoFocus={true}
                           onBlur={toggleMode}
                           onChange={onStatusChange}
                           defaultValue={status ? status || 'something' : 'Your status'}
                    />
                </div>
            }
        </div>
    )
}

export default StatusWHooks;