import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { ModalBaseProps } from 'components/UI/Modals/types';
import cs from 'clsx';

const ModalBase: React.FC<ModalBaseProps> = ({
  close,
  isOpen,
  children,
  onAfterClose,
}) => {
  function closeModal() {
    if (onAfterClose) {
      onAfterClose();
    }
    close();
  }

  const exitButton = useRef(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-20 overflow-y-auto'
        onClose={closeModal}
      >
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay
              className={cs(
                'bg-opacity-30 absolute inset-0 z-0 transition-opacity bg-black'
              )}
            />
          </Transition.Child>
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='relative inline-block overflow-hidden align-middle bg-white text-left transition-all ease-in-out rounded-2xl p-6 min-w-[578px] shadow-xl'>
              <button
                ref={exitButton}
                className='w-0 h-0 pointer-events-none'
              />
              <button
                type='button'
                onClick={closeModal}
                className='absolute top-0 right-0 mr-[33.5px] mt-[23.5px]'
              >
                <img src='/icons/close-icon.svg' alt='x' />
              </button>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalBase;
