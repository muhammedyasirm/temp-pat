import ContactFormSection from '../../../components/ContactForm/formSection';
import ServiceBanner from '../../../components/ServiceBanner/serviceBanner';
import ServiceInfoCard from '../../../components/ServiceInfo/serviceInfoCard';
import ManagedSOC from '../../../components/SolutionCard/solutionCard';
import TextSection from '../../../components/SolutionContent/textSection';

const subCategoriesWithIcon = [
  {
    categoryTitle: 'Commision Assurance',
    description:
      'Ensure accurate commission payments and prevent overpayment through regular assessments and automated monitoring of commission systems.',
    icon: '/comission-assurance.svg',
  },
  {
    categoryTitle: 'Wangiri',
    description:
      'Protect your business from Wangiri fraud by identifying suspicious one-ring calls and implementing automated measures to prevent revenue loss.',
    icon: '/wangiri.svg',
  },
  {
    categoryTitle: 'IRSF',
    description:
      'Detect and mitigate International Revenue Share Fraud (IRSF) through real-time monitoring and advanced fraud detection techniques.',
    icon: '/irsf.svg',
  },
  {
    categoryTitle: 'Dealer Fraud',
    description:
      'Identify and manage fraud risks within your dealer network by enforcing compliance and implementing fraud detection solutions.',
    icon: '/dealer-fraud.svg',
  },
  {
    categoryTitle: 'Grey Route Detection',
    description:
      'Eliminate grey route traffic and prevent revenue leakage by identifying unauthorized routing and implementing effective monitoring systems.',
    icon: '/grey-route-detection.svg',
  },
];

const DetailedSection = [
  {
    detailedDescription:
      "Fraud management requires immediate action, and PAT ensures 24/7 monitoring of telecom operators' networks, with dedicated staff always on hand. Our managed services focus on preventing well-known types of telecom fraud, including: ",
  },
  {
    detailedDescription:
      'We provide in-depth assessments and implement advanced fraud detection solutions to protect your business from revenue loss and operational risks. Contact us to learn more about our Fraud Management Managed services.',
  },
];

const isgpoints = [
  {
    point: 'Wangiri',
  },
  {
    point: 'IRSF',
  },
  {
    point: 'Dealer Fraud',
  },
  {
    point: 'Grey Route Detection',
  },
];

const FraudManagementPage = () => {

  return (
    <>
      <ServiceBanner
        title={'FRAUD DETECTION'}
        subtitle={'Some Sub Title'}
        primaryColor={'#f15930'}
        secondaryColor={'yellow'}
        rightImage="/sample.png"
      />

      <ServiceInfoCard
        subCategories={subCategoriesWithIcon}
      />

      <div className="bg-[#1C1C1C] p-5">
        <ManagedSOC
          title={DetailedSection[0].title}
          description={DetailedSection[0].detailedDescription}
          imageUrl="/fm-pc.jpg"
          isgpoints={isgpoints}
        />
      </div>
      <div
        className="bg-[#1C1C1C] p-10 px-28 lg-down:px-4 flex gap-6 lg-down:flex-col"
      >
        <div className="w-1/2 lg-down:w-full">
          <TextSection
            title={DetailedSection[1].title}
            description={DetailedSection[1].detailedDescription}
          />
        </div>
        <div className="w-1/2 lg-down:w-full">
          <ContactFormSection buttonColor="#f15930" />
        </div>
      </div>

      <div className="bg-[#1C1C1C] p-10 px-28 flex gap-6">
        <TextSection description={DetailedSection[2]?.detailedDescription} /> 
      </div>
    </>
  );
};

export default FraudManagementPage;
