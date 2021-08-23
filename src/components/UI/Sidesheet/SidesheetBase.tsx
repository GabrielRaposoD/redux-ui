import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { SidesheetIntrinsicProps } from 'ducks/ui/types';

const SidesheetBase: React.FC<SidesheetIntrinsicProps> = ({
  close,
  isOpen,
  children,
  onAfterClose,
  width = 'normal',
}) => {
  function closeSidesheet() {
    if (onAfterClose) {
      onAfterClose();
    }
    close();
  }

  return (
    <Transition show={isOpen} as={Fragment} appear>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-20 min-h-full overflow-hidden'
        open={isOpen}
        onClose={close}
      >
        <div className='absolute inset-0 min-h-full overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='bg-opacity-30 absolute inset-0 z-0 transition-opacity bg-black' />
          </Transition.Child>

          <div className='fixed inset-y-0 right-0 z-20 flex max-w-full min-h-full pl-10'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div
                className='relative min-h-full'
                style={{ width: width === 'normal' ? '30vw' : '80vw' }}
              >
                <Transition.Child
                  as={Fragment}
                  enter={`ease-in-out ${
                    width === 'normal' ? 'duration-500' : 'duration-1000'
                  }`}
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave={`ease-in-out ${
                    width === 'normal' ? 'duration-500' : 'duration-1000'
                  }`}
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='-ml-14 absolute top-0 left-0 flex pt-4 pr-2'>
                    <button
                      onClick={closeSidesheet}
                      className='flex items-center justify-center bg-purple-500 rounded-lg w-9 h-[60px] outline-none'
                    >
                      <img src='/icons/exit-arrow.svg' />
                      <span className='sr-only'>Close panel</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex flex-col h-full overflow-y-auto bg-white'>
                  {children}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SidesheetBase;
