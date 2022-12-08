import contentStyles from './Content.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo.component";

const Content = (props) => {
    return (
        <div className={contentStyles.content}>
            <ProfileInfo/>
            <Posts posts={props.profileData.posts}/>
        </div>
    )
}

export default Content;