import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Adduser from "./adduser";

const ReusablePopup = ({ trigger }) => {
  return (
    <Popup trigger={trigger} position="right center" modal>
      <div className="p-4">
        <Adduser />
      </div>
    </Popup>
  );
};

export default ReusablePopup;
