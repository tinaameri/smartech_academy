import { Container, List, Button, Flex, Loader, Box, UnstyledButton, Text, Group } from '@mantine/core';
//import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { useState } from 'react';
//import { Bounce } from 'react-reveal';
import { content } from '/public/assets/contentJson';
import Image from 'next/image';
import { useHover } from '@mantine/hooks';
import { CategoryItem } from './CategoryItem';

function Categories({
  categories,
  categoriesTab,
  currentCategory,
}) {
  const allPosts = content.blog.categories;
  const uniqueCategories = new Set();
  const [categoryLoader, setcategoryLoader] = useState(false);
  const toggleLoading = () => {
    setcategoryLoader(true);
    setTimeout(() => {
      setcategoryLoader(false);
    }, 2000);
  };
  //const largerLgScreen = useMediaQuery('(min-width: 75em)');
  return (
    // <Bounce>
    <Container
      // size={largerLgScreen ? 'md' : 'xl'}
      display={categoriesTab}
      w={'100%'}
      px="0"
      maw={'100%'}
      mt="20px"
    >
      <Flex align="center" justify="center" direction="column">
        <List
          listStyleType="none"
          display="flex"
          style={{
            flexWrap: 'wrap',
            minHeight: '90px',
            justifyContent: 'start',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <List.Item mx="2px">
            <Link href={`/blog/`} passHref aria-label={allPosts.title}>
              {/* <Button
                //bg={!currentCategory && 'secondary.0'}
                // onClick={() => toggleLoaderAllCategory()}
                onClick={() => toggleLoading()}
                variant={currentCategory ? 'default' : 'filled'}
                bg={currentCategory ? 'white' : 'secondary.3'}
                c={currentCategory ? 'gray.8' : 'white'}
                // loading={loadingAllCategory}
                className="category-item"
                rightSection={<Image src="/assets/images/icon/all.svg" height={30} width={30} alt={allPosts.title} />}
              >

                {allPosts.title}
              </Button> */}
              <CategoryItem
                   title={allPosts?.title}
                  href={`/blog`}
                  currentCategory={currentCategory}
                  
                   
                   />
            </Link>


          </List.Item>
          {categories?.length >= 1 &&
            categories?.map((category) => {
              if (!uniqueCategories.has(category?.attributes?.slug)) {
                uniqueCategories.add(category?.attributes?.slug);
                return (
                  <List.Item key={category?.attributes?.slug} mx="10px">
                   <CategoryItem
                   title={category?.attributes?.title}
                  href={`/blog/category/${category?.attributes?.slug}/page/1`}
                  currentCategory={currentCategory}
                  categorySlug={category?.attributes?.slug}
                  
                   
                   />
                 
                      {/* <Button
                      // className="category-item"
                      // onClick={() => toggleLoading()}
                      // variant={
                      //   currentCategory !== category?.attributes?.slug
                      //     ? 'default'
                      //     : 'filled'
                      // }
                      // bg={
                      //   currentCategory == category?.attributes?.slug &&
                      //   'secondary.3'
                      // }
                      // c={
                      //   currentCategory == category?.attributes?.slug
                      //     ? 'white'
                      //     : 'gray.8'
                      // }
                      // sx={{
                      //   textTransform: 'capitalize',
                      //   '&:hover': {
                      //     backgroundColor:
                      //       currentCategory == category?.attributes?.slug
                      //         ? 'rgb(41, 125, 136)'
                      //         : 'gray.1',
                      //   },
                      // }}
                      >
                        {category?.attributes?.title}
                      </Button> */}
                    
                  </List.Item>
                );
              }
              return null;
            })}
        </List>

        <Box h={categoryLoader ? '20px' : '0'}>
          {categoryLoader && <Loader mr="sm" size="xs" />}
        </Box>
      </Flex>
    </Container>
    // </Bounce>


  );
}
export { Categories }