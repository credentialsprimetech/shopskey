"use client";

import React from "react";

const MapEmbed = ({
  src,
  height = "300",
  width = "100%",
  className = "contact-map-unique",
  allowFullScreen = true,
  loading = "lazy",
  style = { border: 0 },
}) => {
  return (
    <div className={className}>
      <iframe
        src={src}
        width={width}
        height={height}
        style={style}
        allowFullScreen={allowFullScreen}
        loading={loading}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
