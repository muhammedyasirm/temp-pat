import ContactFormSection from '../../../components/ContactForm/formSection';
import ServiceBanner from '../../../components/ServiceBanner/serviceBanner';
import ServiceInfoCard from '../../../components/ServiceInfo/serviceInfoCard';
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
      'Revenue Assurance Managed Services is one of our core competencies and strengths. Our team averages 18 years of experience across Africa, Asia, and Europe, providing 24/7 managed services. We follow the TM Forum’s standard Revenue Assurance framework, addressing risks across rating and billing, network, finance, product, customer, and partner management',
  },
  {
    detailedDescription:
      'Our comprehensive evaluations and tailored solutions help improve operational efficiency and safeguard revenue integrity. Contact us to learn more about our Revenue Assurance Managed services.',
  },
];

const RevenueAssurancePage = () => {
  const handleScrollToSection = (title) => {
    const section = document.getElementById(title);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        onReadMore={handleScrollToSection}
      />

      <div className="bg-[#1C1C1C] p-10 px-28 flex gap-6" id="Managed SOC">
        <div className="lg:w-1/2 h-full lg:h-auto flex-grow flex items-center justify-center">
          <img
            src="/asset1.jpg"
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

      <div
        className="bg-[#1C1C1C] p-10 px-28 flex gap-6"
        id="IS GRC & Consulting Services"
      >
        <div className="w-1/2">
          <TextSection
            title={DetailedSection[1].title}
            description={DetailedSection[1].detailedDescription}
          />
        </div>
        <div className="w-1/2">
          <ContactFormSection />
        </div>
      </div>
    </>
  );
};

export default RevenueAssurancePage;
