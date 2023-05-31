import React from "react";

const ServiceContent = [
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `Creating custom websites from scratch using languages like HTML, CSS, and JavaScript, as well as frameworks like React, Laravel, CakePHP, CI, etc.`,
  },
  {
    icon: "icon-desktop",
    title: "Responsive Web Design",
    descriptions: `Ensuring that websites are optimized for various devices and screen sizes, providing a seamless user experience across desktop, tablet, and mobile platforms.`,
  },
  {
    icon: "icon-desktop",
    title: "Content Management Systems (CMS)",
    descriptions: `Developing websites using popular CMS platforms like WordPress, Drupal, or Joomla, allowing clients to easily manage and update their website content.`,
  },
  {
    icon: "icon-desktop",
    title: "E-commerce Development",
    descriptions: `Creating online stores and implementing features like product listings, shopping carts, secure payment gateways, and order management systems.`,
  },
  {
    icon: "icon-mobile",
    title: "Website Maintenance and Support",
    descriptions: ` Assisting clients with ongoing website updates, bug fixes, security enhancements, and performance optimizations.`,
  },
  {
    icon: "icon-mobile",
    title: "Website Optimization",
    descriptions: `Improving website speed, performance, and search engine visibility through techniques like code optimization, image compression, caching, and SEO best practices.`,
  },
  {
    icon: "icon-target",
    title: "Website Migration",
    descriptions: `Assisting with the seamless transition of a website from one hosting platform or CMS to another.`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
