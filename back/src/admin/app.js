// @ts-nocheck
const config = {
  locales: [
    'fa',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
  ],
  translations: {
      fa: {
        'Auth.form.email.label': 'test',
        Users: 'Utilisateurs',
        City: 'CITY (FRENCH)',
        // Customize the label of the Content Manager table.
        Id: 'ID french',
      },
    }
};

const bootstrap = (app) => {
  const css = `
    body:{display:none}
    .CodeMirror, #main-content input {
      direction : rtl!important
    }
  `,
  head = document.head || document.getElementsByTagName('head')[0],
  style = document.createElement('style');
  head.appendChild(style);

  style.type = 'text/css';
  if (style?.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }


  // document.
};

export default {
  config,
  bootstrap,
};
