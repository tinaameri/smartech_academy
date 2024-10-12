import type { Schema, Attribute } from '@strapi/strapi';

export interface PageElementAccordionItem extends Schema.Component {
  collectionName: 'components_page_element_accordion_items';
  info: {
    displayName: 'accordion_item';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface PageElementAccordion extends Schema.Component {
  collectionName: 'components_page_element_accordions';
  info: {
    displayName: 'AccordionItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface PageElementArticleButton extends Schema.Component {
  collectionName: 'components_page_element_article_buttons';
  info: {
    displayName: 'article_button';
    description: '';
  };
  attributes: {
    button: Attribute.Component<'page-element.button'>;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface PageElementButtonWithoutLink extends Schema.Component {
  collectionName: 'components_page_element_button_without_links';
  info: {
    displayName: 'ButtonWithoutLink';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface PageElementButton extends Schema.Component {
  collectionName: 'components_page_element_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String;
    newPage: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<
      [
        'disable',
        'primary',
        'primaryArrow',
        'secondary',
        'secondaryArrow',
        'primaryOutline',
        'primaryOutlineArrow'
      ]
    >;
  };
}

export interface PageElementCards extends Schema.Component {
  collectionName: 'components_page_element_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    button: Attribute.Component<'page-element.button', true>;
  };
}

export interface PageElementContent extends Schema.Component {
  collectionName: 'components_page_element_contents';
  info: {
    displayName: 'content';
    icon: 'layer';
    description: '';
  };
  attributes: {
    description: Attribute.RichText & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageElementCounter extends Schema.Component {
  collectionName: 'components_page_element_counters';
  info: {
    displayName: 'Counter';
  };
  attributes: {
    title: Attribute.String;
    unit: Attribute.String;
    count: Attribute.String;
  };
}

export interface PageElementDropDownMenu extends Schema.Component {
  collectionName: 'components_page_element_drop_down_menus';
  info: {
    displayName: 'DropDownMenu';
    description: '';
  };
  attributes: {
    dropDownItem: Attribute.Component<'page-element.button', true>;
    login_button: Attribute.Component<'page-element.login-button'>;
  };
}

export interface PageElementFieldInfo extends Schema.Component {
  collectionName: 'components_page_element_field_infos';
  info: {
    displayName: 'field_info';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    info: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

export interface PageElementFooterLinks extends Schema.Component {
  collectionName: 'components_page_element_footer_links';
  info: {
    displayName: 'footerLinks';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    links: Attribute.Component<'page-element.button', true>;
  };
}

export interface PageElementLoginButton extends Schema.Component {
  collectionName: 'components_page_element_login_buttons';
  info: {
    displayName: 'login_button';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['primary', 'secondary']>;
    title: Attribute.String;
  };
}

export interface PageElementLogo extends Schema.Component {
  collectionName: 'components_page_element_logos';
  info: {
    displayName: 'Logo';
    icon: 'picture';
    description: '';
  };
  attributes: {
    header: Attribute.Media & Attribute.Required;
    footer: Attribute.Media & Attribute.Required;
  };
}

export interface PageElementMetaRobots extends Schema.Component {
  collectionName: 'components_page_element_meta_robots';
  info: {
    displayName: 'metaRobots';
  };
  attributes: {
    index: Attribute.Boolean;
    follow: Attribute.Boolean;
  };
}

export interface PageElementNavMenu extends Schema.Component {
  collectionName: 'components_page_element_nav_menus';
  info: {
    displayName: 'nav_link';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String;
    sub_links: Attribute.Component<'page-element.nav-sub-menu', true>;
  };
}

export interface PageElementNavSubMenu extends Schema.Component {
  collectionName: 'components_page_element_nav_sub_menus';
  info: {
    displayName: 'nav_sub_link';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface PageElementNewsletter extends Schema.Component {
  collectionName: 'components_page_element_newsletters';
  info: {
    displayName: 'newsletter';
    icon: 'earth';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    email_placeholder: Attribute.String;
    button: Attribute.String;
    caption: Attribute.String;
  };
}

export interface PageElementOption extends Schema.Component {
  collectionName: 'components_page_element_options';
  info: {
    displayName: 'option';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface PageElementSearchBox extends Schema.Component {
  collectionName: 'components_page_element_search_boxes';
  info: {
    displayName: 'search_box';
    icon: 'search';
  };
  attributes: {
    placeholder: Attribute.Text;
    button: Attribute.String;
  };
}

export interface PageElementSeller extends Schema.Component {
  collectionName: 'components_page_element_sellers';
  info: {
    displayName: 'seller';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageElementSlide extends Schema.Component {
  collectionName: 'components_page_element_slides';
  info: {
    displayName: 'slide';
    description: '';
  };
  attributes: {
    full_name: Attribute.String;
    content: Attribute.Text & Attribute.Required;
    position: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PageElementSocial extends Schema.Component {
  collectionName: 'components_page_element_socials';
  info: {
    displayName: 'social';
    icon: 'earth';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    color: Attribute.String;
    icon_hover: Attribute.Media;
  };
}

export interface PageElementStepTab extends Schema.Component {
  collectionName: 'components_page_element_step_tabs';
  info: {
    displayName: 'StepTab';
  };
  attributes: {
    step_number: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    menuLink: Attribute.String;
  };
}

export interface PageElementTab extends Schema.Component {
  collectionName: 'components_page_element_tabs';
  info: {
    displayName: 'tab';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    icon: Attribute.Enumeration<['plane', 'shopping', 'wallet']>;
    caption: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    body: Attribute.RichText;
    galleryTitle: Attribute.String;
    gallery: Attribute.Media;
  };
}

export interface PageElementTimelineItem extends Schema.Component {
  collectionName: 'components_page_element_timeline_items';
  info: {
    displayName: 'TimelineItem';
    icon: 'filter';
    description: '';
  };
  attributes: {
    date: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface PageElementTopHeaderBlog extends Schema.Component {
  collectionName: 'components_page_element_top_header_blogs';
  info: {
    displayName: 'top_header_blog';
  };
  attributes: {
    heading_title: Attribute.String;
    heading_description: Attribute.Text;
    input_placeholder: Attribute.String;
    button: Attribute.String;
  };
}

export interface PageElementTrustLogo extends Schema.Component {
  collectionName: 'components_page_element_trust_logos';
  info: {
    displayName: 'trust_logo';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    html: Attribute.RichText;
  };
}

export interface PageElementVerticalCardItem extends Schema.Component {
  collectionName: 'components_page_element_vertical_card_items';
  info: {
    displayName: 'VerticalCardItem';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface PageElementWordsAnimation extends Schema.Component {
  collectionName: 'components_page_element_words_animations';
  info: {
    displayName: 'Words_animation';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageSection2ColWithImage extends Schema.Component {
  collectionName: 'components_page_section_2col_with_images';
  info: {
    displayName: 'cardSection';
    icon: 'layout';
    description: '';
  };
  attributes: {
    heading_title: Attribute.String;
    heading_description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
    buttons: Attribute.Component<'page-element.button', true>;
    reverse: Attribute.Boolean & Attribute.DefaultTo<false>;
    background: Attribute.Enumeration<
      [
        'blueRightBgBlueBlur',
        'blueLeftBlur',
        'blueRightBlur',
        'blueRightBottomBlur',
        'orangeLeftBlur'
      ]
    > &
      Attribute.DefaultTo<'white'>;
    content: Attribute.Component<'page-element.content', true>;
    lottie_image_animation: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface PageSectionAccordion extends Schema.Component {
  collectionName: 'components_page_section_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    accordion_item: Attribute.Component<'page-element.accordion-item', true>;
    heading_title: Attribute.String;
  };
}

export interface PageSectionArticle extends Schema.Component {
  collectionName: 'components_page_section_articles';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'Markdown';
          preset: 'rich';
        }
      >;
    article_button: Attribute.Component<'page-element.article-button', true>;
  };
}

export interface PageSectionBanner extends Schema.Component {
  collectionName: 'components_page_section_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    description: Attribute.RichText;
    title: Attribute.RichText & Attribute.Required;
  };
}

export interface PageSectionBlogSection extends Schema.Component {
  collectionName: 'components_page_section_blog_sections';
  info: {
    displayName: 'BlogSection';
    description: '';
  };
  attributes: {
    heading_title: Attribute.String;
    button: Attribute.Component<'page-element.button'>;
    background: Attribute.Media;
  };
}

export interface PageSectionButton extends Schema.Component {
  collectionName: 'components_page_section_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Button: Attribute.Component<'page-element.button'>;
  };
}

export interface PageSectionCardBanner extends Schema.Component {
  collectionName: 'components_page_section_card_banners';
  info: {
    displayName: 'CardBanner';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    image: Attribute.Media & Attribute.Required;
    heading_title: Attribute.String;
    heading_description: Attribute.String;
    background: Attribute.Enumeration<
      ['orange', 'green', 'white', 'orangePattern']
    >;
  };
}

export interface PageSectionContactUs extends Schema.Component {
  collectionName: 'components_page_section_contactuses';
  info: {
    displayName: 'ContactUs';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    description: Attribute.RichText;
    button: Attribute.Component<'page-element.button'>;
    image: Attribute.Media & Attribute.Required;
    background: Attribute.Enumeration<['green', 'white', 'blue']>;
  };
}

export interface PageSectionCounter extends Schema.Component {
  collectionName: 'components_page_section_counters';
  info: {
    displayName: 'Counter';
    description: '';
  };
  attributes: {
    Counter: Attribute.Component<'page-element.counter', true>;
    heading_title: Attribute.String;
    heading_description: Attribute.Text;
  };
}

export interface PageSectionCreateCampaign extends Schema.Component {
  collectionName: 'components_page_section_create_campaigns';
  info: {
    displayName: 'CreateCampaign';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    heading_title: Attribute.String & Attribute.Required;
    image_desktop: Attribute.Media & Attribute.Required;
    image_mobile: Attribute.Media & Attribute.Required;
  };
}

export interface PageSectionHero extends Schema.Component {
  collectionName: 'components_page_section_heroes';
  info: {
    displayName: 'hero';
    icon: 'crown';
    description: '';
  };
  attributes: {
    caption: Attribute.String;
    sub_title: Attribute.RichText &
      Attribute.SetMinMaxLength<{
        maxLength: 900;
      }>;
    action: Attribute.Component<'page-element.button', true>;
    image: Attribute.Media;
    words_animation: Attribute.Component<'page-element.words-animation', true>;
    lottie_image_animation: Attribute.Boolean & Attribute.DefaultTo<true>;
    background: Attribute.Media;
    title: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface PageSectionImageCarousel extends Schema.Component {
  collectionName: 'components_page_section_image_carousels';
  info: {
    displayName: 'imageCarousel';
    icon: 'picture';
    description: '';
  };
  attributes: {
    images: Attribute.Media & Attribute.Required;
    heading_title: Attribute.String;
    background: Attribute.Enumeration<['darkCircle', 'blur']>;
  };
}

export interface PageSectionInfo extends Schema.Component {
  collectionName: 'components_page_section_infos';
  info: {
    displayName: 'info';
    icon: 'information';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    background: Attribute.Enumeration<['pattern', 'white', 'gray']> &
      Attribute.DefaultTo<'white'>;
  };
}

export interface PageSectionSellerCarousel extends Schema.Component {
  collectionName: 'components_page_section_seller_carousels';
  info: {
    displayName: 'sellerCarousel';
    description: '';
  };
  attributes: {
    seller: Attribute.Component<'page-element.seller', true>;
    heading_title: Attribute.String;
  };
}

export interface PageSectionSimpleText extends Schema.Component {
  collectionName: 'components_page_element_simple_texts';
  info: {
    displayName: 'simpleText';
    icon: 'quote';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface PageSectionStepsTabs extends Schema.Component {
  collectionName: 'components_page_section_steps_tabs';
  info: {
    displayName: 'StepsTabs';
    description: '';
  };
  attributes: {
    step: Attribute.Component<'page-element.step-tab', true>;
    background: Attribute.Enumeration<['blueLeftBlur']>;
    heading_title: Attribute.String;
    heading_description: Attribute.Text;
  };
}

export interface PageSectionSteps extends Schema.Component {
  collectionName: 'components_page_section_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface PageSectionTabs extends Schema.Component {
  collectionName: 'components_page_section_tabs';
  info: {
    displayName: 'tabs';
    icon: 'folder';
  };
  attributes: {
    items: Attribute.Component<'page-element.tab', true>;
  };
}

export interface PageSectionTestimonial extends Schema.Component {
  collectionName: 'components_page_section_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
    description: '';
  };
  attributes: {
    heading_title: Attribute.String;
    slide: Attribute.Component<'page-element.slide', true>;
    background: Attribute.Enumeration<
      ['blue', 'green', 'orange', 'greenPattern']
    >;
    heading_description: Attribute.Text;
  };
}

export interface PageSectionTimelineSection extends Schema.Component {
  collectionName: 'components_page_section_timeline_sections';
  info: {
    displayName: 'TimelineSection';
    icon: 'filter';
  };
  attributes: {
    Item: Attribute.Component<'page-element.timeline-item', true>;
    heading_title: Attribute.String & Attribute.Required;
  };
}

export interface PageSectionTopBanner extends Schema.Component {
  collectionName: 'components_page_section_top_banners';
  info: {
    displayName: 'TopBanner';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    link: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageSectionTwoColWithImage extends Schema.Component {
  collectionName: 'components_page_section_two_col_with_images';
  info: {
    displayName: 'TwoColWithImage';
  };
  attributes: {
    heading_title: Attribute.String;
    heading_description: Attribute.Text;
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    image: Attribute.Media;
    reverse: Attribute.Boolean;
  };
}

export interface PageSectionVerticalCards extends Schema.Component {
  collectionName: 'components_page_section_vertical_cards';
  info: {
    displayName: 'VerticalCards';
    description: '';
  };
  attributes: {
    heading_title: Attribute.Text;
    heading_description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    VerticalCardItem: Attribute.Component<
      'page-element.vertical-card-item',
      true
    >;
    desktopBackground: Attribute.Media;
    mobileBackground: Attribute.Media;
  };
}

export interface PageSectionVideo extends Schema.Component {
  collectionName: 'components_page_section_videos';
  info: {
    displayName: 'Video';
    icon: 'television';
    description: '';
  };
  attributes: {
    video: Attribute.Media & Attribute.Required;
  };
}

export interface SharedGdpr extends Schema.Component {
  collectionName: 'components_shared_gdprs';
  info: {
    displayName: 'GDPR';
    icon: 'key';
    description: '';
  };
  attributes: {
    heading_title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    description: Attribute.RichText;
    customize: Attribute.String & Attribute.Required;
    toggle_option_essential: Attribute.Component<'page-element.option'>;
    accept_button: Attribute.Component<'page-element.button-without-link'>;
    decline_button: Attribute.Component<'page-element.button-without-link'>;
    toggle_option_analytics: Attribute.Component<'page-element.content'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    keywords: Attribute.Text;
    structuredData: Attribute.JSON;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-element.accordion-item': PageElementAccordionItem;
      'page-element.accordion': PageElementAccordion;
      'page-element.article-button': PageElementArticleButton;
      'page-element.button-without-link': PageElementButtonWithoutLink;
      'page-element.button': PageElementButton;
      'page-element.cards': PageElementCards;
      'page-element.content': PageElementContent;
      'page-element.counter': PageElementCounter;
      'page-element.drop-down-menu': PageElementDropDownMenu;
      'page-element.field-info': PageElementFieldInfo;
      'page-element.footer-links': PageElementFooterLinks;
      'page-element.login-button': PageElementLoginButton;
      'page-element.logo': PageElementLogo;
      'page-element.meta-robots': PageElementMetaRobots;
      'page-element.nav-menu': PageElementNavMenu;
      'page-element.nav-sub-menu': PageElementNavSubMenu;
      'page-element.newsletter': PageElementNewsletter;
      'page-element.option': PageElementOption;
      'page-element.search-box': PageElementSearchBox;
      'page-element.seller': PageElementSeller;
      'page-element.slide': PageElementSlide;
      'page-element.social': PageElementSocial;
      'page-element.step-tab': PageElementStepTab;
      'page-element.tab': PageElementTab;
      'page-element.timeline-item': PageElementTimelineItem;
      'page-element.top-header-blog': PageElementTopHeaderBlog;
      'page-element.trust-logo': PageElementTrustLogo;
      'page-element.vertical-card-item': PageElementVerticalCardItem;
      'page-element.words-animation': PageElementWordsAnimation;
      'page-section.2col-with-image': PageSection2ColWithImage;
      'page-section.accordion': PageSectionAccordion;
      'page-section.article': PageSectionArticle;
      'page-section.banner': PageSectionBanner;
      'page-section.blog-section': PageSectionBlogSection;
      'page-section.button': PageSectionButton;
      'page-section.card-banner': PageSectionCardBanner;
      'page-section.contact-us': PageSectionContactUs;
      'page-section.counter': PageSectionCounter;
      'page-section.create-campaign': PageSectionCreateCampaign;
      'page-section.hero': PageSectionHero;
      'page-section.image-carousel': PageSectionImageCarousel;
      'page-section.info': PageSectionInfo;
      'page-section.seller-carousel': PageSectionSellerCarousel;
      'page-section.simple-text': PageSectionSimpleText;
      'page-section.steps-tabs': PageSectionStepsTabs;
      'page-section.steps': PageSectionSteps;
      'page-section.tabs': PageSectionTabs;
      'page-section.testimonial': PageSectionTestimonial;
      'page-section.timeline-section': PageSectionTimelineSection;
      'page-section.top-banner': PageSectionTopBanner;
      'page-section.two-col-with-image': PageSectionTwoColWithImage;
      'page-section.vertical-cards': PageSectionVerticalCards;
      'page-section.video': PageSectionVideo;
      'shared.gdpr': SharedGdpr;
      'shared.seo': SharedSeo;
    }
  }
}
