# One
Function `sleep` for JavaScript.
>one(seconds) -> Promise
## Installation

    npm i one-two-three-four

## Usage

```js
const one = require('one-two-three-four');
const test = async () => {
	console.log('text1');
	await one(2); //sleep for 2 seconds
	console.log('text2');
};
test();
```