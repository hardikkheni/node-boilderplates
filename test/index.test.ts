import { sum } from '../src/app';

describe('App test', () => {
	it('object should have function called listen.', () => {
		expect(sum(1, 1)).toBe(2);
	});
});
