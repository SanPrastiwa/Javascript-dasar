let jawabanBenar = "ImpactByte";

while (true) {
  let jawabanKamu = prompt("Sebutkan kepanjangandari nama IB (Impact Byte)");

  if (jawabanKamu == jawabanBenar) {
    alert("selamat jawaban kamu benar!");
    break;
  } else {
    alert("Maaf, jawaban kamu salah. Silahkan coba lagi.");
  }
}

console.log(jawabanKamu);
