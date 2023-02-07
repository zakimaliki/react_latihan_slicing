import React from "react";
import avatar from "../../src/assets/w3images/avatar_hat.jpeg";

let Skills = [
  {
    name: "Adobe Photoshop",
    percent: 90,
  },
  {
    name: "Photography",
    percent: 80,
  },
  {
    name: "Illustrator",
    percent: 75,
  },
  {
    name: "Media",
    percent: 50,
  },
];

let Languages = [
  {
    language: "English",
    percent: 100,
  },
  {
    language: "Spanish",
    percent: 70,
  },
  {
    language: "German",
    percent: 25,
  },
];
const Profile = () => {
  return (
    <div class="w3-third">
      <div class="w3-white w3-text-grey w3-card-4">
        <div class="w3-display-container">
          <img src={avatar} style={{ width: "100%" }} alt="Avatar" />
          <div class="w3-display-bottomleft w3-container w3-text-black">
            <h2>Jane Doe</h2>
          </div>
        </div>
        <div class="w3-container">
          <p>
            <i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
            Designer
          </p>
          <p>
            <i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
            London, UK
          </p>
          <p>
            <i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
            ex@mail.com
          </p>
          <p>
            <i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
            1224435534
          </p>
          <hr />

          <p class="w3-large">
            <b>
              <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
              Skills
            </b>
          </p>

          {Skills.map((item) => (
            <>
              <p>{item.name}</p>
              <div class="w3-light-grey w3-round-xlarge w3-small">
                <div
                  class="w3-container w3-center w3-round-xlarge w3-teal"
                  style={{ width: item.percent + "%" }}
                >
                  {item.percent}%
                </div>
              </div>
            </>
          ))}

          <br />

          <p class="w3-large w3-text-theme">
            <b>
              <i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
              Languages
            </b>
          </p>
          {Languages.map((item) => (
            <>
              <p>{item.language}</p>
              <div class="w3-light-grey w3-round-xlarge">
                <div
                  class="w3-round-xlarge w3-teal"
                  style={{ height: "24px", width: item.percent + "%" }}
                ></div>
              </div>
            </>
          ))}
          <br />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Profile;
