import React from "react";
import contentStyles from "./Content.module.css";
import Content from "./Content";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router";

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
        console.log(this.props.router.params.userId);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                console.log(this.props);
                this.props.setUserProfile(response.data);
            });
    };

    render() {
        return (
            <div className={contentStyles.content}>
                <Content {...this.props} profile={this.props.profile}></Content>
            </div>
        );
    };
};

let MapStateToProps = (state) => ({profile: state.profilePage.profile});

let WithUrlDataContainerComponent = withRouter(ContentContainer);

export default connect(MapStateToProps, {setUserProfile})(withRouter(ContentContainer));
