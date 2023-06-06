const btnGenerateSegitiga = document.getElementById("btn-generateSegitiga");
const btnGenerateBilanganGanjil = document.getElementById(
  "btn-generateBilanganGanjil"
);
const btnGenerateBilanganPrima = document.getElementById(
  "btn-generateBilanganPrima"
);

btnGenerateSegitiga.addEventListener("click", () => {
  let value = document.getElementById("input").value;
  if (value.match(/^[0-9]+$/)) {
    let result = "";
    for (let i = 0; i < value.length; i++) {
      result += value[i];
      for (let j = 0; j < i + 1; j++) {
        result += "0";
      }
      result += "<br>";
    }
    return (document.getElementById("result").innerHTML = result);
  } else {
    alert("Format input harus berupa angka");
  }
});

btnGenerateBilanganGanjil.addEventListener("click", () => {
  let value = document.getElementById("input").value;
  if (value.match(/^[0-9]+$/)) {
    let result = [];
    for (let i = 0; i < value; i++) {
      if (i % 2 !== 0) {
        result = [...result, i];
      }
    }
    return (document.getElementById("result").innerHTML = result);
  } else {
    alert("Format input harus berupa angka");
  }
});

btnGenerateBilanganPrima.addEventListener("click", () => {
  let value = document.getElementById("input").value;
  if (value.match(/^[0-9]+$/)) {
    let result = [];
    if (value <= 1) return false;
    for (let i = 1; i <= value; i++) {
      let bilangan = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) bilangan += 1;
      }
      if (bilangan === 2) result = [...result, i];
    }
    return (document.getElementById("result").innerHTML = result);
  } else {
    alert("Format input harus berupa angka");
  }
});
