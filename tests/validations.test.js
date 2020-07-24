const validate = require('../lib/validations/validations')

describe('Validating card response', () => {
 test('can not be empty string', () => {
    expect(validate.cardResponse("")).toBeFalsy();
  });
 test('if user chose ok', () => {
    expect(validate.cardResponse("ok")).toBeTruthy();
  });

})
 