import { splitNumber } from '../../../src/commonsFunc/Utilities';

test('take the number then divide it by three digits (return string)', () => {
	expect(splitNumber(1000000).match('1 000 000'))
});
