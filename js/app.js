const form = document.querySelector("form");
const spyyyy = document.getElementById("yyyy");
const spdd = document.getElementById("dd");
const spmm = document.getElementById("mm");
const liLabel = document.querySelector("sp");
const daysEl = document.getElementById("day");
const iXato1 = document.getElementById("i_xato1");
const mon = document.getElementById("month");
const iXato2 = document.getElementById("i_xato2");
const years = document.getElementById("years");
const iXato3 = document.getElementById("i_xato3");

const vaqt = new Date();
const year = vaqt.getFullYear();
const day = vaqt.getDate();
const oylar = vaqt.getMonth() + 1;
const oykun = new Date(year, oylar, 0).getDate();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(spyyyy);
  let y = 0;
  let m = 0;
  let d = 0;

  if (spyyyy.value < year && spyyyy.value > 0) {
    console.log("Year correct");
    y = year - spyyyy.value;
    iXato3.classList.add("hid");
  } else {
    iXato3.classList.remove("hid");
  }

  console.log(spmm.value);
  console.log(oylar);
  
  if (spmm.value < oylar && spmm.value > 0 && spmm.value < 13) {
    console.log("oy correct");
    m = oylar - spmm.value;
    iXato2.classList.add("hid");
  }else if(spmm.value > oylar && spmm.value > 0 && spmm.value < 13){
    y--;
    m = 12 - Math.abs(oylar - spmm.value);
  } else {
    iXato2.classList.remove("hid");
  }

  if (spdd.value <= day && spdd.value > 0) {
    console.log("day correct");
    d = day - spdd.value;
    iXato1.classList.add("hid");
  } else if (spdd.value > day) {
    console.log(m);

    if (
      (spmm.value == 1 ||
        spmm.value == 3 ||
        spmm.value == 5 ||
        spmm.value == 7 ||
        spmm.value == 8 ||
        spmm.value == 10 ||
        spmm.value == 12) &&
      spdd.value < 32
    ) {
      d = 31 - Math.abs(day - spdd.value);
      m--;
      iXato1.classList.add("hid");
      console.log(d);
      console.log(m);
      console.log(y);
    } else if (
      (spmm.value == 2 ||
        spmm.value == 4 ||
        spmm.value == 6 ||
        spmm.value == 9 ||
        spmm.value == 11) &&
      spdd.value < 30
    ) {
      d = 30 - Math.abs(day - spdd.value);
      m--;
      iXato1.classList.add("hid");
      console.log(d);
      console.log(m);
      console.log(y);
    }
  } else {
    iXato1.classList.remove("hid");
  }
  if (
    iXato1.classList.contains("hid") &&
    iXato2.classList.contains("hid") &&
    iXato3.classList.contains("hid")
  ) {
    document.getElementById("spdd").innerHTML = d;
    document.getElementById("spmm").innerHTML = m;
    document.getElementById("spyyyy").innerHTML = y;
  } else {
    document.getElementById("spdd").innerHTML = "- -";
    document.getElementById("spmm").innerHTML = "- -";
    document.getElementById("spyyyy").innerHTML = "- -";
  }
});

function message(key) {
  console.log(key);
}
