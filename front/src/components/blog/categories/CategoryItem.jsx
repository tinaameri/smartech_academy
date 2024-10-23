import { IMAGES_BASE_URL } from '@/api/client'
import { Flex, Text, UnstyledButton } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryItem({ href, title, categorySlug, icon, onCategorySelect,selectedCategory,isSelected }) {
    const { hovered, ref } = useHover()
    return (
        <UnstyledButton
            onClick={() => onCategorySelect(categorySlug)}
            ref={ref}
            //  component={Link}
            //  href={href}
            passHref>
            <Flex direction={"column"} align={"center"} justify={"center"}>
                {icon ? <Image src={IMAGES_BASE_URL + icon} style={{
                    filter: hovered || isSelected ? 'none' : 'grayscale(100%)'
                }} height={30} width={30} alt={title} /> : null}
                <Text component='strong' ta="center" mt="md" fz={'xs'} c={hovered || isSelected  ? 'gray.7' : 'third.0'} >
                    {title}
                </Text>
            </Flex>
        </UnstyledButton>)
}
export { CategoryItem }
