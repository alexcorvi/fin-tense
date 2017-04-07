import * as Fin from "finnlp";
import {Inflectors} from "en-inflectors";
import {tagTense} from "./tag_tense";
import {rules} from "./rules";

declare module "finnlp" {
	export interface Run {
		tense:()=>string[][];
	}
}

Fin.Run.prototype.tense = function(this:Fin.Run){
	const tenses:string[][] = [];
	this.sentences.forEach((sentence,sentenceIndex)=>{
		const rootIndex = sentence.deps.findIndex(node=>node.parent === -1);
		const rootTense = tagTense[sentence.tags[rootIndex]];
		const auxes:{base:string;tense:string}[] = [];
		for (var index = 0; index < sentence.deps.length; index++) {
			var node = sentence.deps[index];
			if(node.parent !== rootIndex) continue;
			if(node.label.startsWith("AUX")) {
				auxes.push({
					base:new Inflectors(sentence.tokens[index]).toPresent(),
					tense:tagTense[sentence.tags[index]],
				});
			}
		}
		const applicableRule = rules.find((rule)=>
			rule.auxNo === auxes.length &&
			rule.rootTense === rootTense &&
			rule.auxBases.join("") === auxes.map(x=>x.base).join("") &&
			rule.auxTenses.join("") === auxes.map(x=>x.tense).join("")
		);
		if(applicableRule) tenses.push(applicableRule.tense);
	});
	return tenses;
};