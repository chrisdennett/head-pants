import React from "react";

import { Title } from "./comps/Title";
import { Logo } from "./comps/Logo";

function App() {
  return (
    <div>
      <header>
        <h1>
          <Title />
        </h1>
        <Logo />
        <p className="intro">
          Project <span className="highlight">#headpants</span> is one town's
          mission to persuade Guinness that a mass headpant clad gathering is
          worthy of a record!
        </p>
      </header>

      <section>
        <div className="sectionHeader bgOrange">
          <h3>How to get involved</h3>
        </div>
        <p>
          Good people of the world, we call upon you to don your underpants like
          a hat and post a picture on the socials with the hashtag #headpants.
        </p>
        <p>
          Together we shall fight the marginisation of those who choosing
          undercrackers as headwear. Come out of the shadows and together we'll
          show the Guiness World that we are not too specialised. WE ARE ALL
          HEADPANTERS.
        </p>
        <p>
          Let's show them that the Headpant community is global, from every age,
          nationality, gender identity, sexual orientation, race, ethnicity,
          language, neuro-type, size, disability, class, religion, culture,
          subculture, political opinion, skill level, occupation, and
          background. HEADPANTERS UNITE!
        </p>
      </section>

      <section>
        <div className="sectionHeader bgGreen">
          <h3>Background:</h3>
        </div>
        <p>
          With 2 Guinness World Records 🏆🏆 in the bag a plucky band of
          Ulverstonians decided to push things up a notch and go for a third
          record as yet unlisted in the book! 📖
        </p>
        <p className="standout">
          Largest gathering of people wearing underpants on their head.
        </p>
        <p>
          The application was submitted in January, but we were rejected 😭😭😭:
        </p>
        <p className="quote">
          "While we certainly do not underestimate your proposal, we think that
          it is a little too specialised for a body of reference as general as
          Guinness World Records."
        </p>
      </section>

      <section>
        <div className="sectionHeader bgPurple">
          <h3>Our Application:</h3>
        </div>

        <h2>Largest gathering of people wearing underpants on their head.</h2>
        <p>
          Ulverston in Cumbria is the birthplace of Stan Laurel of Laurel &
          Hardy fame and proudly hosts Another Fine Fest every June, a comedy &
          music festival that celebrates his birthday.
        </p>
        <p>
          To uphold the spirit of Stan and Ulverston’s civic pride in its most
          famous son, the festival endeavours to bring people together for a
          comedy challenge every year.
        </p>
        <p>
          What could be more silly than the joyful spectacle of hundreds of
          people wearing underpants on their head? It’s a universal comedic act
          that most of us will have done as children and perhaps continue to do
          so to amuse ourselves (though maybe behind closed doors!).
        </p>
        <p>
          We believe it’s a fun record that would be enjoyed across the world.
          Our proposal is based on the rules of the Largest Gathering of People
          Wearing Conical Party Hats, a record we held in 2018. It would involve
          people wearing underpants on their head in a single venue, with all
          participants in position for a minimum of 5 minutes.
        </p>
        <p>
          Suggested detailed rules and measurement:{" "}
          <a href="https://drive.google.com/file/d/1Ps1uOJNaWmK1aTqMQvgfzFNvErT1maw1/view?usp=sharing">
            Shared Google Doc
          </a>
          .
        </p>
        <p>
          The Record Attempt would begin the festival party at Ford Park
          (Ulverston), bringing people of all ages together for a joyful, fun
          community activity.
        </p>
        <p>
          A local street entertainer whose characters include Captain
          Underpants, would lead proceedings. With your approval we are
          confident we could set this Record and inspire others to take-up the
          challenge.
        </p>
        <p>
          In 2016 Another Fine Fest broke the Record for the Largest Shaving
          Cream Pie Fight at 1,180 participants, it’s a feat that continues to
          generate considerable pride for the town. People here are eager for
          another Record challenge to again show the world that when it comes to
          upholding the fun-loving spirit of Stan-our-man, Ulverston is
          officially amazing. (See{" "}
          <a href="https://youtu.be/X0cU2rjxTHc">
            https://youtu.be/X0cU2rjxTHc
          </a>{" "}
          for a quick introduction to the festival, more at{" "}
          <a href="https://www.facebook.com/anotherfinefest">
            facebook.com/anotherfinefest
          </a>
          )
        </p>
      </section>
    </div>
  );
}

export default App;
