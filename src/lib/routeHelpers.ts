export function matchPath(pathname: string, pathTemplate: string): boolean {
  const regex = new RegExp('^' + pathTemplate.replace(/:\w+/g, '([^/]+)') + '/?$');
  return regex.test(pathname);
}
