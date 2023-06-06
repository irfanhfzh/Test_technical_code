function inputValue(val) {
  const input = document.getElementById("input");
  input.addEventListener("keydown", (e) => {
    if (!e.key.match("/^[0-9]$/")) {
      e.preventDefault();
    }
  });

  return val;
}

function generateSegitiga(val) {
  let result = "";
  for (let i = 1; i <= val; i++) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "<br>";
  }
  return (document.getElementById("result").innerHTML = result);
}

function generateBilanganGanjil(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    if (i % 2 !== 0) {
      result = [...result, i];
    }
  }
  return (document.getElementById("result").innerHTML = result);
}

function generateBilanganPrima(num) {
  let result = [];
  if (num <= 1) return false;
  for (let i = 1; i <= num; i++) {
    let bilangan = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) bilangan += 1;
    }
    if (bilangan === 2) result = [...result, i];
  }
  return (document.getElementById("result").innerHTML = result);
}
