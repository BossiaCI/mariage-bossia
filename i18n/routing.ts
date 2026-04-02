import {defineRouting} from 'next-intl/routing';
import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';


export const routing = defineRouting({
  locales: ['fr', 'pt'],
  defaultLocale: 'fr',
  pathnames: {
    '/': '/',
    '/pathnames': {
      pt: '/nomes-de-caminho',
      fr: '/noms-de-chemin',
    },
    '/rsvp/list': {
        fr: '/rsvp/liste',
        pt: '/rsvp/lista'
      }
  }
});
