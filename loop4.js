let i = 0;

while (true) {
  let confirmation = confirm("Apakah anda mau mengulang?");
  if (confirmation) {
    i++;
    continue;
  } else {
    alert("Perulangan sudah dilakukan sebanyak " + i + " kali");
    break;
  }
}
console.log(confirmation);
