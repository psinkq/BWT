function checkInequalities() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const result = document.getElementById("result");
  
    if (a < b && b < c) {
      result.textContent = `Выполняется неравенство A < B < C`;
    } else if (a < b && b > c) {
      result.textContent = `Выполняется неравенство A < B > C`;
    } else {
      result.textContent = `Неравенства не выполняются`;
    }
  }