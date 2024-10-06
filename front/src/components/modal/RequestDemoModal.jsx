import { useContext, Fragment } from 'react';
import { ModalWithReducer } from '@/context/ModalProvider';
import { Modal } from '@mantine/core';
import RequestDemo from '@/components/RequestDemo';
import { pages } from 'public/assets/contentJson';

export default function RequestDemoModal({ title, description }) {
  const { modalOpenState, dispatch } = useContext(ModalWithReducer);
  const contactForm = pages?.contact_us;

  return (
    <>
      <Modal
        //dir="rtl"
        className="demo"
        opened={modalOpenState?.demoModalOpen}
        title=""
        size="auto"
        radius="lg"
        onClose={() => dispatch({ type: 'Close' })}
        centered
      >
        {contactForm?.sections?.map((section, idx) => (
          <Fragment key={idx}>
            {section.type === 'contact-form' ? (
              <>
                <RequestDemo
                  demo={section?.data}
                  source="modal"
                  displayBg="none"
                  pLayout="0"
                  py="0"
                  bgColor="white"
                  description={description}
                  title={title}
                />
              </>
            ) : null}
          </Fragment>
        ))}
      </Modal>
    </>
  );
}
