import './core/polyfill';
import '@/global.less';
import '@/global';
import { renderClient } from './core/renderClient';
import { getRoutes } from './core/route';
import { createHistory } from './core/history';

const publicPath = '/';
const runtimePublicPath = false;

async function render() {
  const { routes, routeComponents } = await getRoutes();

  const basename = '/';
  const historyType = 'browser';

  const history = createHistory({
    type: historyType,
    basename,
  });

  return renderClient({
    routes,
    routeComponents,
    // @ts-ignore
    rootElement: document.getElementById('root'),
    publicPath,
    runtimePublicPath,
    history,
    historyType,
    basename,
  });
}

import './core/plugin-moment2dayjs/runtime';
render();
