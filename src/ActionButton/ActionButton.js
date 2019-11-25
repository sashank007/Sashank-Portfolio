import React from "react";

import "./ActionButton.scss";
export default function ActionButton() {
  return (
    <div class="wrapper">
      <div class="btn btn--bolt">
        <span class="btn-icon">
          <i class="fa fa-bolt fa-3x"></i>
        </span>
        <span class="btn-topFakeBorders"></span>
        <div class="btn-bottomAnim btn-anim"></div>
        <div class="btn-sideAnim btn-anim"></div>
        <div class="btn-topAnim btn-anim"></div>
        <span class="btn-content">Click for action !</span>
      </div>
    </div>
  );
}
