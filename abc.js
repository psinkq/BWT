function checkInequalities() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const result = document.getElementById("result");
  
    if (a < b && b < c) {
      result.textContent = `The inequality A < B < C is satisfied`;
    } else if (a < b && b > c) {
      result.textContent = `The inequality A < B > C is satisfied`;
    } else {
      result.textContent = `Inequalities are not met`;
    }
  }