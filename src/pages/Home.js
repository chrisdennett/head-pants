import React from "react";
import { Title } from "../comps/Title";
import { Logo } from "../comps/Logo";
import Emoji from "../comps/Emoji";
import { Nav } from "../comps/Nav";

export const Home = ({ logoSettings }) => {
  return (
    <div>
      <div className="header">
        <Nav />
        <h1>
          <Title />
        </h1>
        <Logo settings={logoSettings} />
        <p className="intro">
          Project <span className="highlight bgYellow">#headpants</span> is one
          town's mission to persuade the Guinness Records folk that a mass
          headpant clad gathering is worthy of a record!
        </p>
      </div>

      <section>
        <div className="sectionHeader bgOrange">
          <h3>How to get involved</h3>
        </div>
        <p>
          Good people of the world <Emoji symbol="🌍" label="globe" />, we call
          upon you to don underpants as hats and post selfies
          <Emoji symbol="📷" label="camera" />
          on the socials with the #headpants hashtag.
        </p>
        <p>
          Together we'll fight the marginisation of those choosing undercrackers
          as headwear <Emoji symbol="😀" label="happy face" />
          <Emoji symbol="🩲" label="underpants" />! Come out of the shadows and
          together we'll show the Guiness Peeps that we are not "too
          specialised".{" "}
          <span className="highlight bgOrange">WE ARE ALL HEADPANTERS!</span>
        </p>
        <p>
          Headpanters come from every age, nationality, gender identity, sexual
          orientation, race, ethnicity, language, neuro-type, size, disability,
          class, religion, culture, subculture, political opinion, skill level,
          occupation, and background.{" "}
          <span className="highlight bgOrange">HEADPANTERS UNITE!</span>
        </p>
      </section>

      <section>
        <div className="sectionHeader bgGreen">
          <h3>Background:</h3>
        </div>
        <p>
          With 2 Guinness World Records <Emoji symbol="🏆" label="trophy" />
          <Emoji symbol="🏆" label="trophy" /> in the bag a plucky band of
          Ulverstonians decided to push things up a notch and go for a third
          record as yet unlisted in the book! <Emoji symbol="📖" label="book" />
        </p>
        <p className="standout">
          Largest gathering of people wearing underpants on their head.
        </p>
        <p>
          The application was submitted in January, but we were rejected{" "}
          <Emoji symbol="😭" label="crying face" />
          <Emoji symbol="😭" label="crying face" />
          <Emoji symbol="😭" label="crying face" />:
        </p>
        <p className="quote">
          "While we certainly do not underestimate your proposal, we think that
          it is a little too specialised for a body of reference as general as
          Guinness World Records."
        </p>
      </section>
    </div>
  );
};
