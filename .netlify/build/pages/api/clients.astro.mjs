import { d as db, C as Clients } from '../../chunks/_astro_db_DevrPhLy.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ params, request }) => {
  const users = await db.select().from(Clients);
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
const POST = async ({ params, request }) => {
  try {
    const { id, ...body } = await request.json();
    const { lastInsertRowid } = await db.insert(Clients).values(body);
    return new Response(JSON.stringify({
      id: +lastInsertRowid.toString(),
      ...body
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ msg: "Page not founddd" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
