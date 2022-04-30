import { CardMain, TotalText } from "./mainComponent";
import iconDown from "../images/icon-down.svg";
import iconUp from "../images/icon-up.svg";

import facebook_icon from "../images/icon-facebook.svg";
import ig_icon from "../images/icon-instagram.svg";
import youtube_icon from "../images/icon-youtube.svg";
import twitter_icon from "../images/icon-twitter.svg";

export default function Main() {
  return (
    <div className="main-content">
      <CardMain id="facebook-main">
        <div className="head-main">
          <img src={facebook_icon} alt="fb_icon" />
          <p className="username">@nathanf</p>
        </div>
        <div className="total-followers">
          <TotalText>1987</TotalText>
          <p className="followers-text">FOLLOWERS</p>
        </div>
        <div className="rate rate-up">
          <img src={iconUp} alt="iconUp" />
          <p className="rate-text">12 Today</p>
        </div>
      </CardMain>
      <CardMain id="twitter-main">
        <div className="head-main">
          <img src={twitter_icon} alt="twitt_icon" />
          <p className="username">@nathanf</p>
        </div>
        <div className="total-followers">
          <TotalText>1044</TotalText>
          <p className="followers-text">FOLLOWERS</p>
        </div>
        <div className="rate rate-up">
          <img src={iconUp} alt="iconUp" />
          <p className="rate-text">99 Today</p>
        </div>
      </CardMain>
      <CardMain id="instagram-main">
        <div className="head-main">
          <img src={ig_icon} alt="ig_icon" />
          <p className="username">@nathanf</p>
        </div>
        <div className="total-followers">
          <TotalText>11k</TotalText>
          <p className="followers-text">FOLLOWERS</p>
        </div>
        <div className="rate rate-up">
          <img src={iconUp} alt="iconUp" />
          <p className="rate-text">1099 Today</p>
        </div>
      </CardMain>
      <CardMain id="youtube-main">
        <div className="head-main">
          <img src={youtube_icon} alt="youtube_icon" />
          <p className="username">@nathanf</p>
        </div>
        <div className="total-followers">
          <TotalText>8239</TotalText>
          <p className="followers-text">SUBSCRIBERS</p>
        </div>
        <div className="rate rate-down">
          <img src={iconDown} alt="iconDown" />
          <p className="rate-text">144 Today</p>
        </div>
      </CardMain>
    </div>
  );
}
