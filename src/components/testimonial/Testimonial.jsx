import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `I worked with you approx 2 years and we worked together in a project where we are switching database of a large scale product from MySQL to Mssql with updated language version.`,
      reviewerName: "Vivek Sharma",
      designation: "Sr Software Engg.",
    },
    {
      imageName: "aditya-verma",
      desc: `We have worked together on several projects, and I found him a highly skilled and dedicated professional.`,
      reviewerName: "Aditya Verma",
      designation: "Lead at AuthBridge",
    },
    {
      imageName: "piyush-dhar",
      desc: ` I had the pleasure of working with an exceptional PHP expert who showcased a remarkable level of expertise across various domains. His proficiency in PHP development was truly impressive, as they effortlessly tackled any project thrown their way.`,
      reviewerName: "Piyush Dhar",
      designation: "Managing Director @ AGR Informatics",
    },
    {
      imageName: "akhilesh-singh",
      desc: ` It was great to have Mr. Brij Raj singh in my project with his great efforts and continuous growth on projects.`,
      reviewerName: "Akhilesh Singh",
      designation: "SEO Team Lead",
    },
    {
      imageName: "sandeep-singh",
      desc: ` 
            His passion for cultivating growth and fostering a collaborative environment was evident in every interaction. 
His exhibited unwavering dedication to guiding and supporting the team, ensuring that everyone had the opportunity to excel and thrive. 
His patience, approachability, and eagerness to share knowledge made them an invaluable asset, benefiting not only junior and mid-level developers 
but also elevating the overall performance of the entire team.`,
      reviewerName: "Sandeep Singh",
      designation: "Software Engineer",
    },
    {
      imageName: "arvind-sutail",
      desc: ` Not only did this PHP expert possess a strong grasp of the language itself, but he also demonstrated proficiency in 
            frameworks such as Laravel, Symfony, or CodeIgniter, which they expertly utilized to build robust and scalable applications. 
            His code was clean, well-structured, and meticulously documented, ensuring seamless collaboration and future maintenance.`,
      reviewerName: "Arvind Sutail",
      designation: "Director @ ICET Agra",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div key={i}>
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
