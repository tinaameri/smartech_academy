import { createStyles, em } from '@mantine/core';

const useStyles = createStyles(() => ({
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    animation: 'moveAround 4s linear infinite',
    transformStyle: 'preserve-3d',
    transform: 'translateZ(0)',
    perspectiveOrigin: '150% 50%',
    [`@media (max-width: ${em(991)})`]: {
      display: 'none',
    },
    '&:nth-of-type(1)': {
      width: '212px',
      height: '212px',
      top: '50%',
      background: 'rgba(64, 83, 213, 0.10)',
      opacity: '0.5',
      right: 'unset',
      left: '100px',

      [`@media (max-width: ${em(1200)})`]: {
        top: '100%',
        right: '10%',
      },
    },
    '&:nth-of-type(2)': {
      width: '55px',
      height: '55px',
      top: '55%',
      background:
        "url('/assets/images/background/border-orange.svg') no-repeat center",
      right: '93%',
      [`@media (max-width: ${em(1200)})`]: {
        top: '100%',
        right: '40%',
      },
    },

    '&:nth-of-type(3)': {
      width: '55px',
      height: '55px',
      top: '65%',
      background:
        "url('/assets/images/background/border-green.svg') no-repeat center",
      right: '65%',
      [`@media (max-width: ${em(1200)})`]: {
        top: '110%',
        right: '10%',
      },
    },

    '@keyframes moveAround': {
      '0%': {
        transform: 'translate(0, 0)',
      },

      '25%': {
        transform: 'translate(10px, 0)',
      },

      '50%': {
        transform: 'translate(10px, 10px)',
      },

      '75%': {
        transform: 'translate(0, 10px)',
      },

      '100%': {
        transform: 'translate(0, 0)',
      },
    },
  },
}));
export default function Bubble() {
  const { classes } = useStyles();

  const circleCount = 100;

  const circleDivs = Array.from({ length: circleCount }, (_, index) => (
    <>
      <div key={index} className={classes.circle}></div>
    </>
  ));
  return <section>{circleDivs}</section>;
}
