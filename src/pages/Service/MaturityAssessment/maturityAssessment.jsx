import ContactFormSection from '../../../components/ContactForm/formSection';
import ServiceBanner from '../../../components/ServiceBanner/serviceBanner';
import ServiceInfoCard from '../../../components/ServiceInfo/serviceInfoCard';
import TextSection from '../../../components/SolutionContent/textSection';

const subCategoriesWithIcon = [
  {
    categoryTitle: 'Technology',
    description:
      'Evaluates readiness and capability using frameworks that define levels of maturity. It identifies gaps and helps align technology with business goals.',
    icon: '/technology.svg',
  },
  {
    categoryTitle: 'Organization',
    description:
      'Helps align processes with goals, guiding improvements and strategic planning while enabling benchmarking against industry standards.',
    icon: '/organization.svg',
  },
  {
    categoryTitle: 'Processes',
    description:
      'Enhances performance, ensures consistency, and optimizes resource allocation.',
    icon: '/processes.svg',
  },
  {
    categoryTitle: 'Measurement And Reporting',
    description:
      'Involves systematically evaluating: Metrics and KPIsData CollectionAnalysis Reporting & Monitoring',
    icon: '/measurement-and-requirement.svg',
  },
];

const DetailedSection = [
  {
    detailedDescription:
      'Our RA Maturity Assessment service aligns with TM Forum standards, addressing key areas such as technology, organization, processes, and performance measurement and reporting. We deliver thorough evaluations and actionable insights to strengthen your revenue assurance capabilities.',
  },
  {
    detailedDescription:
      'Our team consists of highly qualified professionals with an average of 17 years of experience in the RAFM domain. The assessment highlights opportunities for improvement and growth. Contact us to learn more about how our RA Maturity Assessment can benefit your organization.',
  },
];

const MaturityAssessmentPage = () => {
  const handleScrollToSection = (title) => {
    const section = document.getElementById(title);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServiceBanner
        title={'MATURITY ASSESSMENT'}
        subtitle={'Some Sub Title'}
        primaryColor={'#8ec63f'}
        secondaryColor={'yellow'}
        rightImage="/MAheader.png"
      />

      <ServiceInfoCard
        subCategories={subCategoriesWithIcon}
        onReadMore={handleScrollToSection}
      />

      <div className="bg-[#1C1C1C] p-10 px-28 flex gap-6">
        <div className="lg:w-1/2 h-full lg:h-auto flex-grow flex items-center justify-center">
          <img
            src="/MA-pic.jpg"
            alt="Managed SOC"
            className="w-full h-[32rem] md-down:h-[20rem] object-cover rounded-sm shadow-md"
          />
        </div>
        <div className="w-1/2">
          <TextSection
            title={DetailedSection[0].title}
            description={DetailedSection[0].detailedDescription}
          />
        </div>
      </div>

      <div className="bg-[#1C1C1C] p-10 px-28 flex gap-6">
        <div className="w-1/2">
          <TextSection description={DetailedSection[1]?.detailedDescription} />
        </div>
        <div className="w-1/2">
          <ContactFormSection />
        </div>
      </div>
    </>
  );
};

export default MaturityAssessmentPage;