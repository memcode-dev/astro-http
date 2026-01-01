import { g as getEntry, a as getCollection } from '../../chunks/_astro_content_DdpFGFWM.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ params, request }) => {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");
  if (slug) {
    const post = await getEntry("blog", slug);
    if (post) {
      return new Response(JSON.stringify(post), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return new Response(JSON.stringify({ msg: "Post not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  const posts = await getCollection("blog");
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
