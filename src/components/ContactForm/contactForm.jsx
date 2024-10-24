import React from 'react';
import ContactMap from '../ContactMap/contactMap';
import ContactFormSection from './formSection';
import AddressSection from './addressSection';

const ContactForm = () => {
  return (
    <>
      <div
        className="relative w-full bg-black py-10 px-20 md-down:px-0 flex lg-down:flex-col"
        style={{
          backgroundImage: `url('/analytics-bg.png')`,
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
        }}
      >
        <div className="w-1/2 lg-down:w-full px-8 md:px-16 py-10">
          <ContactFormSection />
        </div>
        <AddressSection />
      </div>

      <div>
        <ContactMap />
      </div>
    </>
  );
};

export default ContactForm;
