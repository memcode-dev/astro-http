import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, j as decodeKey } from './chunks/astro/server_D3nhOhHx.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/MEM/Desktop/Astro/05-astro-http/","cacheDir":"file:///C:/Users/MEM/Desktop/Astro/05-astro-http/node_modules/.astro/","outDir":"file:///C:/Users/MEM/Desktop/Astro/05-astro-http/dist/","srcDir":"file:///C:/Users/MEM/Desktop/Astro/05-astro-http/src/","publicDir":"file:///C:/Users/MEM/Desktop/Astro/05-astro-http/public/","buildClientDir":"file:///C:/Users/MEM/Desktop/Astro/05-astro-http/dist/","buildServerDir":"file:///C:/Users/MEM/Desktop/Astro/05-astro-http/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"api/get-person.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/get-person.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/get-person\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"get-person.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/get-person.json.ts","pathname":"/api/get-person.json","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/clients/[clientid]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/clients\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"clients","dynamic":false,"spread":false}],[{"content":"clientId","dynamic":true,"spread":false}]],"params":["clientId"],"component":"src/pages/api/clients/[clientId].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/clients","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/clients\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"clients","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/clients/index.ts","pathname":"/api/clients","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/posts/[slug]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/posts\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"posts","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/api/posts/[slug].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/posts","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/posts\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/posts/index.ts","pathname":"/api/posts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--accent: #2337ff;--accent-dark: #000d8a;--black: 15, 18, 25;--gray: 96, 115, 159;--gray-light: 229, 233, 240;--gray-dark: 34, 41, 57;--gray-gradient: rgba(var(--gray-light), 50%), #fff;--box-shadow: 0 2px 6px rgba(var(--gray), 25%), 0 8px 24px rgba(var(--gray), 33%), 0 16px 32px rgba(var(--gray), 33%)}@font-face{font-family:Atkinson;src:url(/fonts/atkinson-regular.woff) format(\"woff\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Atkinson;src:url(/fonts/atkinson-bold.woff) format(\"woff\");font-weight:700;font-style:normal;font-display:swap}body{font-family:Atkinson,sans-serif;margin:0;padding:0;text-align:left;background:linear-gradient(var(--gray-gradient)) no-repeat;background-size:100% 600px;word-wrap:break-word;overflow-wrap:break-word;color:rgb(var(--gray-dark));font-size:20px;line-height:1.7}main{width:720px;max-width:calc(100% - 2em);margin:auto;padding:3em 1em}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em}h2{font-size:2.441em}h3{font-size:1.953em}h4{font-size:1.563em}h5{font-size:1.25em}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}img{max-width:100%;height:auto;border-radius:8px}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}@media(max-width:720px){body{font-size:18px}main{padding:1em}}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}footer[data-astro-cid-sz7xmlte]{padding:2em 1em 6em;background:linear-gradient(var(--gray-gradient)) no-repeat;color:rgb(var(--gray));text-align:center}.social-links[data-astro-cid-sz7xmlte]{display:flex;justify-content:center;gap:1em;margin-top:1em}.social-links[data-astro-cid-sz7xmlte] a[data-astro-cid-sz7xmlte]{text-decoration:none;color:rgb(var(--gray))}.social-links[data-astro-cid-sz7xmlte] a[data-astro-cid-sz7xmlte]:hover{color:rgb(var(--gray-dark))}header[data-astro-cid-3ef6ksr2]{margin:0;padding:0 1em;background:#fff;box-shadow:0 2px 8px rgba(var(--black),5%)}h2[data-astro-cid-3ef6ksr2]{margin:0;font-size:1em}h2[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2],h2[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2].active{text-decoration:none}nav[data-astro-cid-3ef6ksr2]{display:flex;align-items:center;justify-content:space-between}nav[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2]{padding:1em .5em;color:var(--black);border-bottom:4px solid transparent;text-decoration:none}nav[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2].active{text-decoration:none;border-bottom-color:var(--accent)}.social-links[data-astro-cid-3ef6ksr2],.social-links[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2]{display:flex}@media(max-width:720px){.social-links[data-astro-cid-3ef6ksr2]{display:none}}\na[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/MEM/Desktop/Astro/05-astro-http/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/MEM/Desktop/Astro/05-astro-http/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/MEM/Desktop/Astro/05-astro-http/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/MEM/Desktop/Astro/05-astro-http/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/MEM/Desktop/Astro/05-astro-http/src/pages/api/posts/[slug].ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/api/posts/[slug]@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/MEM/Desktop/Astro/05-astro-http/src/pages/api/posts/index.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/api/posts/index@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/MEM/Desktop/Astro/05-astro-http/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/clients/[clientId]@_@ts":"pages/api/clients/_clientid_.astro.mjs","\u0000@astro-page:src/pages/api/clients/index@_@ts":"pages/api/clients.astro.mjs","\u0000@astro-page:src/pages/api/get-person.json@_@ts":"pages/api/get-person.json.astro.mjs","\u0000@astro-page:src/pages/api/posts/[slug]@_@ts":"pages/api/posts/_slug_.astro.mjs","\u0000@astro-page:src/pages/api/posts/index@_@ts":"pages/api/posts.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BTf0Mqwb.mjs","C:/Users/MEM/Desktop/Astro/05-astro-http/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:\\Users\\MEM\\Desktop\\Astro\\05-astro-http\\.astro\\content-assets.mjs":"chunks/content-assets_CCSMADdJ.mjs","\u0000astro:assets":"chunks/_astro_assets_ae7wj0_C.mjs","C:\\Users\\MEM\\Desktop\\Astro\\05-astro-http\\.astro\\content-modules.mjs":"chunks/content-modules_CO24JHSr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_PjVKdpXm.mjs","C:/Users/MEM/Desktop/Astro/05-astro-http/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_DtheF9fp.mjs","C:/Users/MEM/Desktop/Astro/05-astro-http/src/content/blog/using-mdx.mdx":"chunks/using-mdx_DwESesI6.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/blog-placeholder-3.ijrf8Ohr.jpg","/_astro/blog-placeholder-4.gLBdjEDe.jpg","/_astro/blog-placeholder-about.BtEdEmGp.jpg","/_astro/blog-placeholder-2.1WQRLJGH.jpg","/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","/_astro/blog-placeholder-5.CB3Xi-gp.jpg","/favicon.svg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/about/index.html","/api/get-person.json","/blog/index.html","/rss.xml"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"3DXjITsFmw6FvFtK7S1mr3na4wT+sJNufoWepkemtHo=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
