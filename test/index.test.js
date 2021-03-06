import chai, {expect} from 'chai';
import {spy, stub} from 'sinon';
import sinonChai from 'sinon-chai';

import {Graph} from '../src/';
import Calculator from '../src/';

chai.use(sinonChai);

describe('Graph', () => {
    let sut;

    beforeEach(() => {
        sut = Graph;
    });

    it('should sum node childs', () => {
        const node = {
            value: '+',
            left: {
                value: '3',
                left: null,
                right: null
            },
            right: {
                value: '5',
                left: null,
                right: null
            }
        };
        const expected = 8;
        const actual = sut.calcChilds(node);
        expect(expected).to.equal(actual);
    })

    it('should substruct node childs', () => {
        const node = {
            value: '-',
            left: {
                value: '2',
                left: null,
                right: null
            },
            right: {
                value: '1',
                left: null,
                right: null
            }
        };
        const expected = 1;
        const actual = sut.calcChilds(node);
        expect(expected).to.equal(actual);
    })

    it('should multiply node childs', () => {
        const node = {
            value: '*',
            left: {
                value: '3',
                left: null,
                right: null
            },
            right: {
                value: '5',
                left: null,
                right: null
            }
        };
        const expected = 15;
        const actual = sut.calcChilds(node);
        expect(expected).to.equal(actual);
    })

    it('should divide node childs', () => {
        const node = {
            value: '/',
            left: {
                value: '10',
                left: null,
                right: null
            },
            right: {
                value: '-2',
                left: null,
                right: null
            }
        };
        const expected = -5;
        const actual = sut.calcChilds(node);
        expect(expected).to.equal(actual);
    })

    it('should throw Unknown operation Error', () => {
        const node = {
            value: '&',
            left: {
                value: '10',
                left: null,
                right: null
            },
            right: {
                value: '-2',
                left: null,
                right: null
            }
        };
        const actual = sut.calcChilds.bind(null, node);
        expect(actual).to.throw();
    })

    it('should calculate expression', () => {
        const expression = '1+2*2-3/3';
        const node = sut.buildGraph(expression);
        const expected = 4;
        const actual = sut.resolveGraph(node);
        expect(expected).to.equal(actual);
    })

    it('should throw error', () => {
        const expression = '1+2*2-3/1&2';
        const node = sut.buildGraph(expression);
        const actual = sut.resolveGraph.bind(null, node);
        expect(actual).to.throw();
    })
});

describe('Calculator', () => {
    let sut;

    beforeEach(() => {
        sut = Calculator;
    });

    it('should calculate expression', () => {
        const expression = '1+2/2+1*5';
        const expected = 7;
        const actual = sut.calculate(expression);
        expect(expected).to.equal(actual);
    })

    it('should throw error', () => {
        const expression = '1+2&2+1';
        const actual = sut.calculate.bind(null, expression);
        expect(actual).to.throw();
    })
})

// describe('Graph', () => {
//     let sut;
//
//     beforeEach(() => {
//         sut = new Graph();
//     });
//
//     it('should calcChilds numbers', () => {
//         const expected = 10;
//         const actual = sut.calcChilds(1,2,3,4);
//         expect(expected).to.equal(actual);
//     })
//
//     it('should substract numbers', () => {
//         const expected = 1;
//         const actual = sut.substract(1, 2);
//         expect(expected).to.equal(actual);
//     })
//
//     it('should substract numbers', () => {
//         const expected = 0;
//         const actual = sut.substract(1, 2, 3);
//         expect(expected).to.equal(actual);
//     })
//
//     it('should divide two numbers', ()=>{
//         const expected = -10;
//         const actual = sut.divide(-100,10)
//         expect(expected).to.equal(actual)
//     })
//
//     it('should throw error if second number is equal 0', ()=>{
//         const actual = sut.divide.bind(null,-100,0)
//         expect(actual).to.throw()
//     })
//
//     it('should calc pssed string', ()=>{
//         const actual = sut.calc('1+2+3+4');
//         const expected = 10;
//         expect(expected).to.equal(actual);
//     })
//
//     //it('should calc pssed string', ()=>{
//     //    const actual = sut.calc('1+2+3+4-10');
//     //    const expected = 0;
//     //    expect(expected).to.equal(actual);
//     //})
//
//     it('should calc pssed string', ()=>{
//
//         spy(sut, 'parse')/*.returns([10, 2])*/;
//
//         const actual = sut.calc('10+2');
//         const expected = 12;
//         expect(expected).to.equal(actual);
//     })
//
// });


// describe('Parse', () => {
//     let sut;
//     beforeEach(() => {
//         sut = parse;
//     })
//
//     it('Should parse str and array', () => {
//
//         const actual = sut('10+2');
//         const expected = ([10, 2]);
//
//         expect(expected).to.have.all.members(actual);
//     })
// })