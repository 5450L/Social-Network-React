import React from "react";
import contentStyles from "./Content.module.css";
import Content from "./Content";
import axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../redux/reducers/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router";
import {Navigate} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/AuthRedirect";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    };

    return ComponentWithRouterProp;
}

class ContentContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.setProfile(userId);
    };

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'}/>
        }
        ;
        return (
            <div className={contentStyles.content}>
                <Content {...this.props} profile={this.props.profile}></Content>
            </div>
        );
    };
};

let MapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth
});
export default compose(
    connect(MapStateToProps, {setProfile}),
    withRouter,
    withAuthRedirectComponent
)(ContentContainer)