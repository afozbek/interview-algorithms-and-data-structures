const solution = require("./index");

describe("Checking RunTime", () => {
  it("1-runs correctly", () => {
    let U = 3,
      L = 9,
      C = [1, 2, 0, 1, 1]

    expect(solution(U, L, C)).toBe("IMPOSSIBLE")
  })

  it("2-runs correctly", () => {
    let U = 2,
      L = 1,
      C = [1, 1, 0, 1,]

    expect(solution(U, L, C)).toBe("1100,0001")
  })

  it("3-runs correctly", () => {
    let U = 5,
      L = 3,
      C = [2, 1, 0, 1, 0, 0, 2]

    expect(solution(U, L, C)).toBe("IMPOSSIBLE")
  })

  it("4-runs correctly", () => {
    let U = 3,
      L = 2,
      C = [2, 1, 1, 0, 1]

    expect(solution(U, L, C)).toBe("11100,10001")
  })

  it("5-runs correctly", () => {
    let U = 2,
      L = 3,
      C = [0, 0, 1, 1, 2]

    expect(solution(U, L, C)).toBe("IMPOSSIBLE")
  })

  it("6-runs correctly", () => {
    let U = 2,
      L = 2,
      C = [2, 0, 2, 0]

    expect(solution(U, L, C)).toBe("1010,1010")
  })

  it("7-runs correctly", () => {
    let U = 4,
      L = 2,
      C = [2, 0, 2, 1, 0, 0, 0, 1]

    expect(solution(U, L, C)).toBe("10110001,10100000")
  })
});