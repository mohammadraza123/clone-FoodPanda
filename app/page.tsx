import React from "react";
import SectionHero from "./Sections/SectionHero";
import PageWrapper from "./Components/PageWrapper";
import SectionPrepareFood from "./Sections/SectionPrepareFood";
import SectionCity from "./Sections/SectionCity";
import homeVendor from "../public/assets/Images/home-vendor.jpg";
import homeCorporate from "../public/assets/Images/home-corporate.jpg";
import SectionFaq from "./Sections/SectionFaq";
import SectionMobileApps from "./Sections/SectionMobileApps";
export default function page() {
  return (
    <>
      <PageWrapper>
        <SectionHero />
        <SectionPrepareFood
          heading="You prepare the food, we handle the rest"
          image={homeVendor}
          alt="home vendor"
          modalHeading="Partner with Us – List Your Restaurant or Store!"
          modalContent="Want to reach millions of new customers and grow your business? We're here to help!<br /> It's easy: We showcase your menu and products online, assist with order processing, and ensure swift delivery to your customers.<br /> Join us today and expand your reach effortlessly!"
          buttonText="Get Started"
        />
        <SectionCity />
        <SectionMobileApps />
        <SectionPrepareFood
          heading="Take your office out to lunch"
          image={homeCorporate}
          alt="home Corporate"
          modalHeading="Our business"
          modalContent="Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more."
          buttonText="Get Started"
        />
        <SectionFaq />
      </PageWrapper>
    </>
  );
}
