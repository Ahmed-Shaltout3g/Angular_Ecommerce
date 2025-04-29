
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/Angular_Ecommerce/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/components/orders/orders.component.ts": [
    {
      "path": "chunk-LNP7RT5B.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HVDZ737I.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/category-details/category-details.component.ts": [
    {
      "path": "chunk-O7UUZTUF.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MLIKP6TM.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/login/login.component.ts": [
    {
      "path": "chunk-TGGGUKDE.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HVDZ737I.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/register/register.component.ts": [
    {
      "path": "chunk-KWW6RDPL.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HVDZ737I.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/forget-password/forget-password.component.ts": [
    {
      "path": "chunk-BNUPCYI6.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HVDZ737I.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/notfound/notfound.component.ts": [
    {
      "path": "chunk-YTML4Y36.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/home/home.component.ts": [
    {
      "path": "chunk-W45HNTP2.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MLIKP6TM.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-CXQEVBNS.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-35KNFHFC.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-3FPDRB5I.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/product/product.component.ts": [
    {
      "path": "chunk-56M46ZLR.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HVDZ737I.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-CXQEVBNS.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-3FPDRB5I.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/categories/categories.component.ts": [
    {
      "path": "chunk-CSUWXRLO.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MLIKP6TM.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-CXQEVBNS.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/brands/brands.component.ts": [
    {
      "path": "chunk-7HYA5VYC.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HVDZ737I.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-CXQEVBNS.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/cart/cart.component.ts": [
    {
      "path": "chunk-WYSTR3HB.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/details/details.component.ts": [
    {
      "path": "chunk-YJEJ2P5Y.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-35KNFHFC.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-3FPDRB5I.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/allorders/allorders.component.ts": [
    {
      "path": "chunk-KEQQB7I7.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 893, hash: '0927ddfbc5cb810c91b56e9201afd0c52b095169aad389f14ff3561563bb60a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1433, hash: 'ed273f2f5ab618b9e88a7354d6633d4cc1a67ac68831d317925533b4299d8296', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
