
import { actions, defineAction } from "astro:actions";
import { db, eq, Posts } from "astro:db";
import { z } from "astro:schema";


export const updateLikes = defineAction({
    accept: 'json',
    input: z.object({
        id: z.string(),
        increment: z.number()
    }),

    handler: async ({ id, increment }) => {
        const posts = await db.select().from(Posts).where(eq(Posts.id, id));
        const post = posts[0];

        if (!post) {
            await db.insert(Posts).values({
                id: id,
                title: "Post not found",
                likes: increment
            });
            return { message: "Post creado" };
        }
        await db.update(Posts)
            .set({
                likes: post.likes + increment
            })
            .where(eq(Posts.id, id));

        return { success: true };
    }
});