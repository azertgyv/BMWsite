let pasword = 1234;
let balans = 500;
let max_yanlis_parol = 3;
let yanlis_parol_sayisi = 0;

while (true) {
  let girilen_parol = parseInt(prompt("zehmet olmasa 4 reqemli sifreni daxil edin: "));
  if (girilen_parol === pasword) {
    let mebleg = parseInt(prompt("zehmet olmasa cixaris meblegini qeyd edin: "));
    if (mebleg <= balans) {
      balans -= mebleg;
      alert(balans);
      break;
    } else {
      alert("balansinizda kifayet qeder mebleg yoxdur!");
      break;
    }
  } else {
    yanlis_parol_sayisi += 1;
    if (yanlis_parol_sayisi === max_yanlis_parol) {
      alert("Kart Bloklandi!");
      break;
    } else {
      alert("Sifre Yanlisdir");
    }
  }
}
