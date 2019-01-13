const concat = require('./concat');
test('should give two concatenated strings', function(){
    expect(concat('ab', 'cd')).toEqual('abcd');
  });
test('should give two concatenated strings', function(){
    expect(concat('ab', 23)).toEqual('ab23');
  });
test('should give two concatenated strings', function(){
    expect(concat('ab', ' 23')).toEqual('ab 23');
  });
