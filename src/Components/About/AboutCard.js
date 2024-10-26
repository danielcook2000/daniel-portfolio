import React from "react";
import Card from "react-bootstrap/Card";
import MovieIcon from "@mui/icons-material/Movie";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Daniel </span>
            from <span className="purple"> Trichy, India.</span>
            <br />I specialize in crafting a wide range of delectable desserts
            and baked goods with precision and creativit
            <br />
            <br />
            Apart from cooking, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MovieIcon /> 🍽️ Experimenting with New Recipes
            </li>
            <li className="about-activity">
              <AutoStoriesIcon /> 📚 Exploring Culinary Books
            </li>
            <li className="about-activity">
              <ScreenSearchDesktopIcon /> 🌍 Learning About Global Cuisines
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Crafting flavors that inspire and bring people together!"{" "}
          </p>
          <br />
          <footer className="blockquote-footer"> Daniel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
