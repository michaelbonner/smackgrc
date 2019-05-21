import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex flex-wrap container mx-auto items-stretch">
    {gridItems.map(item => (
      <div key={item.text} className="p-4 w-full md:w-1/2">
        <div className="p-4 h-full rounded bg-white-100 shadow-lg overflow-hidden">
          <div
            style={{
              width: "240px"
            }}
            className="text-center mx-auto py-4"
          >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <p>{item.text}</p>
        </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
