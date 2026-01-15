import { getCollection } from 'astro:content';
import { Clients, db, Posts } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Clients).values([
		{name: 'Alice', age: 30, isActive: true},
		{ name: 'Bob', age: 25, isActive: false },
		{ name: 'Charlie', age: 35, isActive: true },
	]);

	const posts = await getCollection('blog');
	await db.insert(Posts).values(
		posts.map((post) => ({
			id: post.id,
			title: post.data.title,
			likes: Math.round(Math.random() * 100)
		}))
	);
}
