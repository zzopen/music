export interface PreDefineCls {
  namespace: string;
  // css class name
  layout: string;
  layoutContent: string;
  layoutHeader: string;
  layoutFooter: string;
  layoutSider: string;
  layoutSiderSider: string;
  appLogo: string;
  // css variables
  siderWidth: string
}

export const preDefineCls: PreDefineCls;
export default preDefineCls;
