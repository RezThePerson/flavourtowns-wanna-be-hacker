import { parse } from "node-html-parser";

export function load_seed(html) {
	let root = parse(html);

	return {
		name: root.querySelector(".votes-new__project-card-content > h1:nth-child(1)").text,
		description: root.querySelector(".votes-new__project-card-content > p:nth-child(2)").text,
		devlogs: root.querySelector("div.votes-new__project-card-stat:nth-child(1) > span:nth-child(2)").text,
		time: root.querySelector("div.votes-new__project-card-stat:nth-child(2) > span:nth-child(2)").text,
		bannerURL: root.querySelector(".votes-new__project-banner-image").attributes.src,
		projectID: root.querySelector("#vote_project_id").attributes.value,
		shipEventID: root.querySelector("#vote_ship_event_id").attributes.value,
		voteToken: root.querySelector(".votes-new__form > div:nth-child(3) > form:nth-child(1) > input:nth-child(1)").attributes.value,
		reportToken: root.querySelector("#report-modal > form:nth-child(3) > input:nth-child(1)").attributes.value,
	};
}
