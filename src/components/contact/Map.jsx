import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=49, sector 5, avas vikas colony, sikandra, agra&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
