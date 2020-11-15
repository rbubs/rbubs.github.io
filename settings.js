const ENV = process.env.NODE_ENV || 'development';

const envConfigs = {
  shared: {},
  development: {
    apiServer: 'localhost:3000',
    websocketServer: 'localhost:3000',
  },
  production: {
    apiServer: 'coherent-rite-293701.uc.r.appspot.com',
    websocketServer: 'coherent-rite-293701.uc.r.appspot.com',
  },
};

module.exports = {
  // Base application title used in document.title
  title: 'Rebase Radio',
  description: '',

  // use cname option to add CNAME file to webpack build
  // CNAME file allows to use custom domain names with gh-pages, example:
  // cname: 'omatsuri.app'
  cname: 'rebase.radio',

  // add repo path for username.github.io/repoPath for react router to recognize paths,
  // use only when deployed to github.io, leave as null for deployments with custom domains
  // repoPath: '/rebase-radio',
  repoPath: null,

  // list of routes that should be prerendered
  // list should always contain '/' and '/404' for gh-pages to recognize app
  prerenderRoutes: ['/', '/404'],

  // Load environment specific configs
  ...envConfigs.shared,
  ...envConfigs[ENV],
};
