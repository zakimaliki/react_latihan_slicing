import React from "react";

let Educations = [
  {
    university: "W3Schools.com",
    period: "Forever",
    degree: "Web Development! All I need to know in one plac",
  },
  {
    university: "London Business School",
    period: "2013 - 2015",
    degree: "Master Degree",
  },
  {
    university: "W3Schools.com",
    period: "Forever",
    degree: "Bachelor Degree",
  },
];

const Education = () => {
  return (
    <div class="w3-container w3-card w3-white">
      <h2 class="w3-text-grey w3-padding-16">
        <i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
        Education
      </h2>
      {Educations.map((item) => (
        <>
          <div class="w3-container">
            <h5 class="w3-opacity">
              <b>{item.university}</b>
            </h5>
            <h6 class="w3-text-teal">
              <i class="fa fa-calendar fa-fw w3-margin-right"></i>
              {item.period}
            </h6>
            <p>{item.degree}</p>
            <hr />
          </div>
        </>
      ))}
    </div>
  );
};

export default Education;
