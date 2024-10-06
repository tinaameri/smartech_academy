/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Container, Text, List, Grid, MediaQuery } from '@mantine/core';
import {Logo} from '@/components/Logo';
import Link from 'next/link';
//import { useThemeContext } from '@/context/theme';
import TrustLogo from '@/components/footer/TrustLogo';
import { useMediaQuery } from '@mantine/hooks';
export default function TopFooter({ links, trust, logo }) {
  // const { setActiveTab } = useThemeContext();
  // const handleRouteClick = async (route) => {
  //   //await setActiveTab(route);
  //   window.scrollTo({ top: 100, behavior: 'smooth' });
  // };

  // const handleDeactive = (event) => {
  //   event.preventDefault();
  // };
  const largerMidScreen = useMediaQuery('(min-width: 64em)'); //(min-1024)lg

  return (
    <Box bg="primary.1" py="80px" mih="400px">
      <Container size="1372px">
        <Grid columns={5} spacing="48px">
          <Grid.Col style={{ minHeight: '50px' }} md={3} lg={1} xl={1}>
            <Logo logo={logo} position="footer" />
            <MediaQuery smallerThan={'lg'} styles={{ display: 'none' }}>
              <Box>
                <TrustLogo items={trust} />
              </Box>
            </MediaQuery>
          </Grid.Col>

          <Grid.Col md={5} lg={4} xl={4} px="sm">
            <Grid>
              {links.map((item, idx) => (
                <Grid.Col key={idx} md={6} lg={3} xl={3}>
                  <Text component="span" color="gray.5">
                    {item.title}
                  </Text>
                  <List listStyleType="none" size="sm">
                    {item?.links?.map((subItem, idx) => (
                      <List.Item
                        py="xs"
                        key={idx}
                        //onClick={() => handleRouteClick(subItem?.value)}
                      >
                        <Link prefetch={false} href={subItem?.link} legacyBehavior>
                          <a
                            target={subItem.newPage ? '_blank' : '_self'}
                            //onClick={(e) => handleDeactive(e)}
                          >
                            <Text
                              component="span"
                              color="white"
                              sx={(theme) => ({
                                '&:hover': {
                                  color: theme.colors.secondary[1],
                                },
                              })}
                            >
                              {subItem?.title}
                            </Text>
                          </a>
                        </Link>
                      </List.Item>
                    ))}
                  </List>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
          <MediaQuery largerThan={'lg'} styles={{ display: 'none' }}>
            <Box w="100%">
              <Grid.Col
                style={{ minHeight: '50px' }}
                md={5}
                lg={5}
                xl={1}
                orderMd={2}
              >
                <TrustLogo items={trust} />
              </Grid.Col>
            </Box>
          </MediaQuery>
        </Grid>
      </Container>
    </Box>
  );
}
