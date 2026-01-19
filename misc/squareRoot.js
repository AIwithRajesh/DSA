// HOW MATH.SQRT WORKS

// Isaac Newton = Gravity + Calculus + Square Roots

// Sir Isaac Newton (1643–1727):

// Discovered Law of Gravitation

// Co-invented Calculus

// Created Newton–Raphson method

// Laid foundation of modern physics + numerical computing

// The same Newton who explained gravity
// also invented the method your Math.sqrt() logic is based on

// That’s insane impact

class SquareRoot {
  // Method to calculate the square root of a number
  static customSqrt(number = 12) {
    let r = number;
    for (let i = 0; i < 18; i++) {
      r = (r + number / r) / 2;
    }
    // Famous JS Problem
    console.log(0.1 + 0.2); // 0.1 AND 0.2 CANNOT BE REPRESENTED EXACTLY IN BINARY. This is precision limitation.
    console.log(r);
    console.log(Number.MAX_SAFE_INTEGER);
  }
}

SquareRoot.customSqrt();
