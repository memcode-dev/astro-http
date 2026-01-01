var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// astro:db:astro:db
var astro_db_exports = {};
__reExport(astro_db_exports, virtual_star);
import * as virtual_star from "@astrojs/db/dist/runtime/virtual.js";

// db/config.ts
var Clients = (0, astro_db_exports.defineTable)({
  columns: {
    id: astro_db_exports.column.number({ primaryKey: true, autoIncrement: true }),
    name: astro_db_exports.column.text(),
    age: astro_db_exports.column.number(),
    isActive: astro_db_exports.column.boolean()
  }
});
var config_default = (0, astro_db_exports.defineDb)({
  tables: {
    Clients
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXN0cm86ZGI6YXN0cm86ZGIiLCAiZGIvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiQGFzdHJvanMvZGIvZGlzdC9ydW50aW1lL3ZpcnR1YWwuanNcIiIsICJpbXBvcnQgeyBjb2x1bW4sIGRlZmluZURiLCBkZWZpbmVUYWJsZSB9IGZyb20gJ2FzdHJvOmRiJztcblxuY29uc3QgQ2xpZW50cyA9IGRlZmluZVRhYmxlKHtcbiAgY29sdW1uczoge1xuICAgIGlkOiBjb2x1bW4ubnVtYmVyKHtwcmltYXJ5S2V5OiB0cnVlLCBhdXRvSW5jcmVtZW50OiB0cnVlfSksXG4gICAgbmFtZTogY29sdW1uLnRleHQoKSxcbiAgICBhZ2U6IGNvbHVtbi5udW1iZXIoKSxcbiAgICBpc0FjdGl2ZTogY29sdW1uLmJvb2xlYW4oKSxcbiAgfSxcbn0pXG5cbi8vIGh0dHBzOi8vYXN0cm8uYnVpbGQvZGIvY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVEYih7XG4gIHRhYmxlczoge1xuICAgIENsaWVudHMsXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLDhCQUFjOzs7QUNFZCxJQUFNLGNBQVUsOEJBQVk7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJLHdCQUFPLE9BQU8sRUFBQyxZQUFZLE1BQU0sZUFBZSxLQUFJLENBQUM7QUFBQSxJQUN6RCxNQUFNLHdCQUFPLEtBQUs7QUFBQSxJQUNsQixLQUFLLHdCQUFPLE9BQU87QUFBQSxJQUNuQixVQUFVLHdCQUFPLFFBQVE7QUFBQSxFQUMzQjtBQUNGLENBQUM7QUFHRCxJQUFPLHFCQUFRLDJCQUFTO0FBQUEsRUFDdEIsUUFBUTtBQUFBLElBQ047QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
