import Link from 'next/link';
import {
  Container,
  createStyles,
  HoverCard,
  UnstyledButton,
  Text,
  SimpleGrid,
  Grid,
  Card,
  Center,
  Box,
  rem,
  BackgroundImage,
  Image,
  useMantineTheme,
  Group,
  Collapse,
  Divider,
  Button,
} from '@mantine/core';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react'; import { IMAGES_BASE_URL } from '@/api/client';
import { useRouter } from 'next/router';
import classes from '@/components/Navbar/NavItem.module.scss'
import { useState } from 'react';
import { useDisclosure, useHover } from '@mantine/hooks';


function SimpleSubMenu({ link, onClick, imageData, title, newPage, position }) {
  //const { classes } = useStyles();
  return (
    <UnstyledButton className={position === "mobile" ? classes.mobileSubLink : classes.subLink} onClick={onClick}>
      <Link prefetch={false} href={link} className={classes.subLinkTitle}
        aria-label={title}
        role="link"
        target={newPage ? '_blank' : '_self'}>

        <Group wrap="nowrap" align="center">

          <Image
            src={`${IMAGES_BASE_URL}${imageData?.url}`}
            alt={imageData?.caption}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
          <Text
            component="span"
            fz="sm"
            fw="700"
            ml="sm"
            c="third.1"
            className={classes.titleSimpleSubMenu}
          >
            {title}
          </Text>
        </Group>

      </Link>
    </UnstyledButton>
  );
};
export { SimpleSubMenu }

function MenuItem({ links, position, toggleLinks, handleClose }) {
  const theme = useMantineTheme();
  const [openedItem, setOpenedItem] = useState(null);

  const handleToggle = (index) => {
    setOpenedItem(openedItem === index ? null : index);
  };

  return (
    <>

      {links.map((item, index) => (
        <>
          <UnstyledButton className={classes.link} onClick={position === "mobile" ? () => handleToggle(index) : undefined}
            key={item.title}

          >

            <Center inline>
              {item?.sub_links?.length ? (
                <>
                  <Box className={classes.link}>
                    <Box component="span" mr={5}>
                      {item.title}
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.third[0]}
                    />
                  </Box>
                </>
              ) : (
                <Box onClick={handleClose}
                  className={classes.link}
                >
                  <Link href={item?.link}>
                    <Box component="span" mr={5}>
                      {item.title}
                    </Box>
                  </Link>
                </Box>

              )}
            </Center>

          </UnstyledButton>
          <Divider my="sm" />

          <Collapse in={openedItem === index}>
            {item?.sub_links?.map((subItem, idx) => (
              <SimpleSubMenu
                key={idx}
                newPage={subItem?.newPage}
                link={subItem?.link}
                title={subItem?.title}
                imageData={subItem?.image?.data?.attributes}
                position="mobile"
                onClick={handleClose}
              />
            ))}
          </Collapse>
        </>
      ))}
    </>
  );
}
export { MenuItem };


function NavbarItem({ links }) {
  const router = useRouter();
  const theme = useMantineTheme();
  const isActive = (item) => {
    if (item?.sub_links?.length) {
      return item.sub_links.some((subLink) =>
        router.asPath.startsWith(subLink.link),
      );
    } else if (item?.link === '/blog' && router.pathname?.includes('/blog')) {
      return true;
    }
    return router.asPath.endsWith(item?.link);
  };
  return (
    <>
      {links.map((item, idx) => (

        <HoverCard key={idx} width="100%" position="bottom" radius="0" shadow="md" withinPortal >
          <HoverCard.Target>
            {/* <MenuItem item={item} /> */}
            <Center inline >
              {item?.sub_links?.length ? (
                <>
                  <Box className={classes.link} c={isActive(item) ? 'secondary.0' : 'third.0'}>
                    <Box component="span" mr={5}>
                      {item.title}
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={isActive(item) ? theme.colors.secondary[0] : theme.colors.third[0]}
                    />
                  </Box>
                </>
              ) : (
                <Link href={item?.link} className={classes.link}>

                  <Box component="span" mr={5} c={isActive(item) ? 'secondary.0' : 'third.0'}>
                    {item.title}
                  </Box>    </Link>
              )}
            </Center>

          </HoverCard.Target>
          {item?.sub_links?.length ? (

            <HoverCard.Dropdown style={{ overflow: 'hidden', padding: '0' }}>
              <BackgroundImage
                src="/assets/images/bg-left-menu.svg"
                bgr="no-repeat"
                bgp={'bottom left'}
                bgsz="120px 275px"
              //mih="320px"
              >
                <Container py="1.5%" h='272px' size='1440'>

                  <SimpleGrid cols={4} spacing={15}>
                    {item?.sub_links?.map((subItem, idx) => (

                      <SimpleSubMenu
                        key={idx}
                        newPage={subItem?.newPage}
                        link={subItem?.link}
                        title={subItem?.title}
                        imageData={subItem?.image?.data?.attributes}
                      />))}
                  </SimpleGrid>


                </Container>
              </BackgroundImage>
            </HoverCard.Dropdown>
          ) : null}
        </HoverCard>
      ))}
    </>
  );
}
export { NavbarItem }

function MobileSubMenu({ links }) {
  return (links.map((item, idx) => (

    item?.sub_links?.length ? (



      <Container py="1.5%" >

        <SimpleGrid cols={1} spacing={15}>
          {item?.sub_links?.map((subItem, idx) => (
            <>
              <SimpleSubMenu
                key={idx}
                newPage={subItem?.newPage}
                link={subItem?.link}
                title={subItem?.title}
                imageData={subItem?.image?.data?.attributes}
              />
            </>
          ))}

        </SimpleGrid>


      </Container>

    ) : null
  )))


}
export { MobileSubMenu }


