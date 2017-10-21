// const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
// // const app = require('../app');

// describe('App', ()=>{
// 	it('sayHello should return hello', ()=>{
// 		let result = sayHello()
// 		assert.equal(result, 'hello');
// 	});

// 	it('sayHello should return type string', ()=>{
// 		let result = sayHello();
// 		assert.typeOf(result, 'string')
// 	});

// 	it('addNumbers should be above 5', ()=>{
// 		let result = addNumbers(5,5);
// 		assert.isAbove(result, 5)
// 	});

// 	it('addNumbers should return type number', ()=>{
// 		let result = addNumbers(1,1);
// 		assert.typeOf(result, 'number')
// 	})
// })

const assert = require('chai').assert;
const expect = require('chai').expect;
const combat = require('../app').combat;
const basic = require('../app').basic;
const guitars = require('../app').guitars;
foo = 'bar'
const foobar = require('../app').foobar;

describe("the basic() function", ()=>{
	it("should add all three numbers together", ()=>{
		assert.equal(basic(2,3,4), 9);
		assert.equal(basic(1,1,1),3);
	})

	x=3
	it("should have a length of "+x, ()=>{
		assert.lengthOf(basic, x )
	})
})

describe("the guitars() function", ()=>{
	it("should have a length of 2", ()=>{
		assert.lengthOf(guitars(),2)
	})
})

// assert.lengthOf(basic, 3, 'basic has a length of 3')

describe("The combat() function", function () {
  it("should work for some example tests", function () {
    assert.equal(combat(100, 5), 95);
    assert.equal(combat(92, 8), 84);
    assert.equal(combat(20, 10), 10);
    assert.equal(combat(20, 30), 0, "Health cannot go below 0");
  });

  it("should be a number", ()=>{
  	let result = combat(100,5)
  	assert.typeOf(result, 'number')
  });
});

describe("the foobar() function", ()=>{
	it("should be a string", ()=>{
		expect(foobar()).to.be.a('string')
	})
	
	it("should have a length of 3",()=>{
		expect(foobar()).to.have.lengthOf(3);
	})

	it("should start with b",()=>{
		expect(foobar()[0]).to.equal('b');
	})
})