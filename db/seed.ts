import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Clients).values([
		{name: 'Alice', age: 30, isActive: true},
		{ name: 'Bob', age: 25, isActive: false },
		{ name: 'Charlie', age: 35, isActive: true },
	]);
}
