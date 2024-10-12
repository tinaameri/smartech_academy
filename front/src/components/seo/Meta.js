export function MetaSocial({
  socialImage,
  socialTitle,
  socialDescription,
  siteName,
}) {
  const metaTags = [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    { property: 'site_name', content: siteName },
    {
      name: `twitter:card`,
      content: 'summary_large_image',
    },
    {
      name: `twitter:title`,
      content: socialTitle,
    },
    {
      name: `twitter:image`,
      content: socialImage,
    },
  ];
  if (socialDescription) {
    metaTags.push({
      name: `twitter:description`,
      content: socialDescription,
    });
  }
  // if (Array.isArray(seo?.metaSocial)) {
  //   seo.metaSocial.forEach((item) => {
  //     if (item?.socialNetworkName) {
  //       additionalMetaTags.push(
  //         {
  //           name: `${item.socialNetworkName}:title`,
  //           content: socialTitle,
  //         },
  //         {
  //           name: `${item.socialNetworkName}:description`,
  //           content: socialDescription,
  //         },
  //         {
  //           name: `${item.socialNetworkName}:image`,
  //           content: socialImage,
  //         },
  //       );
  //     }
  //   });
  // }
  return metaTags;
}
export function SameAsSocialLink({ config }) {
  const socialLinks = config?.social_media;
  const generateSameAsLinks = (socialLinks) => {
    return socialLinks?.filter((item) => item?.link).map((link) => link?.link);
  };
  const sameAsLinks = generateSameAsLinks(socialLinks);
  return sameAsLinks;
}

export function getTypeOfImage(type) {
  switch (type) {
    case 'png':
      return 'image/png';
    case 'jpg':
      return 'image/jpg';
    case 'jpeg':
      return 'image/jpeg';
    case 'svg':
      return 'image/svg+xml';
    case 'gif':
      return 'image/gif';
    default:
      return null;
  }
}
