import ContactFormSection from '../../../components/ContactForm/formSection';
import ServiceBanner from '../../../components/ServiceBanner/serviceBanner';
import FeedbackSection from '../../../components/ServiceFeedBack/serviceFeedbackSection';
import ServiceInfoCard from '../../../components/ServiceInfo/serviceInfoCard';
import TextSection from '../../../components/SolutionContent/textSection';

const subCategoriesWithIcon = [
  {
    categoryTitle: 'Managed SOC',
    description:
      'Encompass proficient analysts who assist in deciphering data spread across diverse systems and continually monitor your environment for potential security threats.',
    icon: '/ManagedSOC.png',
    hasMoreContent: true,
  },
  {
    categoryTitle: 'Managed EDR',
    description:
      'Offers the expertise, processes, and technology required to promptly address endpoint-related threats through forensic data collection.',
    icon: '/ManagedEDR.png',
  },
  {
    categoryTitle: 'IS GRC & Consulting Services',
    description:
      'Places emphasis on information security as a business enabler, managing risks within a business tolerance context, aligning vulnerabilities with actual threats, and fostering alignment between people and security processes.',
    icon: '/is-consulting.png',
    hasMoreContent: true,
  },
  {
    categoryTitle: 'Additional Packages',
    description: `Penetration testing services\nCybersecurity program assessment & Benchmarking services\nTailored packages`,
    icon: '/additional-packages.png',
  },
  {
    categoryTitle: 'Personnel Security Training',
    description:
      'Train employees through cybersecurity awareness initiatives, enabling your organization to identify threats proactively.',
    icon: '/personal-training.png',
  },
];

const DetailedSection = [
  {
    title: 'Managed SOC',
    detailedDescription:
      'Upon identifying or detecting a potential exposure, we promptly notify you and provide guidance on incident remediation. We ensure round-the-clock monitoring, detection, analysis, and response to threats. We provide robust defence against threats with complete visibility and swift response capabilities. We calculate the impact of security threats and the likelihood of risks occurring from a centralized location. We leverage threat detection intelligence to monitor data sources, facilitated by a team of over 450 security analysts. We aid in meeting industry-specific compliance requirements and offer the support of a dedicated cyber security manager.',
  },
  {
    title: 'Information Security GRC & Consulting Services',
    detailedDescription:
      'We specialize in delivering comprehensive Information Security Consulting Services tailored to your organization. While your organization may recognize information security as a critical function, it may not be strategically driven through Governance, Risk, and Compliance-based models. Our Information Security consultancy services encompass, but are not limited to:',
  },
  {
    detailedDescription:
      'Our Cybersecurity Awareness Training program offers interactive, scenario-based training material for your employees, providing a practical and reliable means to gauge employees. Contact us via email to learn more about our training program and information security services.',
  },
];

const isgpoints = [
  {
    point: 'Information Security Workshop',
  },
  {
    point: 'Risk Identification, Risk Management, Control, and Risk Monitoring Framework',
  },
  {
    point: 'Delivery of Information Security awareness programs and campaigns',
  },
  {
    point: 'Designing Information Systems Controls',
  },
  {
    point: 'Data Classification and Data Lifecycle',
  },
  {
    point: 'Disaster Recovery and Business Continuity Planning',
  },
  {
    point: 'Information Security Auditing Control and Framework',
  },
  {
    point: 'Transfer of regulatory and industry compliance knowledge',
  },
];


const InformationSecurityPage = () => {
  const handleScrollToSection = (title) => {
    const section = document.getElementById(title);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ServiceBanner
        title={'Information Security'}
        subtitle={'Some Sub Title'}
        primaryColor={'#1bbde0'}
        secondaryColor={'yellow'}
        rightImage="/sample.png"
      />
      
      <ServiceInfoCard
        subCategories={subCategoriesWithIcon}
        onReadMore={handleScrollToSection}
      />

      <div className="bg-[#1C1C1C] p-10 px-28 flex gap-6 lg-down:flex-col lg-down:px-4" id="Managed SOC">
        <div className='w-1/2 lg-down:w-full'>
        <TextSection
          title={DetailedSection[0].title}
          description={DetailedSection[0].detailedDescription}
        />
        </div>
        <div className="lg:w-1/2 h-full lg:h-auto flex-grow flex items-center justify-center">
          <img
            src="/is-right.png"
            alt="Managed SOC"
            className="w-full h-[32rem] md-down:h-[20rem] object-cover rounded-sm shadow-md"
          />
        </div>
      </div>

      <div className="bg-[#1C1C1C] p-10 px-28 flex gap-6 lg-down:flex-col-reverse lg-down:px-4" id="IS GRC & Consulting Services">
        <div className="lg:w-1/2 h-full lg:h-auto flex-grow flex items-center justify-center">
          <img
            src="/is-left.png"
            alt="Information Security GRC"
            className="w-full h-[33rem] md-down:h-[20rem] object-cover rounded-sm shadow-md"
          />
        </div>
        <div className='w-1/2 lg-down:w-full'>
        <TextSection
          title={DetailedSection[1].title}
          description={DetailedSection[1].detailedDescription}
        />
        </div>
      </div>

      <div className="bg-[#1C1C1C] p-10 px-28 lg-down:px-4">
        <FeedbackSection
          cubePoints={isgpoints.map((point) => ({ description: point.point }))}
        />
      </div>

      <div className="bg-[#1C1C1C] p-10 px-28 flex gap-6 lg-down:flex-col lg-down:px-4">
        <div className='w-1/2 lg-down:w-full'>
        <TextSection description={DetailedSection[2]?.detailedDescription} />
        </div>
        <div className="w-1/2 lg-down:w-full">
          <ContactFormSection />
        </div>
      </div>
    </>
  );
};

export default InformationSecurityPage;
