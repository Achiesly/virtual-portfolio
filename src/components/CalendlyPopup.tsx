import { Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

const CalendlyPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Modal */}
      <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-3xl mx-4 sm:mx-auto shadow-lg">
        {/* Close button */}
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-sm cursor-pointer"
            aria-label="Close popup"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Calendly iframe */}
        <iframe
          src="https://calendly.com/sylviavirtual/meeting"
          className="w-full"
            style={{ height: '70vh', minHeight: '400px', border: 'none' }}
          title="Schedule a meeting"
        />
      </div>
    </Dialog>
  );
};

export default CalendlyPopup;
