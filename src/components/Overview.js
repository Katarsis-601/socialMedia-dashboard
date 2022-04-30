import { CardOverview, FollowText, LinkText } from "./mainComponent";
import iconDown from "../images/icon-down.svg";
import iconUp from "../images/icon-up.svg";

import facebook_icon from "../images/icon-facebook.svg";
import ig_icon from "../images/icon-instagram.svg";
import youtube_icon from "../images/icon-youtube.svg";
import twitter_icon from "../images/icon-twitter.svg";
export default function Overview() {
  return (
    <>
    <div className="overview">
      <CardOverview>
        <div className="overview-header">
          <p>Page Views</p>
          <img src={facebook_icon} alt="fb-icon" />
        </div>
        <div className="overview-bottom">
          <FollowText>87</FollowText>
          <div className="rate rate-up">
            <img src={iconUp} alt="iconUp" />
            <p className="rate-text">3%</p>
          </div>
        </div>
      </CardOverview>
      <CardOverview>
        <div className="overview-header">
          <p>Likes</p>
          <img src={facebook_icon} alt="fb-icon" />
        </div>
        <div className="overview-bottom">
          <FollowText>52</FollowText>
          <div className="rate rate-down">
            <img src={iconDown} alt="iconDown" />
            <p className="rate-text">2%</p>
          </div>
        </div>
      </CardOverview>
      <CardOverview>
        <div className="overview-header">
          <p>Likes</p>
          <img src={ig_icon} alt="ig-icon" />
        </div>
        <div className="overview-bottom">
          <FollowText>5462</FollowText>
          <div className="rate rate-up">
            <img src={iconUp} alt="iconUp" />
            <p className="rate-text">2257%</p>
          </div>
        </div>
      </CardOverview>
      <CardOverview>
        <div className="overview-header">
          <p>Profile Views</p>
          <img src={ig_icon} alt="ig-icon" />
        </div>
        <div className="overview-bottom">
          <FollowText>52k</FollowText>
          <div className="rate rate-up">
            <img src={iconUp} alt="iconUp" />
            <p className="rate-text">1375%</p>
          </div>
        </div>
      </CardOverview>
      <CardOverview>
        <div className="overview-header">
          <p>Retweets</p>
          <img src={twitter_icon} alt="twitt-icon" />
        </div>
        <div className="overview-bottom">
          <FollowText>117</FollowText>
          <div className="rate rate-up">
            <img src={iconUp} alt="iconUp" />
            <p className="rate-text">303%</p>
          </div>
        </div>
      </CardOverview>{" "}
      <CardOverview>
        <div className="overview-header">
          <p>Likes</p>
          <img src={twitter_icon} alt="twitt-icon" />
        </div>
        <div className="overview-bottom">
          <FollowText>507</FollowText>
          <div className="rate rate-up">
            <img src={iconUp} alt="iconUp" />
            <p className="rate-text">553%</p>
          </div>
        </div>
      </CardOverview>
      <CardOverview>
        <div className="overview-header">
          <p>Likes</p>
          <img src={youtube_icon} alt="yt-icon" />
        </div>
        <div className="overview-bottom">
          <FollowText>107</FollowText>
          <div className="rate rate-down">
            <img src={iconDown} alt="iconDown" />
            <p className="rate-text">19%</p>
          </div>
        </div>
      </CardOverview>
      <CardOverview>
        <div className="overview-header">
          <p>Total Views</p>
          <img src={youtube_icon} alt="yt-icon" />
        </div>
        <div className="overview-bottom">
          <FollowText>1407</FollowText>
          <div className="rate rate-down">
            <img src={iconDown} alt="iconDown" />
            <p className="rate-text">12%</p>
          </div>
        </div>
      </CardOverview>
    </div>
      <div class="attribution">
        Challenge by{" "}
        <LinkText
          link="https://www.frontendmentor.io?ref=challenge"
          children="Frontend Mentor"
        />
        . Coded by{" "}
        <LinkText link="https://github.com/Andrian-W" children="Andrian-W" />.
      </div>  
</>
  );
}
