import {
  Grid,
  Container,
  Title,
  Text,
  Flex,
  Switch,
  Box,
  Modal,
  Collapse,
} from '@mantine/core';
import { ModalWithReducer } from '@/context/ModalProvider';
import { useContext, useEffect } from 'react';
import Image from 'next/image';

import { IconChevronDown } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { IconCheck, IconX } from '@tabler/icons-react';
import ButtonComponent from '@/components/Button';
import { IMAGES_BASE_URL } from '@/api/client';

export default function GDPR({ content }) {
  // const cookieContent = content.cookie
  const { modalOpenState, dispatch } = useContext(ModalWithReducer);
  const [opened, { toggle }] = useDisclosure(false);
  useEffect(() => {
    const storageState = localStorage.getItem('myStateKey');
    if (storageState === 'accepted' || storageState === 'decline') {
      dispatch({ type: 'Close' });
    } else {
      dispatch({ type: 'GDPRMODAL' });
    }
  }, [modalOpenState?.useCookie, dispatch]);

  const handleAccept = () => {
    localStorage.setItem(
      'option',
      JSON.stringify({
        analytics: modalOpenState?.useCookie?.analytics,
        essential: modalOpenState?.useCookie?.essential,
      }),
    );
    localStorage.setItem('myStateKey', 'accepted');
    dispatch({ type: 'Close' });
  };

  const handleDecline = () => {
    localStorage.setItem(
      'option',
      JSON.stringify({
        analytics: false,
        essential: false,
      }),
    );
    localStorage.setItem('myStateKey', 'decline');
    dispatch({ type: 'Close' });
  };
  const handleClose = () => {
    dispatch({ type: 'Close' });
  };
  return (
    <Modal
      opened={modalOpenState?.showModalGpdr}
      onClose={handleClose}
      centered
      size="xl"
      padding="0"
      radius="25px"
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={false}
      dir="rtl"
    >
      <Container size="md" pb="xl">
        <Box pt="xl">
          <Flex justify="space-between" align="center">
            <Title order={3} color="primary.1">
              {content?.heading_title}{' '}
            </Title>
            <Image
              width={60}
              height={60}
              alt="cookie"
              src={`${IMAGES_BASE_URL}${content?.image?.data?.attributes?.url}`}
            />
          </Flex>

          <Box my="xl">
            <Text color="primary.1" fw="500" component="p">
              {content?.description}
            </Text>
            <Box mt="xl">
              <ButtonComponent
                className="cursor-pointer"
                onClick={toggle}
                rightIcon={<IconChevronDown size="23px" />}
                title={content?.customize}
                type="secondaryOutline"
              />
              <Collapse in={opened} mt="xl">
                <Grid>
                  <Grid.Col xs={3}>
                    <Switch
                      checked={modalOpenState?.useCookie?.essential}
                      onChange={() => dispatch({ type: 'ESSENTIAL' })}
                      color="teal"
                      size="lg"
                      thumbIcon={
                        modalOpenState?.useCookie?.essential ? (
                          <IconCheck size="0.8rem" color="green" stroke={3} />
                        ) : (
                          <IconX size="0.8rem" color="red" stroke={3} />
                        )
                      }
                    />
                  </Grid.Col>
                  <Grid.Col xs={9}>
                    <Title order={4} color="primary.6">
                      {content?.toggle_option_essential?.title}
                    </Title>
                    {/* {modalOpenState.useCookie?.essential === false &&

                                            <>

                                                <Alert icon={<IconAlertCircle size="1rem" />} title="If you turn off the cookie, you will no longer be able to use a demo request." color="red">
                                                </Alert>
                                            </>


                                        } */}
                    <Text component="p" color="primary.6" mt="md">
                      {content?.toggle_option_essential?.description}
                    </Text>
                  </Grid.Col>
                  <Grid.Col xs={3} mt="md">
                    <Switch
                      checked={modalOpenState?.useCookie?.analytics}
                      onChange={() => dispatch({ type: 'ANALYTICAL' })}
                      color="teal"
                      size="lg"
                      thumbIcon={
                        modalOpenState?.useCookie?.analytics ? (
                          <IconCheck size="0.8rem" color="green" stroke={3} />
                        ) : (
                          <IconX size="0.8rem" color="red" stroke={3} />
                        )
                      }
                    />
                  </Grid.Col>
                  <Grid.Col xs={9} mt="md">
                    <Title order={4} color="primary.6">
                      {content?.toggle_option_analytics?.title}
                    </Title>
                    <Text component="p" color="primary.6" mt="md">
                      {content?.toggle_option_analytics?.description}
                    </Text>
                  </Grid.Col>
                </Grid>
              </Collapse>
              <Grid mt="50px">
                <Grid.Col ta="center" sm={6} md={6} className="flex-center">
                  <ButtonComponent
                    title={content?.accept_button?.title}
                    className="cursor-pointer"
                    actionType="submit"
                    onClick={handleAccept}
                    type={content?.accept_button?.type}
                    width="100px"
                  />
                </Grid.Col>
                <Grid.Col ta="center" sm={6} md={6} className="flex-center">
                  <ButtonComponent
                    title={content?.decline_button?.title}
                    className="cursor-pointer"
                    width="100px"
                    type={content?.decline_button?.type}
                    onClick={handleDecline}
                  />
                </Grid.Col>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
}
