import {expect} from 'chai';
import sum from '../src/sum.js';

describe('src/sum.js', _ => {
    it('should add 1 + 1 to make two', () => {
        let result = sum(1,1);

        expect(result).to.equal(2);
    })

    it('should add 1, 2 and 3 to make six', () => {
        let result = sum(1,2,3);

        expect(result).to.equal(6);
    })
})