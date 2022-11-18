export const FB_PIXEL_ID = 492426002792969;

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const devent = (name, options = {}) => {
  window.fbq("track", name, options);
};
