import MeetingCaptureForm from "@app/elements/form/hubspot/MeetingCaptureForm";
import ContainerLayout from "@app/elements/layouts/Container";

const CalendarSection: React.FC = () => {
  return (
    <section className="section">
      <ContainerLayout>
        <div className="center-layout">
          <MeetingCaptureForm />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default CalendarSection;
