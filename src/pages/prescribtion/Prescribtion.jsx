import React from "react";
import Button from "../../components/ui/Button";
import { GoCalendar } from "react-icons/go";
import { AiOutlineInsurance } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import PrescribtionSteps from "./PrescribtionSteps";
import PayingCard from "./PayingCard";
import OnlinePrescriptionService from "./OnlinePrescriptionService";

const Prescribtion = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mt-10"
      >
        <path
          fill="rgb(10, 124, 139)"
          fill-opacity="0.9"
          d="M0,288L60,266.7C120,245,240,203,360,186.7C480,171,600,181,720,176C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <section className="max-w-[1200px] mx-auto px-2">
        {/* book an appointment */}
        <div className="sm:w-2/3">
          <h1 className="text-3xl font-semibold text-primaryDark font-poppins">
            Online prescriptions and refills available now
          </h1>
          <p className="py-5  text-base tracking-wide font-poppins">
            Get prescription refills on existing medications or new
            prescriptions online. Our board-certified primary care doctors are
            here to help with your online prescription needs. We accept most
            major insurance and it takes about 15 minutes! Speak with a doctor
            online today.
          </p>
        </div>
        <Button text="book an appointment" />
        <div className="py-10 sm:flex items-center gap-x-4">
          <div className="sm:w-1/3 flex items-center">
            <GoCalendar size="35px" fill="rgb(14, 132, 147)" />
            <p className="text-xl font-poppins pl-3">
              Medication services available 24/7 for adults and kids (3+)
            </p>
          </div>
          <div className="sm:w-1/3 flex items-center my-5 sm:m-0">
            <AiOutlineInsurance size="30px" fill="rgb(14, 132, 147)" />
            <p className="text-xl font-poppins pl-3">No insurance required</p>
          </div>
          <div className="sm:w-1/3 flex items-center">
            <HiHome size="30px" fill="rgb(14, 132, 147)" />
            <p className="text-xl font-poppins pl-3">
              Same-day prescriptions available*
            </p>
          </div>
        </div>

        <h1 className="py-5 text-3xl font-semibold text-primaryDark font-poppins text-center leading-8">
          3 simple steps to request your online prescription today
        </h1>
        {/* steps */}
        <div className="mt-5">
          <PrescribtionSteps
            img="https://plushcare.com/wp-content/uploads/2022/04/step1.jpg"
            step={1}
            todo="Book an Appointment"
            text="Book a same-day appointment from anywhere in the Nepal."
            flexFlow="flex-row"
          />
          <PrescribtionSteps
            img="https://plushcare.com/wp-content/uploads/2022/04/step2.jpg"
            step={2}
            todo="Talk to a doctor."
            text="Speak with a top doctor about your prescriptions on your
              smartphone or computer."
            flexFlow="md:flex-row-reverse"
          />
          <PrescribtionSteps
            img="https://plushcare.com/wp-content/uploads/2022/04/step3.jpg"
            step={3}
            todo="Pick up your prescriptions."
            text="We can send prescriptions to your local pharmacy."
            flexFlow="flex-row"
          />
        </div>
      </section>

      {/* paying card wrapper */}
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(10,124,139)"
            fill-opacity="1"
            d="M0,192L80,208C160,224,320,256,480,266.7C640,277,800,267,960,224C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        {/* paying card wrapper */}
        <div className="bg-[rgb(10,124,139)]">
          {/* paying card */}

          <div className="max-w-[1200px] mx-auto px-2">
            <div className="text-white">
              <h1 className="text-3xl font-semibold font-poppins text-center leading-8">
                Online prescription pricing details
              </h1>
              <h2 className="py-5 text-2xl text-center font-semibold font-poppins">
                How pricing works
              </h2>
              <p className="text-xl text-center">
                To quickly and easily get your prescription online, join our
                monthly membership program and save up to 80% on your
                prescriptions.
              </p>
            </div>
            {/* paying card */}
            <div className="mt-10 flex flex-col items-center md:flex-row align-top md:items-stretch justify-center gap-10">
              <PayingCard
                method="with insurance"
                darkColor="bg-[#0E8B96]"
                lightColor="bg-[#4ACACC]"
                firstVisitPayment="Copay"
                firstVisitText="For all visits"
                visitPrice="Often the same as an office visit. Most patients with in-network insurance pay $30 or less!"
              />
              <PayingCard
                method="without insurance"
                darkColor="bg-[#17C0CA]"
                lightColor="bg-[#85F2F4]"
                firstVisitPayment="Rs.1500"
                firstVisitText="Repeats only $69"
                visitPrice="Initial visits are $129 and follow-ups are only $69 for active members."
              />
            </div>
            <div className="text-center pt-10 flex flex-col items-center justify-center">
              <Button text="book an appointment" color="bg-[#40e0d0]" />
              <p className="text-sm text-white py-8">
                If we're unable to treat you, we'll provide a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OnlinePrescriptionService
        value={1}
        leftHeading="Online prescription services"
        leftDesc="From online prescriptions to prescription refills, our online medical
          services have you covered."
        rightHeading1="New prescriptions"
        rightHeading1Desc="Request a new prescription online. Our board-certified doctors can prescribe medications including antibiotics, birth control, antidepressants, hypertension medication, and more. We accept most major insurances, and online visits take about 15 minutes."
        rightHeading2="Prescription refills"
        rightHeading2Desc="Get your online prescription refills by speaking with a virtual doctor. Our physicians can write an online prescription refill after a medical evaluation on our platform. Your medication refills will be electronically sent to your nearest pharmacy."
        rightHeading3="Prescription discount card"
        rightHeading3Desc="Why pay full price for your prescriptions? Save at 50,000+ pharmacies with our prescription discount card. The card could help you save up to 80% on your prescriptions and medications the next time you visit the pharmacy"
      />
      <OnlinePrescriptionService
        leftHeading="Benefits of choosing an online prescription service"
        leftDesc=""
        rightImg1="https://plushcare.com/wp-content/uploads/2022/04/medication.svg"
        rightHeading1="Ease and simplicity of prescription receipt"
        rightHeading1Desc="Connecting with a top doctor to discuss your prescription is easier than ever. To get started, book an online appointment with one of our caring expert physicians. Then, attend your virtual visit through your phone or computer. Your doctor will listen to your questions, and help determine if you qualify for a prescription and what medication treatment options to consider. To receive your prescription, just choose a nearby pharmacy, where you will then be able to pick up your medication after the doctor sends the prescription. Overall, a virtual prescription appointment is a reliable and COVID-safe way to request and receive your medication."
        rightImg2="https://plushcare.com/wp-content/uploads/2022/04/accessible-healthcare.svg"
        rightHeading2="Convenient online doctor visits"
        rightHeading2Desc="Requesting a prescription online helps you save time. You can conveniently speak to a top primary care doctor from the comfort of home. With a virtual visit, you can skip traffic and avoid waiting rooms. Same-day appointments with our board-certified online doctors are often available, including on evenings, weekends, and major holidays. If you are feeling unwell, live in an area far from a doctor's office, or do not readily have access to transportation, an online doctor visit can be a convenient way to discuss a new prescription or prescription refill."
        rightImg3="https://plushcare.com/wp-content/uploads/2022/04/clock.svg"
        rightHeading3="Save time on prescription refills"
        rightHeading3Desc="Speaking with a doctor about a prescription online makes requesting a refill even easier. During your virtual visit, your doctor will review your medical history and any current prescription medications you are taking. Part of what your doctor determines during your visit will include the prescription refill dosage and treatment regimen. Prescription refill orders are electronically sent to a local pharmacy of your choice for pickup. We also make it easy to schedule follow-up appointments with your doctor for prescription refills and check-ins."
        rightImg4="https://plushcare.com/wp-content/uploads/2022/04/doctor.svg"
        rightHeading4="Speak with top online doctors"
        rightHeading4Desc="Our board-certified physicians are here for you. PlushCare's licensed primary care doctors have graduated from the top 50 medical schools in the United States and have an average of 15 years of clinical experience helping patients. You can get your prescription questions answered, find out more about treatment options, and work with your doctor to develop the right care plan for you. Our supportive physicians are highly trained to work with patients online and provide world-class care in a virtual setting. We are proud of the quality of personalized care we offer to our patients, and we look forward to helping you."
      />
    </>
  );
};

export default Prescribtion;
