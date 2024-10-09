// import Search from '@/components/blog/Search'
import Layout from '@/components/LayoutComponent';
import Search from '@/components/blog/Search';
import { Grid, Title, Text, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { content } from 'public/assets/contentJson';

export default function TopHeader() {
  const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  const headerContent = content.blog.topHeader;
  return (
    <>
      <Container fluid bg="#F1F3F4">
        <Layout
          mt={smallerXsScreen ? '66px' : smallerLgScreen ? '80px' : '70px'}
          pt={smallerLgScreen ? '40px' : '90px'}
        >
          <Grid.Col xs={12} ta="center">
            <Title order={1} color="primary.1">
              {headerContent.title}
            </Title>
          </Grid.Col>
          <Grid.Col xs={12} sm={12} md={12} lg={9} mx="auto" ta="center">
            <Text
              component="p"
              sx={{ opacity: '0.8' }}
              color="primary.1"
              mb={smallerLgScreen ? 'xs' : 'xl'}
            >
              {headerContent.description}
            </Text>
          </Grid.Col>
        </Layout>
        <Search />
      </Container>
    </>
  );
}
