import { d as db, C as Clients } from '../../../chunks/_astro_db_DevrPhLy.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, request }) => {
  const clientId = params.clientId;
  const clients = await db.select().from(Clients).where(eq(Clients.id, Number(clientId)));
  if (clients.length === 0) {
    return new Response(JSON.stringify({ msg: "Client not foundddd" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return new Response(JSON.stringify(clients.at(0)), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
const PATCH = async ({ params, request }) => {
  const clientId = params.clientId;
  try {
    const { id, ...body } = await request.json();
    const results = await db.update(Clients).set(body).where(eq(Clients.id, Number(clientId)));
    const updatedClient = await db.select().from(Clients).where(eq(Clients.id, Number(clientId)));
    return new Response(JSON.stringify(updatedClient.at(0)), {
      status: 201,
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
const DELETE = async ({ params, request }) => {
  const clientId = params.clientId;
  await db.delete(Clients).where(eq(Clients.id, Number(clientId)));
  return new Response(JSON.stringify({ msg: "Client deleted successfully" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    DELETE,
    GET,
    PATCH,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
