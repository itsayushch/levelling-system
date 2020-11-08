# Levelling System for multiple usage.

## Demo 
```js
const Level = require('./src/level');
const level = new Level().getLevel(800); // Here 800 is the total exp.

console.log(level);
```

## Response 

```js
	{
		level: 4,
		maxLevelExp: 380,
		currentLevelExp: 30,
		progressBar: '🔵౦౦౦౦౦౦౦౦౦౦౦౦౦౦',
		percentage: '8%'
	}
```