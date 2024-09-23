import React from "react";
import CaseStudiesHeader from "../../components/CaseStudiesHeader/caseStudyHeader";
import CaseStudiesList from "../../components/CaseStudyCard/caseStudyList";

const CaseStudyPage = () => {
    return(
        <>
        <div className="bg-[#1C1C1C]">
         <CaseStudiesHeader />
         <CaseStudiesList />
         </div>
        </>
    )
}

export default CaseStudyPage;