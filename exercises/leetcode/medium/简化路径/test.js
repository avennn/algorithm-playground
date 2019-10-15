const expect = require('expect.js');
const simplifyPath = require('./index');

describe('简化路径', () => {
  it('输入"/home/"输出"/home"', () => {
    const result = simplifyPath('/home/');
    expect(result).to.be('/home');
  });
  it('输入"/../"输出"/"', () => {
    const result = simplifyPath('/../');
    expect(result).to.be('/');
  });
  it('输入"/home//foo/"输出"/home/foo"', () => {
    const result = simplifyPath('/home//foo/');
    expect(result).to.be('/home/foo');
  });
  it('输入"/a/./b/../../c/"输出"/c"', () => {
    const result = simplifyPath('/a/./b/../../c/');
    expect(result).to.be('/c');
  });
  it('输入"/a/../../b/../c//.//"输出"/c"', () => {
    const result = simplifyPath('/a/../../b/../c//.//');
    expect(result).to.be('/c');
  });
  it('输入"/a//b////c/d//././/.."输出"/a/b/c"', () => {
    const result = simplifyPath('/a//b////c/d//././/..');
    expect(result).to.be('/a/b/c');
  });
});
