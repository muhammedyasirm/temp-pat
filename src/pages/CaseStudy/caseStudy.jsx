import React from 'react';
import CaseStudiesList from '../../components/CaseStudyCard/caseStudyList';
import CommonBanner from '../../components/CommonBanner/commonBanner';

const CaseStudyPage = () => {
  return (
    <>
      <div className="bg-[#1C1C1C]">
        <CommonBanner
          imageSrc="/case-study-banner-bg.jpg"
          title="SUCCESS STORIES"
          subtitle="Discover how we've helped clients overcome challenges and achieve financial growth through tailored solutions"
        />
        <CaseStudiesList />
      </div>
    </>
  );
};

export default CaseStudyPage;