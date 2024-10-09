import Layout from '@/components/LayoutComponent';
import { Grid } from '@mantine/core';
import {ButtonComponent} from '@/components/Button';
import {Heading} from '@/components/Heading';
import { CardCarousel } from '@/components/carousel/CardCarousel';
import CustomButton from '@/components/customButton/CustomButton';
import { CtegoriesCarousel } from '@/components/carousel/CategoriesCarousel';
//import { IMAGES_BASE_URL} from '@/api/client';
// import { HeadMetaTags } from './HeadMetaTags';
 function BlogSection({
  posts,
  bgFluid,
  button,
  heading_title,
  categories,
  currentCategory
}) {
  //console.log(background, 'posts');
  return (
      <Layout pt="50px" pb="100px" bgFluid={bgFluid} >
        <Heading title={heading_title} />
        <CtegoriesCarousel
              categories={categories}
              currentCategory={currentCategory}
            />
           <CardCarousel posts={posts}/>
      
   
        <Grid.Col  ta="center" mt="xl" className="flex-center">
          <CustomButton
            variant={button?.type}
            href={button?.link}
            title={button?.title}
            targetBlank={button?.newPage}
          />
        </Grid.Col>
      </Layout>
  );
}
export {BlogSection}