/// <reference path="../node_modules/@types/node/index.d.ts" />


import {Run} from "finnlp";
import "../src/index";
import {cases} from "./cases";

let errors:Run[] = [];

function pass(sentence:string){
	console.log(`✔ PASS: ${sentence}`);
}

function fail(sentence:string,instance:Run){
	console.log(`❌ FAIL: ${sentence}`);
	errors.push(instance);
}

cases.forEach((group)=>{
	group.tests.forEach((sentence)=>{
		const instance = new Run(sentence);
		const tenses = instance.tense();
		if(group.tags.join("") === tenses[0].join("")) pass(sentence);
		else fail(sentence,instance);
	});
});

if(errors.length) {
	errors.forEach(instance=>{
		console.log("Inaccuracies:");
		console.log(instance.raw);
		console.log(JSON.stringify(instance));
		console.log(instance.tense());
	});
	process.exit(1);
}