import { Container, Title, Text, Button, Box, Modal } from '@mantine/core';
import { ModalWithReducer } from '@/context/ModalProvider';
import { useContext } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { content } from 'public/assets/contentJson';
import Markdown from '../Markdown';
import { useRouter } from 'next/router';

export default function SuccessModal() {
  const submission = content.section_request_demo.submission_modal;
  const resume_submission = content?.career?.apply_form?.resume_submission;

  const { modalOpenState, dispatch } = useContext(ModalWithReducer);
  const handleClose = () => {
    dispatch({ type: 'Close' });
  };
  const router = useRouter();
  const resume = router.pathname.includes('apply');
  return (
    <>
      <Modal
        opened={
          resume ? modalOpenState?.resumeModal : modalOpenState?.successModal
        }
        onClose={handleClose}
        centered
        size="xl"
        radius="25px"
      >
        <Container size="md" pb="xl">
          <Box align="center">
            <DotLottiePlayer
              autoplay
              loop
              mode="normal"
              src="/assets/animations/Submission Complete.lottie"
              style={{ height: '200px', width: '200px', zIndex: '999' }}
            ></DotLottiePlayer>
            <Title order={3} color="success.1">
              {resume
                ? isRTL
                  ? resume_submission?.header?.fa
                  : resume_submission?.header?.en
                : isRTL
                ? submission?.header?.fa
                : submission?.header?.en}
            </Title>
            <Box my="xl">
              <Text color="primary.1" fw="700">
                <Markdown
                  text={
                    resume
                      ? isRTL
                        ? resume_submission?.description?.fa
                        : resume_submission?.description?.en
                      : isRTL
                      ? submission?.description?.fa
                      : submission?.description?.en
                  }
                />
              </Text>
            </Box>
            <Button
              className="text-medium"
              bg="secondary.0"
              color="secondary.2"
              onClick={handleClose}
            >
              {isRTL ? submission?.ok?.fa : submission?.ok?.en}
            </Button>
          </Box>
        </Container>
      </Modal>
    </>
  );
}
