/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Container, Text, List, Grid, MediaQuery } from '@mantine/core';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
//import { useThemeContext } from '@/context/theme';
import { TrustLogo } from '@/components/footer/TrustLogo';
import { useHover } from '@mantine/hooks';

function TopFooter({ links, trust, logo }) {

  return (
    <Box bg="third.0" py="80px" mih="400px">
      <Container size="1372px">
        <Grid columns={5} spacing="48px">
          <Grid.Col style={{ minHeight: '50px' }}
            span={{ md: 3, lg: 1, xl: 1 }}>
            <Logo logo={logo} position="footer" />

            <Box visibleFrom='lg'>
              <TrustLogo items={trust} />
            </Box>
          </Grid.Col>

          <Grid.Col span={{ md: 5, lg: 4, xl: 4 }} px="sm">
            <Grid>
              {links.map((item, idx) => (
                <Grid.Col key={idx} md={6} lg={3} xl={3}>
                  <Text component="span" c="white" fz="md" fw={550}>
                    {item.title}
                  </Text>
                  <List listStyleType="none" size="sm" mt='xl'>
                    {item?.links?.map((subItem, idx) => {
                      const { hovered, ref } = useHover();

                      return (
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
                                ref={ref}
                                component="span"
                                c={hovered ? 'secondary.0' : 'gray.1'}
                                fw="400"

                              >
                                {subItem?.title}
                              </Text>
                            </a>
                          </Link>
                        </List.Item>
                      )
                    })}
                  </List>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
          <Box w="100%" visibleFrom='lg'>
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
        </Grid>
      </Container>
    </Box>
  );
}
export { TopFooter }