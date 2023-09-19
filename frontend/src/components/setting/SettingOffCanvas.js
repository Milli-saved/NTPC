import { useState, useEffect, memo, Fragment } from "react";


const SettingOffCanvas = memo((props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      if (show) {
        if (
          e.target.closest(".live-customizer") == null &&
          e.target.closest("#settingbutton") == null
        ) {
          setShow(false);
        }
      }
    };
    document.body.addEventListener("click", onClick);

    return () => {
      document.body.removeEventListener("click", onClick);
    };
  });
  return (
    <Fragment>
     
    </Fragment>
  );
});

SettingOffCanvas.displayName = "SettingOffCanvas";
export default SettingOffCanvas;
