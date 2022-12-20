import React from "react";
import contentStyles from "./Content.module.css";
import Content from "./Content";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/reducers/profile-reducer";

class ContentContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        console.log(this.props);
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div className={contentStyles.content}>
        <Content {...this.props} profile={this.props.profile}></Content>
      </div>
    );
  }
}
let MapStateToProps = (state) => ({ profile: state.profilePage.profile });
export default connect(MapStateToProps, { setUserProfile })(ContentContainer);
