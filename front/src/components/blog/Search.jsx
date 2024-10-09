import { useEffect, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Grid } from '@mantine/core';
import { Flex, Input, Button } from '@mantine/core';
import Layout from '@/components/LayoutComponent';
import { content } from '/public/assets/contentJson';
import { useRouter } from 'next/router';

const Search = ({ py, mt, searchDisplay }) => {
  const search = content.blog.search;
  const router = useRouter();
  const [query, setQuery] = useState(router?.query?.query);

  useEffect(() => {
    setQuery(router?.query?.query);
  }, [router?.query?.query]);
  return (
    <>
      <Layout py={py} mt={mt ?? '20px'} display={searchDisplay}>
        <Grid.Col ta="center" mx="auto" xs={12} sm={12} md={10} lg={8} xl={8}>
          <form
            method="get"
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/blog/search?query=${query}`);
            }}
            action="/blog/search"
          >
            <Flex justify="space-between" className="search">
              <Input
                icon={<IconSearch />}
                placeholder={search.placeholder}
                radius="11px"
                size="md"
                name="query"
                w="100%"
                className="focus-radius"
                defaultValue={query}
                value={query?.replace(/-/g, ' ')?.replace(/_/g, ' ')}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />

              <Button
                color="secondary.2"
                bg="secondary.0"
                type="submit"
                ml="auto"
                h="42px!important"
                className="submit-search"
              >
                {search.button}
              </Button>
            </Flex>
            <span
              onClick={() => {
                // toggleLoader();
              }}
            ></span>
          </form>
        </Grid.Col>
      </Layout>
    </>
  );
};
export default Search;
