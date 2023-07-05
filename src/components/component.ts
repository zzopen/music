import { AppProvider,PageContent,AppLogo } from "./app";
export * from './app'

import {LayoutContent, LayoutFooter, LayoutHeader, LayoutSider} from './layout'

export * from './layout'

declare module "vue" {
  export interface GlobalComponents {
    MAppProvider: typeof AppProvider;
    MAppLogo: typeof AppLogo;
    MPageContent: typeof PageContent;
    MLayoutContent: typeof LayoutContent;
    MLayoutHeader: typeof LayoutHeader;
    MLayoutFooter: typeof LayoutFooter;
    MLayoutSider: typeof LayoutSider;
  }
}