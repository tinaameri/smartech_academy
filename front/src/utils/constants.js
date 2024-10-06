export const REVALIDATE_RATE = 60;

// eslint-disable-next-line no-undef
// export const GRAPHQL_ENDPOINT = process.browser
//   ? '/graphql'
//   : 'https://wapi.usermost.com/index.php?graphql='; //TODO: load from env?

//export const GRAPHQL_ENDPOINT = "https://wapi1.smartech.ir/index.php?graphql=";
export const postPerPage = 6;
export const PAGINATION_POSTS_PER_PAGE = 16;
export const PAGINATION_SEARCH_POSTS_PER_PAGE = 100;
export const IMAGES = '/assets/images';

export const HERO_BACKGROUNDS = {
  blur: `url(${IMAGES}/bg/bg-blur.svg) bottom/cover no-repeat`,
  blue: 'radial-gradient(51.57% 51.71% at 50% 48.57%, #1B3D76 0%, #11264B 100%);',
};
export const CARD_BACKGROUNDS = {
  blueRightBgBlueBlur: `url(${IMAGES}/bg/bg-blur-right-white.svg) left no-repeat,#F2F6FE`,
  blueLeftBlur: `url(${IMAGES}/bg/bg-blur-left-blue.svg)  no-repeat,#F2F6FE`,
  blueRightBlur: `url(${IMAGES}/bg/bg-blur-right-white.svg) left no-repeat,#FFF`,
  blueRightBottomBlur: `url(${IMAGES}/bg/blueRightBottomBlur.svg)  bottom left/contain no-repeat,#FFF`,
  orangeLeftBlur: `url(${IMAGES}/bg/orangeLeftBlur.svg)  right/contain no-repeat,#FFF`,
};
export const VERTICAL_CARD_BACKGROUNDS = {
  dark: 'url("/assets/images/top-right-blue.png") no-repeat left top,url("/assets/images/bottom-left-blue.png") no-repeat right bottom,radial-gradient(50% 50% at 50% 50%, #173466 0%, #11264B 100%)',
  blur: `url(${IMAGES}/bg/bg-blur-card.svg) top/cover no-repeat,#F2F6FE`,
  blurWhiteBg: `url("/assets/images/bg/bg-blur-caroucel.png") 0px 11px/100% no-repeat`,
};
export const BACKGROUNDS = {
  darkCircle:
    'url("/assets/images/top-right-blue.png") no-repeat left top,url("/assets/images/bottom-left-blue.png") no-repeat right bottom,radial-gradient(50% 50% at 50% 50%, #173466 0%, #11264B 100%)',
  blur: `url("/assets/images/bg/bg-blur-caroucel.png") left/cover no-repeat`,
};
export const COLOR = {
  green: '#F4FBEC',
  white: '#FDFDFD',
  blue: 'primary.6',
};
export const INFO_COLOR = {
  white: '#FFF',
  primary: 'primary.1',
  gray: 'gray.0',
};
