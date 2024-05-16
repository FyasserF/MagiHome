import React, { Children, useState } from "react";
import Forget_pwd_S1 from "./Forget_pwd_S1";
import Forget_pwd_S2 from "./Forget_pwd_S2";
import Forget_pwd_S3 from "./Forget_pwd_S3";

export default function Forget_pwd() {
  const [step, setStep] = useState(1);
  const handleChangeStep = (e) => {
    setStep(e);
  };
  console.log(step);
  return (
    <div>
      {step == 1 ? (
        <Forget_pwd_S1 onchange={handleChangeStep} />
      ) : step == 2 ? (
        <Forget_pwd_S2 onchange={handleChangeStep} />
      ) : (
        <Forget_pwd_S3 />
      )}
    </div>
  );
}
