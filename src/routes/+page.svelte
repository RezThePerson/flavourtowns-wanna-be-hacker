<script>
	import { onMount } from "svelte";

	let body = "";
	let auth;

	onMount(() => {
		auth = localStorage.getItem("auth");
	});

	async function load_seeds() {
		const response = await fetch(`/api/generate_seeds`, {
			method: "GET",
			headers: {
				auth: auth,
				"Content-Type": "application/json",
			},
		});

		body = body + (await response.text());
	}
</script>

<button onclick={load_seeds}>load seed</button>

{body}
