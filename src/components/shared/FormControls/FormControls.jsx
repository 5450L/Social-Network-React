import formControlsStyles from "./FormControls.module.css"

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div>
            <textarea {...input} {...props} className={(hasError ? formControlsStyles.error : '')}/>
            {hasError && <span>*</span>}
            {hasError && <p className={formControlsStyles.errorMessage}>{meta.error}</p>}
        </div>
    );
};