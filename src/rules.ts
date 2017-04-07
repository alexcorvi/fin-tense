export interface Features {
	rootTense:string;
	auxNo:number;
	auxTenses:string[];
	auxBases:string[];
}

export interface Rule extends Features {
	tense:string[];
}

export const rules:Rule[] = [
	// present simple
	{
		tense:["present","simple"],
		rootTense:"present",
		auxNo:0,
		auxBases:[],
		auxTenses:[],
	},
	// present simple
	{
		tense:["present","simple"],
		rootTense:"present",
		auxNo:1,
		auxBases:["do"],
		auxTenses:["present"],
	},
	// past simple
	{
		tense:["past","simple"],
		rootTense:"past",
		auxNo:0,
		auxBases:[],
		auxTenses:[],
	},
	// past simple
	{
		tense:["past","simple"],
		rootTense:"present",
		auxNo:1,
		auxBases:["do"],
		auxTenses:["past"],
	},
	// present progressive
	{
		tense:["present","progressive"],
		rootTense:"gerund",
		auxNo:1,
		auxBases:["be"],
		auxTenses:["present"],
	},
	// past progressive
	{
		tense:["past","progressive"],
		rootTense:"gerund",
		auxNo:1,
		auxBases:["be"],
		auxTenses:["past"],
	},
	// present perfect simple
	{
		tense:["present","perfect","simple"],
		rootTense:"past",
		auxNo:1,
		auxBases:["have"],
		auxTenses:["present"],
	},
	// present perfect progressive
	{
		tense:["present","perfect","progressive"],
		rootTense:"gerund",
		auxNo:2,
		auxBases:["have","be"],
		auxTenses:["present","past"],
	},
	// past perfect simple
	{
		tense:["past","perfect","simple"],
		rootTense:"past",
		auxNo:1,
		auxBases:["have"],
		auxTenses:["past"],
	},
	// past perfect progressive
	{
		tense:["past","perfect","progressive"],
		rootTense:"gerund",
		auxNo:2,
		auxBases:["have","be"],
		auxTenses:["past","past"],
	},
	// future simple
	{
		tense:["future","simple","(going)"],
		rootTense:"present",
		auxNo:3,
		auxBases:["be","go","to"],
		auxTenses:["present","gerund",""],
	},
	// future simple
	{
		tense:["future","simple"],
		rootTense:"present",
		auxNo:1,
		auxBases:["will"],
		auxTenses:["present"],
	},
	// future progressive
	{
		tense:["future","progressive"],
		rootTense:"gerund",
		auxNo:2,
		auxBases:["will","be"],
		auxTenses:["present","present"],
	},
	// future perfect simple
	{
		tense:["future","perfect","simple"],
		rootTense:"past",
		auxNo:2,
		auxBases:["will","have"],
		auxTenses:["present","present"],
	},
	// future perfect progressive
	{
		tense:["future","perfect","progressive"],
		rootTense:"gerund",
		auxNo:3,
		auxBases:["will","have","be"],
		auxTenses:["present","present","past"],
	}
];