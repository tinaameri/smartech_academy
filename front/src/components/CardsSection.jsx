import Layout from '@/components/LayoutComponent';
import { Grid } from '@mantine/core';
import { Heading } from '@/components/Heading';
import { CardCarousel } from '@/components/carousel/CardCarousel';
import { CustomButton } from '@/components/customButton/CustomButton';
import { CtegoriesCarousel } from '@/components/carousel/CategoriesCarousel';
import { useState } from 'react';
import { BlogCard } from '@/components/blog/BlogCard';
//import { IMAGES_BASE_URL} from '@/api/client';
// import { HeadMetaTags } from './HeadMetaTags';
function CardsSection({
  posts,
  bgFluid,
  button,
  heading_title,
  categories,
  currentCategory,
  withButton,
  CardComponent,
  cardType
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  const filteredPosts = selectedCategory
  ? posts.filter(post => post?.attributes?.categories?.data.some(cat => cat?.attributes?.slug === selectedCategory))
  : posts;
    return (
    <Layout bgFluid={bgFluid} >
      <Heading title={heading_title} />
      <CtegoriesCarousel
        categories={categories}
        currentCategory={currentCategory}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}

      />
      <CardCarousel posts={filteredPosts} selectedCategory={selectedCategory} CardComponent={CardComponent} cardType={cardType} />
      {withButton && <Grid.Col ta="center" mt="xl" className="flex-center">
        <CustomButton
          variant={button?.type}
          href={button?.link}
          title={button?.title}
          targetBlank={button?.newPage}
        />
      </Grid.Col>}

    </Layout>
  );
}
export { CardsSection }