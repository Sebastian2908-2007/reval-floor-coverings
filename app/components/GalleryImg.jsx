'use client'
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
const GalleryImg = ({photo}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      console.log('click');
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    const {
        path,
        alt,
        description
    } = photo;
    return(
        <>
        <div className="relative group overflow-hidden rounded-lg">
        <button onClick={() => openModal()} className="absolute inset-0 z-10" >
          <span className="sr-only">View photo</span>
        </button>
        <Image
          src={path}
          alt={alt}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ aspectRatio: "400/400", objectFit: "cover" }}
          description={description}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ZoomInIcon className="w-8 h-8 text-white" />
        </div>
      </div>



      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="
        mb-2
        relative flex 
        ">
       
       <Image
            className="object-contain"
            src={path}
            alt={alt}
            width={800} // Adjust the width as needed
            height={600} // Adjust the height as needed
          />  
    </div>
    <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          Close
        </button>
        </Modal>
      </>
    );
};

function ZoomInIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
        <line x1="11" x2="11" y1="8" y2="14" />
        <line x1="8" x2="14" y1="11" y2="11" />
      </svg>
    )
  }

export default GalleryImg;