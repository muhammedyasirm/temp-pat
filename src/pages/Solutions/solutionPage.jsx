import React from "react";
import { useParams } from "react-router-dom";
import SolutionBanner from "../../components/SolutioBanner/solutionBanner";
import SolutionContent from "../../components/SolutionContent/solutionContent";
import solutions from "./solutionService";
import TitleSection from "../../components/SolutionTitleSection/solutionTitleSection";

const SolutionPage = () => {
    const { solutionId } = useParams();
    const solutionData = solutions.find((solution) => solution.id === solutionId);
  
    if (!solutionData) {
      return <p>Solution not found</p>;
    }

  return (
    <>
      <SolutionBanner BannerImage={solutionData.BannerImage} />
      <TitleSection 
        mainTitle={solutionData.mainTitle} 
        titleDescription={solutionData.titleDescription} 
      />
      <SolutionContent
        subheading={solutionData.subheading1}
        highlighted={solutionData.subheading1Highlighted}
        description={solutionData.subheading1Description}
        image={solutionData.subheading1Image}
        subheading2={solutionData.subheading2}
        highlighted2={solutionData.subheading2Highlighted}
        description2={solutionData.subheading2Description}
        image2={solutionData.subheading2Image}
      />
    </>
  );
};

export default SolutionPage;
