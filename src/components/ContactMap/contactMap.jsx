import React from 'react';

const ContactMap = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
      {/* Google Maps iframe */}
      <iframe
        title="Profit Assurance Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462632.3097041554!2d54.94761901640629!3d25.25009656420401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4bd75f3b39%3A0x40150c3f0a387318!2sPROFIT%20ASSURANCE%20INFORMATION%20TECHNOLOGY!5e0!3m2!1sen!2s!4v1695224210786!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      
      {/* Greyscale Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
          filter: 'grayscale(100%)', // Greyscale effect
          pointerEvents: 'none', // Prevent interaction with overlay
        }}
      ></div>
    </div>
  );
};

export default ContactMap;
