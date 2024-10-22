import React, { useState } from 'react';
import { UserAvatar } from '@carbon/icons-react';
import CaseStudyModal from './caseStudyModal';

const CaseStudyCard = ({
  image,
  title,
  company,
  description,
  challenge,
  solution,
  outcome,
  quote,
  authorName,
  authorPosition,
  borderColor,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({}); // State to store modal data

  const openModal = () => {
    setModalData({
      image,
      stats: [
        { value: '1700', label: 'Lorem Ipsum Text', color: '#f15930' }, // Orange
        { value: '200', label: 'Lorem Ipsum Text', color: '#8ec63f' }, // Green
        { value: '37%', label: 'Lorem Ipsum Text', color: '#12d2d4' }, // Blue
      ],
      content: description,
      challenge,
      solution,
      outcome,
      quote,
      author: { name: authorName, position: authorPosition },
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}... `;
  };

  return (
    <div
      className={`max-w-md mx-auto bg-[#232323] bg-opacity-[80%] rounded-lg shadow-md overflow-hidden border-2 ${borderColor}`}
    >
      <div className="flex flex-col p-8 sm-down:p-4">
        <div className="md:flex-shrink-0 ">
          <img
            className="h-60 w-full object-cover rounded-lg"
            src={image}
            alt={title}
          />
        </div>
        <div className="mt-4">
          <div className="uppercase tracking-wide text-sm text-white font-semibold">
            {company}
          </div>
          <h3 className="block mt-1 text-lg leading-tight font-medium text-white">
            {title}
          </h3>
          <p className="mt-2 text-white">
            {truncateDescription(description, 120)}
            <span
              onClick={openModal}
              className="text-primary-blue cursor-pointer"
            >
              read more
            </span>
          </p>
          <div className="flex items-center mt-4">
            <div className="flex-shrink-0 text-white">
              <UserAvatar size={24} />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">{authorName}</p>
              <p className="text-sm text-white">{authorPosition}</p>
            </div>
          </div>
          <span
            onClick={openModal}
            className="text-primary-orange mt-4 block cursor-pointer"
          >
            Read more →
          </span>
        </div>
      </div>
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        {...modalData} // Spread the modalData to pass it to the modal
      />
    </div>
  );
};

export default CaseStudyCard;