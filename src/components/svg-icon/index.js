import SvgIcon from "./SvgIcon.vue";

export function setSvgIcon(app) {
  const req = require.context("../../assets/icons", false, /\.svg$/);
  const requireAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  requireAll(req);

  app.component("SvgIcon", SvgIcon);
}
