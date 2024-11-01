import ContactFormSection from '../../../components/ContactForm/formSection';
import ServiceBanner from '../../../components/ServiceBanner/serviceBanner';
import ServiceInfoCard from '../../../components/ServiceInfo/serviceInfoCard';
import ManagedSOC from '../../../components/SolutionCard/solutionCard';
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
      'Our Financial Improvement Projects target essential areas like deferred revenue, revenue recognition, voucher management, and margin analysis to enhance financial clarity and efficiency. We ensure accurate tracking of deferred revenue, implement compliant revenue recognition frameworks, conduct in-depth margin analysis for profitability insights, and manage voucher distribution across physical and digital channels. These initiatives strengthen financial integrity, optimize revenue streams, and support sustainable growth.',
  },
  {
    detailedDescription:
      'We provide comprehensive assessments and actionable insights to enhance financial performance while ensuring compliance, efficiency, and profitability. Contact us to learn more about our financial improvement projects.',
  },
];

const FinancialImprovementPage = () => {
  return (
    <>
      <ServiceBanner
        title={'FINANCIAL IMPROVEMENT'}
        subtitle={'Some Sub Title'}
        primaryColor={'#8ec63f'}
        rightImage="/headerpicFIS.png"
      />

      <ServiceInfoCard
        subCategories={subCategoriesWithIcon}
      />

      <div className="bg-[#1C1C1C] p-5" id="Managed SOC">
        <ManagedSOC
          title={DetailedSection[0].title}
          description={DetailedSection[0].detailedDescription}
          imageUrl="/fi-pic.jpg"
        />
      </div>

      <div className="bg-[#1C1C1C] p-10 px-28 flex gap-6 lg-down:flex-col lg-down:px-4">
        <div className="w-1/2 lg-down:w-full">
          <TextSection description={DetailedSection[1]?.detailedDescription} />
        </div>
        <div className="w-1/2 lg-down:w-full">
          <ContactFormSection buttonColor="#8ec63f" />
        </div>
      </div>
    </>
  );
};

export default FinancialImprovementPage;
