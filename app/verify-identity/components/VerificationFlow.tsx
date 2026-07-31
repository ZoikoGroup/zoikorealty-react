import Container from "./Container";
import {
  Step1Account,
  Step2Liveness,
  Step3KycMatrix,
  Step4SourceOfFunds,
  Step5Entity,
} from "./Steps";
import ContinuousScreening from "./ContinuousScreening";
import DigitalPassport from "./DigitalPassport";

export default function VerificationFlow() {
  return (
    <section className="bg-slate-50 py-8">
      {/* Frame splits 952 / 384 with a 28px gutter. */}
      <Container className="grid items-start gap-7 xl:grid-cols-[minmax(0,2.48fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-5">
          <Step1Account />
          <Step2Liveness />
          <Step3KycMatrix />
          <Step4SourceOfFunds />
          <Step5Entity />
          <ContinuousScreening />
        </div>
        <DigitalPassport />
      </Container>
    </section>
  );
}
