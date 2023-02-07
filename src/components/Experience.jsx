import React from 'react'

let Experiences =[
    {
        role : "Front End Developer",
        company : "w3schools.com",
        date_begin : "Jan 2015",
        date_end : "Current",
        description : "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
    },
    {
        role : "Web Developer",
        company : "something.com",
        date_begin : "Mar 2012",
        date_end : "Dec 2014",
        description : "Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
    },
    {
        role : "Graphic Designer",
        company : "designsomething.com",
        date_begin : "Jun 2010",
        date_end : "Mar 2012",
        description : "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
    }
]

const Experience = () => {
  return (
    <div class="w3-container w3-card w3-white w3-margin-bottom">
    <h2 class="w3-text-grey w3-padding-16">
      <i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
      Work Experience
    </h2>
    {Experiences.map((item)=>(
        <>
            <div class="w3-container">
      <h5 class="w3-opacity">
        <b>{item.role} / {item.company}</b>
      </h5>
      <h6 class="w3-text-teal">
        <i class="fa fa-calendar fa-fw w3-margin-right"></i>{item.date_begin} -{" "}
        <span class="w3-tag">{item.date_end}</span>
      </h6>
      <p>
        {item.description}
      </p>
      <hr />
    </div>
        </>
    ))}

  </div>
  )
}

export default Experience