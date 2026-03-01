export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  if (url.hostname.endsWith(".pages.dev")) {
    return Response.redirect(`https://ram4n.com${url.pathname}`, 301);
  }

  return context.next();
};
