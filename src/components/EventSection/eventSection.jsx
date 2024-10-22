import React, { useState } from "react";
import ReservationDialog from "./eventRegister";

const EventCard = ({ title, date, description, image }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
        <div className="flex justify-between md-down:flex-col  bg-white">
      <div className="flex flex-col py-4 pl-8 w-[60%] md-down:w-full justify-center">
        <div className="text-6xl lg-down:text-3xl font-bold text-black mb-2 font-barlow">
          {title}
        </div>
        <div className="text-gray-700 text-2xl lg-down:text-xl mb-6 font-montserrat leading-8">
          {description}
        </div>
        <div className="flex lg-down:justify-start justify-end lg-down:mt-5 mt-7">
          <button className="bg-primary-orange text-white py-3 sm-down:py-2 sm-down:px-4 px-8 text-lg md-down:text-sm font-montserrat"
          onClick={handleOpenDialog}
          >
            Reserve Now
          </button>
        </div>
      </div>

      <div className="relative w-[50%] md-down:w-full flex justify-end">
        <img src={image} alt="event" className="w-[70%] md-down:w-[60%] object-fill" />
        <div className="absolute inset-0 flex items-center md-down:justify-start justify-center">
          <div className="text-7xl font-bold font-barlow text-black text-center ml-5 md-down:ml-28">
            {date.split(" ")[0]}
            <br />
            {date.split(" ")[1]}
          </div>
        </div>
      </div>
    </div>
    <ReservationDialog
        isOpen={dialogOpen}
        onClose={handleCloseDialog}
        title={title}
        date={date}
      />
    </>
  );
};

const EventSection = () => {
  return (
    <div className="bg-black flex flex-col gap-4">
      <EventCard
        title="NEW CONFERENCE EVENT"
        date="27 SEP"
        description="Maximize your business potential with our tailored solutions. From
          revenue assurance to fraud management, Profit Assurance Technology
          delivers expert services to enhance your financial performance and
          safeguard your operations."
        image="/events-logo1.png"
      />
      <EventCard
        title="NEW TECHNICAL SEMINAR"
        date="07 DEC"
        description="Maximize your business potential with our tailored solutions. From
          revenue assurance to fraud management, Profit Assurance Technology
          delivers expert services to enhance your financial performance and
          safeguard your operations."
        image="/events-logo2.png"
      />
      <EventCard
        title="NEW TECHNICAL SEMINAR"
        date="07 DEC"
        description="Maximize your business potential with our tailored solutions. From
          revenue assurance to fraud management, Profit Assurance Technology
          delivers expert services to enhance your financial performance and
          safeguard your operations."
        image="/events-logo2.png"
      />
    </div>
  );
};

export default EventSection;
