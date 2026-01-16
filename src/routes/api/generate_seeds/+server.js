export async function GET({ request }) {
	let auth = request.headers.get("auth");

	const response = await fetch("https://flavortown.hackclub.com/votes/new", {
		headers: {
			"User-Agent":
				"Rez's Flavortown Voting Tool (github:RezThePerson/flavourtowns-wanna-be-hacker)",
			Cookie: `_flavortown_session_v2=${auth}`,
		},
	});

	const html = await response.text();

	return new Response(JSON.stringify({ html }), {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
