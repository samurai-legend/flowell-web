"use client";

import { useScript } from "@app/hooks/useScript";
import { useEffect } from "react";

const MeetingCaptureForm = () => {
  const { script } = useScript();

  useEffect(() => {
    script?.addEventListener("load", () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: "20835756",
          formId: "80013243-947a-42d9-aff4-979bf4094783",
          target: "#meetingCaptureHb",
        });
      }
    });
  }, [script]);

  return (
    <div>
      <div id="meetingCaptureHb"></div>
    </div>
  );
};

export default MeetingCaptureForm;
