/** @type {import('next').NextConfig} */

const { PHASE_SEVELOPMENR_SERVER } = require("next/constants");

module.exports = (phase) => {
  console.log({phase})
  if (phase === PHASE_SEVELOPMENR_SERVER) {
    return {
      reactStrictMode: false,
      images: {
        domains: [""],
      },
      env: {
        mongodb_username: "kunalkhairnar96",
        mongodb_password: "mvgpFB77GVRktIxf",
        base_url: "http://localhost:3000",
      },
    };
  }
  return {
    reactStrictMode: false,
    images: {
      domains: [""],
    },
    env: {
      mongodb_username: "kunalkhairnar96",
      mongodb_password: "mvgpFB77GVRktIxf",
      base_url: "http://localhost:3000",
    },
  };
};
