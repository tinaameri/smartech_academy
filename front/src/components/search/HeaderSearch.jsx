import classes from '@/components/search/HeaderSearch.module.scss'
import { Box, Button, Collapse, Container, Group, Input } from '@mantine/core';
import { useDisclosure, useHover } from '@mantine/hooks';
import Image from 'next/image';

function Search({ }) {
    const [opened, { toggle }] = useDisclosure(false);
    const { hovered, ref } = useHover()

    return (
        <>
            <Box className={classes.search}>
                <Button variant='primary' h="42px" w="42px" p="0" ref={ref} onClick={toggle} >
                    <Image src={hovered ? '/assets/images/icon/search-primary.svg' : '/assets/images/icon/search.svg'} width={24} height={24}
                    />
                </Button>
                <Collapse className={classes.collapse} in={opened} transitionDuration={1000} transitionTimingFunction="linear">
                    <Container size='1050'>
                        <Group>
                            <Image src={'/assets/images/icon/search-primary.svg'} width={24} height={24}
                            />
                            <Input variant="unstyled" placeholder="مطلب مورد نظر شما ..." />

                        </Group>

                    </Container>
                </Collapse>
            </Box>
        </>
    )
}
export { Search }