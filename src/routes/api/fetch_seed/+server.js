import { generate_seed } from "./generate_seed.server.js";
import { load_seed } from "./load_seed.server.js";

export async function GET({ request }) {
	let auth = request.headers.get("auth");

	let html = await generate_seed(auth);

	let seed_json = await load_seed(html);

	return new Response(JSON.stringify(seed_json), {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
