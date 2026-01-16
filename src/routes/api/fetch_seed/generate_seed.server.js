export async function generate_seed(auth) {
	const response = await fetch("https://flavortown.hackclub.com/votes/new", {
		headers: {
			"User-Agent": "Rez's Flavortown Voting Tool (github:RezThePerson/flavourtowns-wanna-be-hacker)",
			Cookie: `_flavortown_session_v2=${auth}`,
		},
	});

	return await response.text();
}
