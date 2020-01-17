import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';


const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/index.html",
        "exact": true,
        "component": require('../index.js').default,
        "_title": "geoTest",
        "_title_default": "geoTest"
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default,
        "_title": "geoTest",
        "_title_default": "geoTest"
      },
      {
        "component": () => React.createElement(require('/home/wb/桌面/umi/geoTest/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "geoTest",
        "_title_default": "geoTest"
      }
    ],
    "_title": "geoTest",
    "_title_default": "geoTest"
  },
  {
    "component": () => React.createElement(require('/home/wb/桌面/umi/geoTest/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "geoTest",
    "_title_default": "geoTest"
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return (
<Router history={history}>
      { renderRoutes(routes, props) }
    </Router>
  );
}
