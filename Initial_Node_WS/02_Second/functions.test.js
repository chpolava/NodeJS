const functions = require('./functions');

test('Add function', ()=> {
    const val = functions.add(2,2);
    expect(val).toBe(4);
    //jest.setTimeout(50000);
});