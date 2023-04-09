import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
function Footer() {
  const {footer} = useThemeConfig();
  const {siteConfig} = useDocusaurusContext();

  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;
  return (
    <FooterLayout
      siteConfig={siteConfig}
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      logo={logo && <FooterLogo logo={logo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} siteConfig={siteConfig} />}
    />
  );
}
export default React.memo(Footer);
