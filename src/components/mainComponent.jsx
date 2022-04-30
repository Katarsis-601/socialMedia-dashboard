import { useContext, useEffect, useRef } from "react";
import { themeContext } from "../Context";
export function CardMain(props) {
  const theme = useContext(themeContext);
  const mainCard = useRef(null);
  useEffect(() => {
    const themeDark = () => {
      if (theme.dark === true) {
        mainCard.current.style.backgroundColor = "hsl(228, 28%, 20%)";
      } else {
        mainCard.current.style.backgroundColor = "hsl(227, 47%, 96%)";
      }
    };
    themeDark();
  }, [theme.dark]);
  return (
    <div
      ref={mainCard}
      className="card-main"
      id={props.id}
      style={{
        display: "flex",
        width: "210px",
        margin: "15px",
        padding: "10px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {props.children}
    </div>
  );
}
export function CardOverview(props) {
  const theme = useContext(themeContext);
  const viewCard = useRef(null);
  useEffect(() => {
    const themeDark = () => {
      if (theme.dark === true) {
        viewCard.current.style.backgroundColor = "hsl(228, 28%, 20%)";
      } else {
        viewCard.current.style.backgroundColor = "hsl(227, 47%, 96%)";
      }
    };
    themeDark();
  }, [theme.dark]);
  return (
    <div
      ref={viewCard}
      className="cardOverview"
      style={{
        display: "flex",
        flexFlow: "column wrap",
        width: "200px",
        padding: "5px 20px",
        margin: "10px",
        backgroundColor: "hsl(227, 47%, 96%)",
      }}
    >
      {props.children}
    </div>
  );
}
export function FollowText(props) {
  const theme = useContext(themeContext);
  const followText = useRef(null);
  useEffect(() => {
    const themeDark = () => {
      if (theme.dark === true) {
        followText.current.style.color = "white";
      } else {
        followText.current.style.color = "hsl(230, 17%, 14%)";
      }
    };
    themeDark();
  }, [theme.dark]);
  return (
    <p
      ref={followText}
      className="follow-text"
      style={{
        fontWeight: "700",
        fontSize: "20px",
        marginBottom: "10px",
        marginTop: "15px",
      }}
    >
      {props.children}
    </p>
  );
}

export function TotalText(props) {
  const theme = useContext(themeContext);
  const totalText = useRef(null);
  useEffect(() => {
    const themeDark = () => {
      if (theme.dark === true) {
        totalText.current.style.color = "white";
      } else {
        totalText.current.style.color = "hsl(230, 17%, 14%)";
      }
    };
    themeDark();
  }, [theme.dark]);
  return (
    <p
      ref={totalText}
      className="total-text"
      style={{
        fontWeight: "700",
        marginTop: "10px",
        marginBottom: "10px",
        fontSize: "50px",
      }}
    >
      {props.children}
    </p>
  );
}
