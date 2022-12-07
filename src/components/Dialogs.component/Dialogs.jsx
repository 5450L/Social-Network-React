import dialogsStyles from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={dialogsStyles.dialogs}>
            <div className={dialogsStyles.dialogsItems}>
                <div className={dialogsStyles.dialogsItem}>
                    Name
                </div>
                <div className={dialogsStyles.dialogsItem}>
                    Name
                </div>
                <div className={dialogsStyles.dialogsItem}>
                    Name
                </div>
                <div className={dialogsStyles.dialogsItem}>
                    Name
                </div>
                <div className={dialogsStyles.dialogsItem}>
                    Name
                </div>


            </div>
            <div className={dialogsStyles.messages}>
                <div className={dialogsStyles.message}>Message</div>
                <div className={dialogsStyles.message}>More message</div>
                <div className={dialogsStyles.message}>and more</div>


            </div>
        </div>
    )
}

export default Dialogs;