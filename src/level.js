const ProgressBar = require('./progressBar');

class LevelingSystem {
	getLevelExp(level) {
		return 5 * Math.pow(level, 2) + 50 * level + 100;
	}

    // For generating random exp.
	static randomInt(low = 15, high = 25) {
		return Math.floor(Math.random() * (high - low + 1) + low);
	}

	getLevel(exp) {
		const Exp = exp;
		let level = 0;

		while (exp >= this.getLevelExp(level)) {
			exp -= this.getLevelExp(level);
			level++;
		}

		const levelExp =  this.getLevelExp(level);
		const currentLevelExp = this.getLevelProgress(Exp);
		
		const bar = new ProgressBar(currentLevelExp, levelExp, 15)

		return { 
            level,
            maxLevelExp: levelExp,
            currentLevelExp,
            ...bar.createBar()
        };
	}

	getLevelProgress(exp) {
		let level = 0;

		while (exp >= this.getLevelExp(level)) {
			exp -= this.getLevelExp(level);
			level++;
		}

		return exp;
    }
}

module.exports = LevelingSystem;
