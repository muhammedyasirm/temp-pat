import React from 'react';
import { useParams } from 'react-router-dom';
// import CommonBanner from "../../components/CommonBanner/commonBanner";
import { serviceContent } from '../../components/ServicePageLayout/serviceContent';
import ServiceInfoCard from '../../components/ServiceInfo/serviceInfoCard';
import FeedbackSection from '../../components/ServiceFeedBack/serviceFeedbackSection';
import ServiceBanner from '../../components/ServiceBanner/serviceBanner';

const ServicePage = () => {
  const { serviceId } = useParams();

  const serviceData = serviceContent[serviceId];

  if (!serviceData) {
    return <p>Service not found</p>;
  }

  return (
    <>
      <ServiceBanner title={serviceData.title} subtitle={serviceData.subtitle} />
      <ServiceInfoCard subCategories={serviceData.subCategoriesWithIcon}/>
      <FeedbackSection />
      <div className="service-description">
        <h2>{serviceData.title}</h2>
        <p>{serviceData.description}</p>
      </div>
    </>
  );
};

export default ServicePage;
