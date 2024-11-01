import ContactFormSection from '../../../components/ContactForm/formSection';
import ServiceBanner from '../../../components/ServiceBanner/serviceBanner';
import ServiceInfoCard from '../../../components/ServiceInfo/serviceInfoCard';
import TextSection from '../../../components/SolutionContent/textSection';

const subCategoriesWithIcon = [
  {
    categoryTitle: 'Capacity Utilization',
    description:
      'Effectively track network resource utilization to reduce costs and improve profit margins. Optimize network performance and revenue through strategic management and technology solutions.',
    icon: '/capacityUtil.png',
  },
  {
    categoryTitle: 'Roaming & A2B Services',
    description:
      'Comprehensive support for managing A2B SMS operations to enhance performance, reduce costs, and maintain quality. Streamline A2B and roaming services, ensuring seamless connectivity, and optimizing revenue.',
    icon: '/Roaming.png',
  },
];

const DetailedSection = [
  {
    detailedDescription:
      'Our processes are designed to enhance network performance and unlock revenue potential through strategic management, advanced technologies, and proactive solutions. Contact us to learn more about our carrier services.',
  },
];

const CarrierServicePage = () => {

  return (
    <>
      <ServiceBanner
        title={'CARRIER SERVICES'}
        subtitle={'Some Sub Title'}
        primaryColor={'#f15930'}
        secondaryColor={'yellow'}
        rightImage="/headerpicCS.png"
      />

      <ServiceInfoCard
        subCategories={subCategoriesWithIcon}
      />

      <div className="bg-[#1C1C1C] p-10 px-28 lg-down:px-4 flex gap-6 lg-down:flex-col">
        <div className="w-1/2 lg-down:w-full">
          <TextSection description={DetailedSection[0]?.detailedDescription} />
        </div>
        <div className="w-1/2 lg-down:w-full">
          <ContactFormSection buttonColor="#f15930" />
        </div>
      </div>

      <div
        className="h-[70vh] md-down:h-72 bg-cover bg-center md-down:w-full mx-auto md-down:rounded-none"
        style={{ backgroundImage: `url('/carrierPIC.jpg')` }}
      ></div>
    </>
  );
};

export default CarrierServicePage;