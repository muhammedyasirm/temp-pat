import React from 'react';
import { useParams } from 'react-router-dom';  // Use useParams hook
import CommonBanner from "../../components/CommonBanner/commonBanner";
import { serviceContent } from '../../components/ServicePageLayout/serviceContent';

const ServicePage = () => {
  const { serviceId } = useParams();  // Destructure serviceId from useParams

  // Find the content for the specific service page
  const serviceData = serviceContent[serviceId];

  // If no content is found for the service, show a default message
  if (!serviceData) {
    return <p>Service not found</p>;
  }

  return (
    <>
      <CommonBanner
        imageSrc={serviceData.imageSrc} // Use the dynamic image source
        title={serviceData.title}
        subtitle={serviceData.subtitle}
      />
      <div className="service-description">
        <h2>{serviceData.title}</h2>
        <p>{serviceData.description}</p>
      </div>
    </>
  );
};

export default ServicePage;
