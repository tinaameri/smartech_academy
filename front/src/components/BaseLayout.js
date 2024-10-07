import { useContext, useEffect, useState } from 'react';
import {GeneralHeader} from '@/components/header/GeneralHeader';
// import Footer from '@/components/footer/GeneralFooter';
import { ModalWithReducer } from '@/context/ModalProvider';
// import GDPR from '@/components/modal/GDPR';
// import { NextSeo } from 'next-seo';
import { HeaderMegaMenu } from '@/components/header/HeaderMegaMenu';
import { AppShell, Box, Flex } from '@mantine/core';
import {GeneralFooter} from '@/components/footer/GeneralFooter';
const initIntrack = () => {
  (function (i, n, t, r, a, c, k) {
    let o = (i['InTrack'] = i['InTrack'] || {});
    i[a] =
      i[a] ||
      function () {
        (o.q = o.q || []).push(arguments);
      };
    let s = n.createElement(t);
    s.async = true;
    s.src = r;
    s.onload = function () {
      o.init(c);
    };
    let e = n.getElementsByTagName(t)[0];
    e.parentNode.insertBefore(s, k);
  })(
    window,
    document,
    'script',
    '//static1.intrack.ir/api/web/download/sdk/v1/inTrack.min.js',
    'Intk',
    {
      app_key: 'AAAAGg',
      auth_key: 'a8cf0ed4-d915-44bf-9645-2b72a349036c',
      public_key:
        'BPbiuDzDiduVxrx4pxSZynQ9ianfmIYD7oC_GJ-Mg7bQvyzkAf8NuPDHuBicjRVkMPkwmg-xurke8kgC12TRLD4=',
      yektanet_syncing: true,
      mediaad_syncing: true,
    },
  );
  window?.Intk('initOnSiteMessaging', {});
};
const initAnalytics = () => {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-WGXHJ68Z');
};
function BaseLayout({
  config,
  gdpr,
  children,
  translation,
  postLocalization,
  contactUsLocalization,
  posts,
}) {
  const { modalOpenState } = useContext(ModalWithReducer);

  useEffect(() => {
    const storageStateOption = JSON.parse(localStorage.getItem('option'));
    const analytics = storageStateOption?.analytics;
    // const essential = storageStateOption?.essential;
    const visited = localStorage.getItem('visited');

    if (analytics === true) {
      initAnalytics();
    }
    initIntrack();
    const userDetails = {
      attributes: {
        visites_smartech: true,
      },
    };
    if (!visited) {
      localStorage.setItem('visited', 'true');
      window?.Intk('updateProfile', userDetails);
    }

    // if (essential === true) {
    // }
    // if(!shouldHideGDPR){
    //   initIntrack()
    // }
    if (storageStateOption !== null) {
      window?.Intk('InitWebPush', {
        isRTL: true,
        widget: {
          enable: true,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpenState?.showModalGpdr]);

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  return (
    <>
      {/* <NextSeo titleTemplate={' اسمارتک | %s'} />*/}


      <AppShell
      
  


      >
            <AppShell.Header>
              <HeaderMegaMenu
        links={config?.Navigation}
                logo={config?.logo}
                button={config?.header_button}
                posts={posts}
                />
</AppShell.Header>
      
      <AppShell.Main>

      <main
        className={'main-box'}
      >
        {children}
      </main> 
      </AppShell.Main>
      <AppShell.Section>
      <GeneralFooter
          show={show}
          links={config?.footerNavigation || []}
          handleClose={handleClose}
          handleOpen={handleOpen}
          logo={config?.logo}
          copy_right={config?.copy_right}
          social={config?.social_media}
          trust={config?.trust_logo || []}
        />
        </AppShell.Section>
      </AppShell>


            {/* <SuccessModal />
      { <GDPR content={gdpr} /> */}
    </>
  );
}
export { BaseLayout };
