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
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { IMAGES_BASE_URL } from '@/api/client';
import { useRouter } from 'next/router';
import classes from '@/components/Navbar/NavItem.module.scss'
// const useStyles = createStyles((theme) => ({
//   link: {
//     display: 'flex',
//     alignItems: 'center',
//     height: '100%',
//     paddingLeft: theme.spacing.sm,
//     paddingRight: theme.spacing.sm,
//     textDecoration: 'none',
//     color: theme.colorScheme === 'dark' ? theme.white : theme.black,
//     fontWeight: 700,
//     fontSize: theme.fontSizes.md,
//     cursor: 'pointer',
//     [theme.fn.smallerThan('sm')]: {
//       height: rem(42),
//       display: 'flex',
//       alignItems: 'center',
//       width: '100%',
//     },

//     ...theme.fn.hover({
//       backgroundColor:
//         theme.colorScheme === 'dark'
//           ? theme.colors.dark[6]
//           : theme.colors.gray[0],
//       height: '85px',
//     }),
//   },
//   titleSimpleSubMenu: {
//     [theme.fn.smallerThan('xl')]: {
//       fontSize: '12px',
//     },
//   },
//   subLink: {
//     //width: '100%',
//     padding: `${theme.spacing.xs} ${theme.spacing.xs}`,
//     borderRadius: theme.radius.lg,
//     //marginBottom: '24px',
//     border: '1px solid rgba(188, 201, 226, 0.60)',
//     ...theme.fn.hover({
//       backgroundColor: theme.colors.gray[0],
//     }),

//     '&:active': theme.activeStyles,
//   },
//   subLinkTitle: {
//     display: 'flex',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },

//   dropdownFooter: {
//     backgroundColor:
//       theme.colorScheme === 'dark'
//         ? theme.colors.dark[7]
//         : theme.colors.gray[0],
//     margin: `calc(${theme.spacing.md} * -1)`,
//     marginTop: theme.spacing.sm,
//     padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
//     paddingBottom: theme.spacing.xl,
//     borderTop: `${rem(1)} solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
//     }`,
//   },

//   hiddenMobile: {
//     [theme.fn.smallerThan('sm')]: {
//       display: 'none',
//     },
//   },

//   hiddenDesktop: {
//     [theme.fn.largerThan('sm')]: {
//       display: 'none',
//     },
//   },
//   nav: {
//     [`&:hover .dropDown`]: {
//       background: 'red',
//       display: 'block',
//     },
//   },
//   dropdown: {
//     zIndex: 300,
//     top: '103px',
//     left: '0px',
//     width: '100%',
//     // display: 'block',
//     position: 'absolute',

//     backgroundColor: 'white',
//   },
//   rightList: {
//     listStyleType: 'none;',
//   },
// }));

const SimpleSubMenu = ({ link, onClick, imageData, title, newPage }) => {
  //const { classes } = useStyles();
  return (
    <UnstyledButton className={classes.subLink} onClick={onClick}>
      <Link prefetch={false} href={link} legacyBehavior>
        <a
          className={classes.subLinkTitle}
          aria-label={title}
          role="link"
          target={newPage ? '_blank' : '_self'}
        >
          <Image
            src={`${IMAGES_BASE_URL}${imageData?.url}`}
            alt={imageData?.caption}
            width={60}
            height={60}
            fit="true"
          />
          <Text
            component="span"
            fz="sm"
            fw="700"
            ml="sm"
            color="primary.1"
            className={classes.titleSimpleSubMenu}
          >
            {title}
          </Text>
        </a>
      </Link>
    </UnstyledButton>
  );
};
const CardSubMenu = ({
  link,
  onClick,
  imageData,
  title,
  description,
  newPage,
}) => {
  return (
    <>
      <Card
        sx={(theme) => ({
          '&:hover .card-title': {
            color: theme.colors.secondary[0],
          },
        })}
        dir={'rtl'}
        bg="transparent"
        radius="lg"
        onClick={onClick}
      >
        <Link href={link} legacyBehavior>
          <a
          
            //className="card-link-section"
            target={newPage ? '_blank' : '_self'}
            aria-label={title}
            role="link"
          >
            <Box mb="md">
              <Image
                src={`${IMAGES_BASE_URL}${imageData?.url}`}
                alt={imageData?.caption}
                height={120}
                fit="true"
                radius="lg"
              />
            </Box>
            <Box px="xs">
              <Text
                component="strong"
                className="card-title"
                fz="md"
                fw="700"
                color="primary.1"
              >
                {title}
              </Text>
              <Text
                component="p"
                mt="sm"
                lineClamp={2}
                fz="13px"
                fw="400"
                color="primary.1"
              >
                {description}
              </Text>
            </Box>
          </a>
        </Link>
      </Card>
    </>
  );
};

 function NavbarItem({ links }) {
  const { classes } = useStyles();
  const router = useRouter();

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
        <HoverCard
          width="100%"
          position="bottom"
          shadow="md"
          withinPortal
          key={idx}
        >
          <HoverCard.Target>
            <Box
              className={`${classes.link} menu-link  ${
                isActive(item) ? 'active' : ''
              }`}
            >
              {item?.sub_links?.length ? (
                <Center inline>
                  <Text component="span" mr={5} color="primary.1">
                    {item.title}
                  </Text>
                  <IconChevronDown size={20} />
                </Center>
              ) : (
                <Link
                legacyBehavior
                  href={item?.link || '#'}
                  as={item?.link}
                  //activeClassName="active"
                >
                  <a
                  
                    className="link-section"
                    style={{ justifyContent: 'flex-start' }}
                  >
                    {item?.title}
                  </a>
                </Link>
              )}
            </Box>
          </HoverCard.Target>
          {item?.sub_links?.length ? (
            <HoverCard.Dropdown sx={{ overflow: 'hidden' }} p="0">
              <BackgroundImage
                src="/assets/images/smartech/menu/bg-left-menu.svg"
                bgr="no-repeat"
                bgp={'bottom right'}
                bgsz="143px"
                mih="320px"
                dir="rtl"
              >
                <Container px="8.5%">
                  <Grid dir={'rtl' }>
                    <Grid.Col xs={12} xl={11} mx="auto" pt="50px">
                      <SimpleGrid cols={4} spacing="lg" verticalSpacing="lg">
                        {item?.sub_links?.map((subItem, idx) => (
                          <>
                            {subItem?.description ? (
                              <CardSubMenu
                                key={idx}
                                link={subItem?.link}
                                title={subItem?.title}
                                newPage={subItem?.newPage}
                                description={subItem?.description}
                                imageData={subItem?.image?.data?.attributes}
                              />
                            ) : (
                              <SimpleSubMenu
                                key={idx}
                                newPage={subItem?.newPage}
                                link={subItem?.link}
                                title={subItem?.title}
                                imageData={subItem?.image?.data?.attributes}
                              />
                            )}
                          </>
                        ))}
                      </SimpleGrid>
                    </Grid.Col>
                  </Grid>
                </Container>
              </BackgroundImage>
            </HoverCard.Dropdown>
          ) : null}
        </HoverCard>
      ))}
    </>
  );
}
export {NavbarItem}