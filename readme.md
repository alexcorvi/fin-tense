# Fin-tense

Detect sentences tenses.

## Installation

```
npm i --save fin-tense
```


## Usage

```typescript
import * as Fin from "finnlp";
import "fin-tense";

const sentence = "He was demonstrably wrong."
const instance = new Fin.Run(sentence);
const result = instance.tense();
console.log(result);

```

The above example would give:

```javascript
[
    ["past","simple"]
]
```

## Supported Tenses Types:

- `["present","simple"]` Examples:
    - I work in a bank
    - I don't work in a bank
- `["present","progressive"]` Examples:
    - She's cooking
    - She's not cooking
    - Is she working
- `["past","simple"]` Examples:
    - I cooked
    - I didn't cook
    - What did you cook?
- `["past","progressive"]` Examples:
    - She was working
    - Wasn't she working
    - What was she working on?
- `["present","perfect","simple"]` Examples:
    - I have finished it
    - Haven't I finished it
    - When have she finished working?
- `["present","perfect","progressive"]` Examples:
    - I have been learning english for a long time
    - They haven't been playing tennis for a long time
    - How ling have they been learning english
- `["past","perfect","simple"]`
    - They had already met sarah before
    - They hadn't met sarah
    - Had they met sarah yet?
- `["past","perfect","progressive"]` Examples:
    - I had been living in germany for years
    - How long had you been living here?
- `["future","simple","(going)"]` Examples:
    - They are going to see me
    - Are they going to see me
    - When are they going to see me
- `["future","simple"]` Examples:
    - They will see me
    - Will they see me
    - When will they see me
    - They won't see me
- `["future","progressive"]` Examples:
    - I will be having fun
    - Will I be having fun
    - How will I be having fun?
- `["future","perfect","simple"]`
    - They will have met me by then.
    - They won't have met me by then
- `["future","perfect","progressive"]`
    - They will have been working with John next week
    - How long will they have been working with John next week?

## How to interpret the tenses?

Please review [this article](https://www.myenglishteacher.eu/blog/12-all-english-tenses-with-examples/)