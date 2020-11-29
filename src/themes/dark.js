/**
 * Dark theme.
 * React, React-Route, Redux Test project.
 */

import LIGHT from "./light";

const dark = {
  ...LIGHT,
  button: {
    color: "#fff",
    background: "#687ae8",
    border: "#687ae8",
    hover: "#475de3",
    disabled: "#3B7ddd"
  },
  badge: {
    color: "#fff",
    background: "#3e4676"
  },
  navbar: {
    background: "#3e4676",
    color: "#fff",
    hover: "#cdcdcd"
  }
};

export default dark;
