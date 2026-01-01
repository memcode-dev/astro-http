import { asDrizzleTable } from '@astrojs/db/runtime';
import { createClient } from '@astrojs/db/db-client/libsql-node.js';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createClient({
  url: "libsql://05-database-memcode-dev.aws-us-east-1.turso.io",
  token: process.env.ASTRO_DB_APP_TOKEN ?? "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjcyMjA3ODgsImlkIjoiMDc4NGZmMzAtMGU3YS00ZTMwLWEzMDItYjNjODJlMWNkZWQ2IiwicmlkIjoiY2Y1NmM1YzAtZWY3Ny00MDYwLTg3NjYtM2IxMWMxNzY5Y2RjIn0.ZpbgyIfRrlBcgaReSoILTGR6X3uTPii332u6potDQX0S53heO8mJAX6swNeTUXSVgcllu_-pSFJ4L84L_KmXAg"
});
const Clients = asDrizzleTable("Clients", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Clients", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Clients", "primaryKey": false, "optional": false } }, "age": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "age", "collection": "Clients", "primaryKey": false, "optional": false } }, "isActive": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "isActive", "collection": "Clients" } } }, "deprecated": false, "indexes": {} }, false);

export { Clients as C, db as d };
