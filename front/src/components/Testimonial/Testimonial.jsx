import { Group, Paper, Text } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import Markdown from '../Markdown'
import { IMAGES_BASE_URL } from '@/api/client'
  function Testimonial({item}) {
  return (
    <Paper p="lg" bg="white" shadow='0px 10px 20px 0px #00000017
    ' maw="359px" miw="270px" mih="273px">
                                            <Group justify='space-between' align="flex-start"> 
                                                <Group>
                                                    <Image src={IMAGES_BASE_URL + item?.image?.data?.attributes?.url} alt={item?.full_name} height={68} width={68} />
                                                    <Text component='p' c="primary.0" fw={600}>{item?.full_name}</Text>
                                                </Group>
                                                <Image src={'/assets/images/icon/quotation.svg'} height={29} width={29} alt='quotation' />
                                            </Group>
    
                                            <Text component='div' c="third.0" fz="sm" fw={600} mt="lg">
                                                <Markdown text={item?.content} />
    
                                            </Text>
                                        </Paper>
  )
}
export {Testimonial}