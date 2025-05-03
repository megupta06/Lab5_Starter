// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


// isPhoneNumber tests
test('isPhoneNumber - valid #1', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber - valid #2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber - invalid #1', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber - invalid #2', () => {
  expect(isPhoneNumber('12-3456-789')).toBe(false);
});

// isEmail tests
test('isEmail - valid #1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail - valid #2', () => {
  expect(isEmail('user_123@domain.org')).toBe(true);
});

test('isEmail - invalid #1', () => {
  expect(isEmail('test.example.com')).toBe(false);
});

test('isEmail - invalid #2', () => {
  expect(isEmail('user@domain')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword - valid #1', () => {
  expect(isStrongPassword('abc_123')).toBe(true);
});

test('isStrongPassword - valid #2', () => {
  expect(isStrongPassword('Pass_1234')).toBe(true);
});

test('isStrongPassword - invalid #1', () => {
  expect(isStrongPassword('123pass')).toBe(false); 
});

test('isStrongPassword - invalid #2', () => {
  expect(isStrongPassword('a!')).toBe(false); 
});

// isDate tests
test('isDate - valid #1', () => {
  expect(isDate('1/1/2024')).toBe(true);
});

test('isDate - valid #2', () => {
  expect(isDate('12/31/2025')).toBe(true);
});

test('isDate - invalid #1', () => {
  expect(isDate('2024-01-01')).toBe(false);
});

test('isDate - invalid #2', () => {
  expect(isDate('13-10-2020')).toBe(false); 
});

// isHexColor tests
test('isHexColor - valid #1', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor - valid #2', () => {
  expect(isHexColor('abcdef')).toBe(true);
});

test('isHexColor - invalid #1', () => {
  expect(isHexColor('xyz')).toBe(false);
});

test('isHexColor - invalid #2', () => {
  expect(isHexColor('#12345')).toBe(false);
});
