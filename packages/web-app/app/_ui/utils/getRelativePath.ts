export const getRelativePath = (url: string) => {
  return url.substring(url.lastIndexOf('/'));
};
