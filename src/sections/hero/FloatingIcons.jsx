import React from "react";
import "./FloatingIcons.scss";
import Test_1 from "../../assets/test/test_1.svg?react";
import Test_2 from "../../assets/test/test_2.svg?react";
import Test_3 from "../../assets/test/test_3.svg?react";
import Test_4 from "../../assets/test/test_4.svg?react";
export default function FloatingIcons() {
  return (
    <>
      <div>
        <Test_1 className="test_icons test_1" />
      </div>
      <div>
        <Test_2 className="test_icons test_2" />
      </div>
      <div>
        <Test_3 className="test_icons test_3" />
      </div>
      <div>
        <Test_4 className="test_icons test_4" />
      </div>
    </>
  );
}
