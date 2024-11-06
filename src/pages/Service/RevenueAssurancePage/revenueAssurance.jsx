import ContactFormSection from '../../../components/ContactForm/formSection';
import ServiceBanner from '../../../components/ServiceBanner/serviceBanner';
import ServiceInfoCard from '../../../components/ServiceInfo/serviceInfoCard';
import ManagedSOC from '../../../components/SolutionCard/solutionCard';
import TextSection from '../../../components/SolutionContent/textSection';

const subCategoriesWithIcon = [
  {
    categoryTitle: 'Rating & Billing',
    description:
      'Ensure accurate billing & revenue collection for services provided. Aims to minimize revenue leakage.',
    icon: '/rating-and-billing.svg',
  },
  {
    categoryTitle: 'Network & Usage Management',
    description:
      'Accurate tracking, monitoring, and billing of network usage to maximize revenue while minimizing losses due to errors or inefficiencies.',
    icon: '/network-and-usage-management.svg',
  },
  {
    categoryTitle: 'Finance & Accounting',
    description:
      'Designed to ensure that an organization accurately captures, records, and reports its revenue.',
    icon: '/finance-and-accounting.svg',
  },
  {
    categoryTitle: 'Product & Offers Management',
    description:
      'Focuses on ensuring that the pricing, promotions, and offerings associated with products are accurately implemented, tracked, and billed.',
    icon: '/product-and-offers-management.svg',
  },
  {
    categoryTitle: 'Customer Management',
    description:
      'Tracks billing, and relationship management with customers to maximize revenue while minimizing leakage due to billing errors, or service issues.',
    icon: '/customer-management.svg',
  },
  {
    categoryTitle: 'Partner Management',
    description:
      'Partnerships with third-party vendors, resellers, or affiliates are effectively managed to maximize revenue.',
    icon: '/partner-management.svg',
  },
];

const DetailedSection = [
  {
    detailedDescription:
      'Revenue Assurance Managed Services is one of our core competencies and strengths. With an average of 18 years of experience across Africa, Asia, and Europe, our team provides dedicated 24/7 managed services tailored to your needs. We adhere strictly to the TM Forum’s standard Revenue Assurance framework, addressing critical risks comprehensively across rating and billing, network integrity, financial controls, product management, customer satisfaction, and partner relations. Our expertise ensures robust protection of your revenue streams and operational continuity, empowering your business to proactively manage risks in an evolving global landscape.',
  },
  {
    detailedDescription:
      'Our comprehensive evaluations and tailored solutions help improve operational efficiency and safeguard revenue integrity. Contact us to learn more about our Revenue Assurance Managed services.',
  },
];

const RevenueAssurancePage = () => {
  return (
    <>
      <ServiceBanner
        title={'REVENUE ASSURANCE'}
        subtitle={'Some Sub Title'}
        primaryColor={'#1B6D7E'}
        secondaryColor={'yellow'}
        rightImage="/sample.png"
      />

      <ServiceInfoCard
        subCategories={subCategoriesWithIcon}
      />

      <div className="bg-[#1C1C1C] p-5" id="Managed SOC">
        <ManagedSOC
          title={DetailedSection[0].title}
          description={DetailedSection[0].detailedDescription}
          imageUrl="/asset1.jpg"
        />
      </div>

      <div
        className="bg-[#1C1C1C] p-10 lg-down:p-5 px-36 flex gap-6 lg-down:flex-col lg-down:px-4"
      >
        <div className="w-1/2 lg-down:w-full">
          <TextSection
            title={DetailedSection[1].title}
            description={DetailedSection[1].detailedDescription}
          />
        </div>
        <div className="w-1/2 lg-down:w-full">
          <ContactFormSection buttonColor='#1B6D7E'/>
        </div>
      </div>
    </>
  );
};

export default RevenueAssurancePage;
