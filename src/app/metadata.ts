import { Metadata } from 'next';

import { getClientConfig } from '@/config/client';
import { getServerConfig } from '@/config/server';
import { OFFICIAL_URL } from '@/const/url';

import pkg from '../../package.json';

const title = 'LobeChat';
const { description, homepage } = pkg;

const { SITE_URL = OFFICIAL_URL } = getServerConfig();
const { BASE_PATH } = getClientConfig();

// if there is a base path, then we don't need the manifest
const noManifest = !!BASE_PATH;

const metadata: Metadata = {
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title,
  },
  description,
  icons: {
    apple:
      'https://i.imgur.com/9uXx7VW.png',
    icon: 'https://pouch.jumpshare.com/preview/VE38OFD72lPLxY7gMq_VYDy097i70uxmk3HmaCYuhPBWAIDwtAfOddqFGosTfAWGmhLCIb3rEhobyEIBlRHgiuY1lrrIfEA_Fs4RQtAEx_I',
    shortcut:
      'https://pouch.jumpshare.com/preview/tr2SvJhA7G9DZB08U_lGX7S1yaaKPySfkYFsD4gn6GKVJKSMldO8o9ZO-OmWa-CgmhLCIb3rEhobyEIBlRHgisdttiHrMv-EuMOjqgFhyho',
  },
  manifest: noManifest ? undefined : '/manifest.json',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    description: description,
    images: [
      {
        alt: title,
        height: 360,
        url: 'https://i.imgur.com/9uXx7VW.png',
        width: 480,
      },
      {
        alt: title,
        height: 720,
        url: 'https://i.imgur.com/9uXx7VW.png',
        width: 960,
      },
    ],
    locale: 'en-US',
    siteName: title,
    title: title,
    type: 'website',
    url: homepage,
  },

  title: {
    default: title,
    template: '%s · LobeChat',
  },
  twitter: {
    card: 'summary_large_image',
    description,
    images: [
      'https://i.imgur.com/9uXx7VW.png',
    ],
    site: '@lobehub',
    title,
  },
};

export default metadata;
