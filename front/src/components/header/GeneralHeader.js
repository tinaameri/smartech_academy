import React,{ useContext } from 'react';
import Link from 'next/link';
import { ModalWithReducer } from '@/context/ModalProvider';
import NavItem from '@/components/Navbar/NavItem';
import {
  Container,
  Header,
  Group,
  Text,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Accordion,
  Flex,
  Image,
  em,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import classes from '@/components/header/generalHeader.module.scss';
import {Logo} from '@/components/Logo';
import { IMAGES_BASE_URL } from '@/api/client';
import ButtonComponent from '@/components/Button';
// const useStyles = createStyles((theme) => ({
//   item: {
//     fontWeight: 500,
//     fontSize: theme.fontSizes.sm,
//     borderTop: `1px solid ${theme.colors.gray[3]}`,
//     borderBottom: 'unset',
//   },
//   label: {
//     fontWeight: 500,
//     fontSize: theme.fontSizes.sm,
//   },
//   content: {
//     cursor: 'pointer',
//   },
//   link: {
//     display: 'flex',
//     alignItems: 'center',
//     // height: '100%',

//     fontWeight: 500,
//     cursor: 'pointer',
//     //paddingLeft: theme.spacing.lg,

//     textDecoration: 'none',
//     fontSize: theme.fontSizes.sm,
//     height: '50px',
//     borderTop: `1px solid ${theme.colors.gray[3]}`,
//     [theme.fn.smallerThan('sm')]: {
//       height: rem(42),
//       display: 'flex',
//       alignItems: 'center',
//       width: '100%',
//     },
//   },

//   hiddenMobile: {
//     [`@media (max-width: ${em(1220)})`]: {
//       display: 'none',
//     },
//   },

//   hiddenDesktop: {
//     [`@media (min-width: ${em(1220)})`]: {
//       display: 'none',
//     },
//   },
//   image: {
//     objectFit: 'cover',
//     borderRadius: '8px',
//   },
// }));
function GeneralHeader({
  links,
  logo,
  button,
  translation,
  postLocalization,
  contactUsLocalization,
  posts,
}) {
  // const buttonName = content.header;
  const { dispatch } = useContext(ModalWithReducer);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  //const { classes, theme } = useStyles();
  const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  const largerMidScreen = useMediaQuery('(min-width: 64em)'); //(min-1024)lg

  const openDemoRequest = () => {
    closeDrawer();
    dispatch({ type: 'DEMO' });
  };
  const handleClose = () => {
    closeDrawer();
  };
  return (
    <>
      <Header
        sx={{ border: '0', zIndex: '100' }}
        bg="transparent"
        height={smallerXsScreen ? '66px' : smallerLgScreen ? '80px' : '86px'}
        pos="fixed"
      >
        <Box
          px="md"
          //??className={isScrolled ? 'headerBlur' : 'wrapperHeader'}
          className="wrapperHeader"
          h="100%"
        >
          <Container size="1344px" h="100%" p="0">
            <Group position="apart" sx={{ height: '100%' }}>
              <Logo position="header" logo={logo} />
              <Group
                sx={{ height: '100%', flex: '1' }}
                spacing={0}
                className={classes.hiddenMobile}
              >
                {links?.length ? <NavItem links={links} /> : null}
              </Group>


              <Group className={classes.hiddenMobile}>
                <ButtonComponent
                  type={button?.type}
                  onClick={button?.requestModal ? openDemoRequest : null}
                  href={button?.link}
                  title={button?.title}
                  newPage={button?.newPage}
                />
              </Group>
              <Group className={classes.hiddenDesktop} ml="auto">
                <ButtonComponent
                  type={button?.type}
                  onClick={button?.requestModal ? openDemoRequest : null}
                  href={button?.link}
                  title={button?.title}
                  newPage={button?.newPage}
                />
              </Group>
              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                className={classes.hiddenDesktop}
                color="white"
              />
            </Group>
          </Container>
        </Box>
      </Header>

      {links?.length ? (
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea
            dir={'rtl'}
            h={`calc(100vh - ${rem(60)})`}
            mx="-md"
          >
            {links?.map((menuItem, idx) => (
              <>
                {menuItem?.sub_links?.length ? (
                  <Accordion
                    classNames={{
                      item: classes.item,
                      content: classes.content,
                      panel: classes.panel,
                      chevron: classes.chevron,
                      label: classes.label,
                    }}
                  >
                    <Accordion.Item key={idx} value={menuItem.title}>
                      <Accordion.Control>{menuItem.title}</Accordion.Control>
                      {menuItem?.sub_links?.map((subItem, idx) => (
                        <Accordion.Panel key={idx} px="md">
                          <Link prefetch={false} href={subItem.link} passHref>
                            <Group
                              noWrap
                              align="flex-start"
                              onClick={handleClose}
                              className="cursor-pointer"
                            >
                              <Image
                                src={`${IMAGES_BASE_URL}${subItem?.image?.data?.attributes?.url}`}
                                alt={subItem?.image?.data?.attributes?.caption}
                                width={40}
                                height={40}
                                className={classes.image}
                                radius="md"
                              />
                              <Box w="70%">
                                <Text
                                  component="strong"
                                  className="text-body3b"
                                >
                                  {subItem?.title}
                                </Text>
                                <Text
                                  component="p"
                                  //color={theme.colors.dark[5]}
                                  c="gray.5"
                                  lineclamp={2}
                                  className="text-body3r"
                                >
                                  {subItem?.description}
                                </Text>
                              </Box>
                            </Group>
                          </Link>
                        </Accordion.Panel>
                      ))}
                    </Accordion.Item>
                  </Accordion>
                ) : (
                  <Box
                    className={classes.link}
                    onClick={handleClose}
                    key={idx}
                    px={largerMidScreen ? 'lg' :  '0'}
                  >
                    <Link
                      prefetch={false}
                      href={menuItem?.link || '#'}
                      passHref
                      
                      aria-label={menuItem?.title}
                      className="link-section"
                      style={{
                        justifyContent: 'flex-start',
                      }}
                    >
                    
                        {menuItem.title}
                      
                    </Link>
                  </Box>
                )}
              </>
            ))}
            <Flex
              direction="column"
              justify="center"
              align="center"
              pt="xl"
              px="md"
            >
              <ButtonComponent
                type={button?.type}
                onClick={button?.requestModal ? openDemoRequest : null}
                href={button?.link}
                title={button?.title}
                newPage={button?.newPage}
              />
            </Flex>
          </ScrollArea>
        </Drawer>
      ) : null}
    </>
  );
}
export {GeneralHeader}
