import ContactFormSection from '../../../components/ContactForm/formSection';
import ServiceBanner from '../../../components/ServiceBanner/serviceBanner';
import FeedbackSection from '../../../components/ServiceFeedBack/serviceFeedbackSection';
import ServiceInfoCard from '../../../components/ServiceInfo/serviceInfoCard';
import ManagedSOC from '../../../components/SolutionCard/solutionCard';
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
    categoryTitle: 'Consulting Services',
    description:
      'We specialize in delivering comprehensive Information Security Consulting Services tailored to your organization.',
    icon: '/consulting.png',
  },
  {
    categoryTitle: 'Information Security GRC',
    description:
      'Your organization may recognize information security as a critical function, it may not be strategically driven through Governance, Risk, and Compliance-based models.',
    icon: '/iSGRC.png',
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
    title: 'Information Security GRC',
    detailedDescription:
      'We offer comprehensive Information Security Consulting Services specifically tailored to align with your organization’s strategic objectives and security needs. Our approach leverages Governance, Risk, and Compliance (GRC) frameworks to position security as a foundational business enabler, fostering resilience, adaptability, and proactive defense in today’s evolving threat landscape. By integrating GRC, we address critical risks, strengthen regulatory compliance, and streamline security processes to align with industry standards and best practices, ultimately empowering your organization to operate securely and efficiently.',
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
    point:
      'Risk Identification, Risk Management, Control, and Risk Monitoring Framework',
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
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServiceBanner
        title={'INFORMATION SECURITY'}
        primaryColor={'#1B6F86'}
        rightImage="/sample.png"
      />

      <ServiceInfoCard
        subCategories={subCategoriesWithIcon}
        onReadMore={handleScrollToSection}
      />

      <div className="bg-[#1C1C1C] p-5" id="Managed SOC">
        <ManagedSOC
          title={DetailedSection[0].title}
          description={DetailedSection[0].detailedDescription}
          imageUrl="/is-right.png"
        />
      </div>

      <div className="bg-[#1C1C1C] p-5" id="Information Security GRC">
        <div className="flex flex-col w-[85%] lg-down:w-full mx-auto overflow-hidden rounded shadow-lg py-4">
          <div className='flex'>
            <div className='w-[50%] lg-down:hidden'></div>
          <h2 className=" text-4xl md-down:text-2xl font-barlow font-bold text-white ml-6 lg-down:ml-0 mb-3 max-w-[50%] lg-down:max-w-full">
            {DetailedSection[1].title}
          </h2>
          </div>
          <div className="px-10 lg-down:px-0">
            <div className="flex bg-[#e3e3e3] rounded lg-down:flex-col">
            <div className="flex-1 -mt-16 lg-down:mt-0 mr-6 p-6 lg-down:p-4 lg-down:mr-0 max-h-[30rem] xl-down:max-h-full">
                <img
                  src="/is-left.png"
                  alt={DetailedSection[1].title}
                  className="object-cover w-full h-full lg-down:w-full lg-down:h-auto shadow-2xl"
                />
              </div>
              <div className=" py-4 flex-1 lg-down:px-4 flex-col">
                <p className="text-[#141414] text-lg font-montserrat md-down:text-sm">
                  {DetailedSection[1].detailedDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left bg-[#1C1C1C] p-5 px-36 lg-down:px-4">
        <h3 className="text-4xl md-down:text-2xl font-semibold pb-4 font-barlow max-w-[60%] xl-down:max-w-full text-white">
          Our Information Security consultancy services encompass, but are not
          limited to:
        </h3>
      </div>

      <div className="bg-[#1C1C1C] p-5 px-36 lg-down:px-4">
        <FeedbackSection
          cubePoints={isgpoints.map((point) => ({ description: point.point }))}
          cubeIcon="/blue-cube.png"
        />
      </div>

      <div className="bg-[#1C1C1C] p-10 lg-down:p-5 px-36 flex gap-6 lg-down:flex-col lg-down:px-4">
        <div className="w-1/2 lg-down:w-full">
          <TextSection description={DetailedSection[2]?.detailedDescription} />
        </div>
        <div className="w-1/2 lg-down:w-full">
          <ContactFormSection buttonColor="#1B6D7E" />
        </div>
      </div>
    </>
  );
};

export default InformationSecurityPage;