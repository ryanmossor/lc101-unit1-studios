const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){
    it("should return 'Launch!' when passed a number that is ONLY divisible by 2", function(){
        assert.strictEqual(launchOutput(2), 'Launch!');
    });

    it("should return 'Code!' when passed a number that is ONLY divisible by 3", function(){
        assert.strictEqual(launchOutput(3), 'Code!');
    });

    it("should return 'Rocks!' when passed a number that is ONLY divisible by 5", function(){
        assert.strictEqual(launchOutput(5), 'Rocks!');
    });

    it("should return 'LaunchCode!' when passed a number that is divisible by 2 AND 3", function(){
        assert.strictEqual(launchOutput(6), 'LaunchCode!');
    });

    it("should return 'Code Rocks!' when passed a number that is divisible by 3 AND 5", function(){
        assert.strictEqual(launchOutput(15), 'Code Rocks!');
    });

    it("should return 'Launch Rocks!' when passed a number that is divisible by 2 AND 5", function(){
        assert.strictEqual(launchOutput(10), 'Launch Rocks!');
    });

    it("should return 'LaunchCode Rocks!' when passed a number that is divisible by 2, 3, AND 5", function(){
        assert.strictEqual(launchOutput(30), 'LaunchCode Rocks!');
    });

    it("should return 'Rutabagas! That doesn't work.' when passed a number that is NOT divisible by 2, 3, or 5", function(){
        assert.strictEqual(launchOutput(1), `Rutabagas! That doesn't work.`);
    });
});