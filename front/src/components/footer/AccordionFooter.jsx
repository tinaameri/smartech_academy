/* eslint-disable no-unused-vars */
import { Container, Accordion, Box, Text } from '@mantine/core';
import {Logo} from '@/components/Logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {TrustLogo} from '@/components/footer/TrustLogo';
import classes from '@/components/footer/AccordionFooter.module.scss'

function AccordionFooter({ links, trust, logo }) {
  const [show, setShow] = useState(false);


  const handleOpen = () => {
    setShow(true);
  };

  useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  //const { classes } = useStyles();

  return (
    <Box bg="third.1" py="45px" mih="480px">
      <Container size="xl">
        <Logo position="footer" logo={logo} />
        <Box bg="third.1">
          <Accordion classNames={classes}>
            {links.map((item) => (
              <Accordion.Item key={item.id} value={item?.id}>
                <Accordion.Control onClick={handleOpen}>
                  <span> {item?.title}</span>
                </Accordion.Control>
                {item?.links?.map((subItem, idx) => (
                  <Accordion.Panel
                    key={idx}
                  >
                    <Link prefetch={false} href={subItem?.link} legacyBehavior>
                      <a
                        target={subItem?.newPage ? '_blank' : '_self'}
                        aria-label={subItem?.title}
                      >
                        <Text
                          component="span"
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
                  </Accordion.Panel>
                ))}
              </Accordion.Item>
            ))}
          </Accordion>
        </Box>
        <TrustLogo items={trust} />
      </Container>
    </Box>
  );
}
export {AccordionFooter}