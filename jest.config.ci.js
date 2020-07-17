const base = require('./jest.config')
module.exports = Object.assign({}, base, {
  collectCoverage: true, // 是否收集测试覆盖率
  reporters: ["jest-junit"], // jest-junit测试报表
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],// 测试哪些代码
  coverageDirectory: 'coverage', // 生成的报告放在哪个目录里
  coverageReporters: ['text', 'lcov'], // 要生成哪些报告
})