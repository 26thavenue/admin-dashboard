import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

type TModal = {
  bodyClassName?: string;
  header: string;
  description?: string;
  children?: ReactNode;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  closeAction?: () => void
};

export default function GlobalModal({
  bodyClassName,
  header,
  description,
  children,
  isOpen,
  setIsOpen,
  closeAction
}: TModal) {
  function closeModal() {
    setIsOpen && setIsOpen(!isOpen);
    closeAction && closeAction()
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`${twMerge(
                    `w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`,
                    bodyClassName
                  )}`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black flex justify-between items-center"
                  >
                    {header}
                    <IoCloseOutline
                      onClick={closeModal}
                      className="text-brand text-2xl cursor-pointer"
                    />
                  </Dialog.Title>
                  <Dialog.Description as="small" className="text-sm">
                    {description}
                  </Dialog.Description>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
