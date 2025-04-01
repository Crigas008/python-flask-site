
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 502, hash: '2126a5dc8a6c99ac40681951522393c3e265bc9dcc69b57c03b6bf980a1b2a85', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: '01d3d9bf3bc90753c87d5bdce46356f5cd55bdb197ff92fdac55732ff70689f5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20845, hash: '83f34f8e9f758015b84ffdd05f6ce611ae468e01a150cdfd3a09a983501eba41', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
