import chai, {expect} from 'chai';
import {spy, stub} from 'sinon';
import sinonChai from 'sinon-chai';

import Calculator from '../src/';
import {parse} from '../src/'

chai.use(sinonChai);

describe('Calculator', function () {
    let sut;

    beforeEach(() => {
        sut = new Calculator();
    });

    // it('should sum two numbers passed ', () => {
    //     const expected = 5;
    //     const actual = sut.sum(2, 3);
    //     expect(expected).to.equal(actual);
    // });

    it('should sum all numbers passed ', () => {
        const expected = 10;
        const actual = sut.sum(1, 2, 3, 4);
        expect(expected).to.equal(actual);
    });


    // it('should substract numbers', () => {
    //     const expected = 1;
    //     const actual = sut.substract(2, 1);
    //     expect(expected).to.equal(actual)
    // })

    it('should substract numbers', () => {
        const expected = 0;
        const actual = sut.substract(1,2,3);
        expect(expected).to.equal(actual)
    });

    it('should divide numbers', () => {
        const expected = 10;
        const actual = sut.divide(100, 10);
        expect(expected).to.equal(actual);
    });

    it('should throw error when divide numbers', () => {
        expect(sut.divide.bind(null, 1, 0)).to.throw();
    });

    // it('should calculate passed string', () => {
    //     const expected = 10;
    //     const actual = sut.calculate('1+2+3+4');
    //     expect(expected).to.equal(actual);
    // })
    //
    // it('should calculate passed string', () => {
    //     const expected = 5;
    //     const actual = sut.calculate('1+2+3+4-5');
    //     expect(expected).to.equal(actual);
    // })


});

describe('Parse', () => {
    let sut;

    beforeEach( () => {
        sut = parse;
    });

    it('should parse str and array', () => {
        const actual = sut('10+2');
        const expected = [10, 2];
        expect(expected).to.have.all.members(actual);
    });
});