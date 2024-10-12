import React from 'react'
import Layout from '../LayoutComponent'
import { Grid, Text } from '@mantine/core'
import Image from 'next/image'

function TwoColWithImage({heading_title,heading_description,title,description,src}) {
  return (
    <Layout>
        {heading_title && (
          <Heading title={heading_title} description={heading_description} />
        )}
      <Grid.Col span={{base:12,md:8,lg:6}}>
<Image src={src} fill style={{objectFit:'contain'}} alt={title}/>
      </Grid.Col>
     <Grid.Col span={{base:12,md:12,lg:6}}>
<Box>
  <Text component='strong'>
{title}
  </Text>
  <Text>
  <Markdown text={description} />
  </Text>
</Box>
      </Grid.Col>
    </Layout>
  )
}
export {TwoColWithImage}