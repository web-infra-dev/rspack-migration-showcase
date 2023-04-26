export interface IConfigFromPluginsJoi {
  codeSplitting?: {
    jsStrategy?: 'bigVendors' | 'depPerChunk' | 'granularChunks';
    jsStrategyOptions?: {};
    cssStrategy?: 'mergeAll';
    cssStrategyOptions?: {};
  };
  title?: string;
  styles?: unknown[];
  scripts?: unknown[];
  routes?: {}[];
  reactRouter5Compat?: {};
  presets?: string[];
  plugins?: string[];
  npmClient?: 'pnpm' | 'tnpm' | 'cnpm' | 'yarn' | 'npm';
  mountElementId?: string;
  metas?: unknown[];
  links?: unknown[];
  historyWithQuery?: {};
  history?: {
    type?: 'browser' | 'hash' | 'memory';
  };
  headScripts?: unknown[];
  esbuildMinifyIIFE?: boolean;
  conventionRoutes?: {
    base?: string;
    exclude?: unknown[];
  };
  base?: string;
  analyze?: {};
  writeToDisk?: boolean;
  theme?: {};
  targets?: {};
  svgr?: {};
  svgo?: {} | boolean;
  styleLoader?: {};
  srcTranspilerOptions?: {
    esbuild?: {};
    swc?: {};
  };
  srcTranspiler?: 'babel' | 'esbuild' | 'swc' | 'none';
  sassLoader?: {};
  runtimePublicPath?: {};
  purgeCSS?: {};
  publicPath?: string;
  proxy?: {} | unknown[];
  postcssLoader?: {};
  outputPath?: string;
  normalCSSLoaderModules?: {};
  mfsu?:
    | {
        cacheDirectory?: string;
        chainWebpack?: () => any;
        esbuild?: boolean;
        exclude?: unknown[];
        include?: string[];
        mfName?: string;
        remoteAliases?: string[];
        remoteName?: string;
        runtimePublicPath?: boolean;
        shared?: {};
        strategy?: 'eager' | 'normal';
      }
    | boolean;
  mdx?: {
    loader?: string;
    loaderOptions?: {};
  };
  manifest?: {};
  lessLoader?: {};
  jsMinifierOptions?: {};
  jsMinifier?: 'esbuild' | 'swc' | 'terser' | 'uglifyJs' | 'none';
  inlineLimit?: number;
  ignoreMomentLocale?: boolean;
  https?: {};
  hash?: boolean;
  forkTSChecker?: {};
  fastRefresh?: boolean;
  extraPostCSSPlugins?: unknown[];
  extraBabelPresets?: unknown[];
  extraBabelPlugins?: unknown[];
  extraBabelIncludes?: unknown[];
  externals?: {} | string | (() => any);
  esm?: {};
  devtool?: string | boolean;
  depTranspiler?: 'babel' | 'esbuild' | 'swc' | 'none';
  define?: {};
  deadCode?: {};
  cssMinifierOptions?: {};
  cssMinifier?: 'cssnano' | 'esbuild' | 'parcelCSS' | 'none';
  cssLoaderModules?: {};
  cssLoader?: {};
  copy?: unknown[];
  cacheDirectoryPath?: string;
  babelLoaderCustomize?: string;
  autoprefixer?: {};
  autoCSSModules?: boolean;
  alias?: {};
  crossorigin?:
    | boolean
    | {
        includes?: {}[];
      };
  esmi?: {
    cdnOrigin?: string;
    shimUrl?: string;
  };
  exportStatic?: {
    extraRoutePaths?: (() => any) | string[];
  };
  favicons?: string[];
  helmet?: boolean;
  icons?: {
    autoInstall?: {};
    defaultComponentConfig?: {};
    alias?: {};
    include?: string[];
  };
  mock?: {
    exclude?: string[];
    include?: string[];
  };
  mpa?: {
    template?: string;
    layout?: string;
    getConfigFromEntryFile?: boolean;
    entry?: {};
  };
  phantomDependency?: {
    exclude?: string[];
  };
  polyfill?: {
    imports?: string[];
  };
  routePrefetch?: {};
  terminal?: {};
  tmpFiles?: boolean;
  clientLoader?: {};
  routeProps?: {};
  ssr?: {
    serverBuildPath?: string;
    platform?: string;
    builder?: 'esbuild' | 'webpack';
  };
  lowImport?: {
    libs?: unknown[];
    css?: string;
  };
  vite?: {};
  apiRoute?: {
    platform?: string;
  };
  monorepoRedirect?:
    | boolean
    | {
        srcDir?: string[];
        exclude?: {}[];
        peerDeps?: boolean;
      };
  test?: {};
  clickToComponent?: {
    editor?: string;
  };
  legacy?: {
    buildOnly?: boolean;
    nodeModulesTransform?: boolean;
    checkOutput?: boolean;
  };
  classPropertiesLoose?: {};
  verifyCommit?: {
    scope?: string[];
    allowEmoji?: boolean;
  };
  run?: {
    globals?: string[];
  };
  access?: {} | boolean;
  analytics?:
    | {
        baidu?: string;
        ga?: string;
        ga_v2?: string;
      }
    | boolean;
  antd?:
    | {
        configProvider?: {};
        dark?: boolean;
        compact?: boolean;
        import?: boolean;
        style?: 'less' | 'css';
        theme?: {};
        appConfig?: {};
      }
    | boolean;
  dva?:
    | {
        extraModels?: string[];
        immer?: {};
        skipModelValidate?: boolean;
      }
    | boolean;
  initialState?:
    | {
        loading?: string;
      }
    | boolean;
  layout?: {} | boolean;
  locale?:
    | {
        default?: string;
        useLocalStorage?: boolean;
        baseNavigator?: boolean;
        title?: boolean;
        antd?: boolean;
        baseSeparator?: string;
      }
    | boolean;
  mf?: {
    name?: string;
    remotes?: {
      aliasName?: string;
      name?: string;
      entry?: string;
      entries?: {};
      keyResolver?: string;
    }[];
    shared?: {};
    library?: {};
  };
  model?:
    | {
        extraModels?: string[];
      }
    | boolean;
  moment2dayjs?:
    | {
        preset?: string;
        plugins?: unknown[];
      }
    | boolean;
  qiankun?:
    | {
        slave?: {};
        master?: {};
        externalQiankun?: boolean;
      }
    | boolean;
  reactQuery?: {
    devtool?: {} | boolean;
    queryClient?: {} | boolean;
  };
  request?:
    | {
        dataField?: '' | string;
      }
    | boolean;
  styledComponents?: {
    babelPlugin?: {};
  };
  tailwindcss?: {} | boolean;
  valtio?: {};
  openAPI?:
    | {
        requestLibPath?: string;
        schemaPath?: string;
        mock?: boolean;
        projectName?: string;
        apiPrefix?: string | (() => any);
        namespace?: string;
        hook?: {
          customFunctionName?: () => any;
          customClassName?: () => any;
        };
      }[]
    | {
        requestLibPath?: string;
        schemaPath?: string;
        mock?: boolean;
        projectName?: string;
        apiPrefix?: string | (() => any);
        namespace?: string;
        hook?: {
          customFunctionName?: () => any;
          customClassName?: () => any;
        };
      };
  keepalive?: unknown[];
  tabsLayout?:
    | boolean
    | {
        hasCustomTabs?: boolean;
        hasDropdown?: boolean;
        hasFixedHeader?: boolean;
      };
  requestRecord?: {
    exclude?: unknown[];
    type?: boolean;
    namespace?: string;
    comment?: boolean;
    outputDir?: string;
    successFilter?: () => any;
    role?: string;
    mock?: {
      outputDir?: string;
      fileName?: string;
      usingRole?: string;
    };
  };
}
