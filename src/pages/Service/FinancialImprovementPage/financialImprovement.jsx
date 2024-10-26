import ContactFormSection from '../../../components/ContactForm/formSection';
import ServiceBanner from '../../../components/ServiceBanner/serviceBanner';
import ServiceInfoCard from '../../../components/ServiceInfo/serviceInfoCard';
import TextSection from '../../../components/SolutionContent/textSection';

const subCategoriesWithIcon = [
  {
    categoryTitle: 'Deferred Revenue ',
    description:
      'Processes to manage deferred revenue, ensuring accurate tracking and recognition over time. By leveraging its expertise to analyze IT system data and reconcile it with GL accounts.',
    icon: '/defferedrevnue.png',
  },
  {
    categoryTitle: 'Revenue Recognition',
    description:
      'Implements frameworks for timely, compliant revenue recognition, enhancing financial transparency and accuracy.',
    icon: '/revenuerecogn.png',
  },
  {
    categoryTitle: 'Margin Analysis',
    description:
      'Conduct profit margin analysis to identify cost-saving and revenue growth opportunities, maximizing profitability and operational efficiency.',
    icon: '/MarginAnalysis.png',
  },
  {
    categoryTitle: 'Voucher Management',
    description:
      'Monitor both physical vouchers and digital wallets, overseeing sales processing in ERP systems and distribution to warehouses, dealers, and end-users.',
    icon: '/voucherMgmnt.png',
  },
];

const DetailedSection = [
  {
    detailedDescription:
      'Our Financial Improvement Projects focus on key areas such as deferred revenue, revenue recognition, voucher management, and margin analysis',
  },
  {
    detailedDescription:
      'We provide comprehensive assessments and actionable insights to enhance financial performance while ensuring compliance, efficiency, and profitability. Contact us to learn more about our financial improvement projects.',
  },
];

const FinancialImprovementPage = () => {
  const handleScrollToSection = (title) => {
    const section = document.getElementById(title);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServiceBanner
        title={'FINANCIAL IMPROVEMENT'}
        subtitle={'Some Sub Title'}
        primaryColor={'green'}
        secondaryColor={'yellow'}
        rightImage="/headerpicFIS.png"
      />

      <ServiceInfoCard
        subCategories={subCategoriesWithIcon}
        onReadMore={handleScrollToSection}
      />

      <div className="bg-[#1C1C1C] p-10 px-28 flex gap-6 lg-down:flex-col-reverse lg-down:px-4">
        <div className="lg:w-1/2 h-full lg:h-auto flex-grow flex items-center justify-center">
          <img
            src="/fi-pic.jpg"
            alt="Managed SOC"
            className="w-full h-[32rem] md-down:h-[20rem] object-cover rounded-sm shadow-md"
          />
        </div>
        <div className="w-1/2 lg-down:w-full">
          <TextSection description={DetailedSection[0].detailedDescription} />
        </div>
      </div>

      <div className="bg-[#1C1C1C] p-10 px-28 flex gap-6 lg-down:flex-col lg-down:px-4">
        <div className="w-1/2 lg-down:w-full">
          <TextSection description={DetailedSection[1]?.detailedDescription} />
        </div>
        <div className="w-1/2 lg-down:w-full">
          <ContactFormSection buttonColor="green" />
        </div>
      </div>
    </>
  );
};

export default FinancialImprovementPage;