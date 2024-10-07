import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,


    Burger,
    Drawer,
    ScrollArea,
    rem,
    useMantineTheme,
    Container,
    BackgroundImage,
    Collapse,
    Box,
} from '@mantine/core';
import { useDisclosure, useHover } from '@mantine/hooks';

import classes from '@/components/header/HeaderMegaMenu.module.scss';
import { Logo } from '@/components/Logo'
import { MenuItem, NavbarItem } from '../Navbar/NavItem';
import { Search } from '@/components/search/HeaderSearch';
import Image from 'next/image';


function HeaderMegaMenu({ logo, links }) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const { hovered, ref } = useHover()
    const handleClose = () => {
        closeDrawer();
    };

    return (
        <>
            <header className={classes.header}>
                <Container size="1344px" h="100%" p="0">

                    <Group justify="space-between" h="100%">

                        <Group h="100%" gap={0} visibleFrom="md">
                            <Logo position="header" logo={logo} />

                            {links?.length ? <NavbarItem links={links} /> : null}

                        </Group>

                        <Box visibleFrom="md" maw={400} mx="auto">
                          <Search/>
                            
                        </Box>

                        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
                    </Group>
                </Container>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"

                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <MenuItem position="mobile" toggleLinks={toggleLinks} links={links} handleClose={handleClose} />



                </ScrollArea>
            </Drawer>
        </>
    );
}
export { HeaderMegaMenu }
