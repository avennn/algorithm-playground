const expect = require('expect.js');
const restoreIpAddresses = require('./index');

describe('复制IP地址', () => {
  it('输入25525511135输出["255.255.11.135", "255.255.111.35"]', () => {
    const result = restoreIpAddresses('25525511135');
    expect(result).to.have.length(2);
  });
});
