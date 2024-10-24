import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { serviceContent } from "../../components/ServicePageLayout/serviceContent";
import ServiceInfoCard from "../../components/ServiceInfo/serviceInfoCard";
import FeedbackSection from "../../components/ServiceFeedBack/serviceFeedbackSection";
import ServiceBanner from "../../components/ServiceBanner/serviceBanner";

const ServicePage = () => {
  const { serviceId } = useParams();
  const serviceData = serviceContent[serviceId];
  const feedbackRef = useRef(null);

  const handleScrollToFeedback = () => {
    feedbackRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!serviceData) {
    return <p>Service not found</p>;
  }

  return (
    <>
      <ServiceBanner
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        primaryColor={serviceData.primaryColor}
        secondaryColor={serviceData.secondaryColor}
      />
      <ServiceInfoCard
        subCategories={serviceData.subCategoriesWithIcon}
        onReadMore={handleScrollToFeedback}
      />
      <div ref={feedbackRef}>
        <FeedbackSection
          feedBack={serviceData.feedBack}
          feedBackAuthor={serviceData.feedBackAuthor}
          authorCompany={serviceData.authorCompany}
          authorImage={serviceData.authorImage}
          cubePoints={serviceData.cubePoints}
          graph={serviceData.graph}
        />
      </div>
    </>
  );
};

export default ServicePage;