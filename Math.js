// let konfirmasi = confirm("Apakah anada ingin melanjutkan?")

// let login;

// if(konfirmasi == true){
//     login = [
//         id = prompt("Username :"),
//         pw = prompt("Password :"),
//         password = "qwerty123"
//     ]

//     if(id == "Zidan" && pw == password){
//         alert("Anda berhasil masuk");
//     }else if(id == "Zidan" && pw != password){
//         alert("Anda salah pasword");
//     }else if(id != "Zidan" && pw == password){
//         alert("Username anda salah")
//     }else{
//         alert("Username dan pasword salah");
//     }
// }else{
//     alert(null)
// }





// let space;
// let k;
// let rows = prompt("Enter number of rows:");

// for(let i = 1; k = 0; i <= rows, i++, k = 0){
//     for(space = 1; space <= rows-i; space++){
//         document.writeln("");
//     }

//     while(k != 2*i-1){
//         document.writeln("*");
//         k++;
//     }
// }
// alert(rows);






// alert('Start');
// for(var  i = 0; i < 10; i++){
//     alert('Lia cantik banget');
// }
// alert('Finish')







// // While

// noAngka = 1;
// while(noAngka <= 20){
//     document.writeln('Angkanya adalah \n' + noAngka)
//     noAngka++;
// }








// // Lia cantik

// let liaCantikBanget = confirm("Apakah lia cantik?")

// let liaCantik;

// if(liaCantikBanget == true){
//     for(let i = 0; i < 9999999999999999999999999999; i++){
//         document.writeln("♡♡Lia♡♡ emang cantik!!♡♡\n");
//     }
// }else if(konfirmasi == false){
//     alert("LIA ITU CANTIK!, PENCET 'OK' DONG");
// }


// while(true){console.log("AKU SAYANG LIA!!")}



// looping

// menghentikan looping dengan user

// let ulang = true;
// while(ulang){
//     console.log("Lia kok gitu");
//     ulang = confirm("Lagi?");
// }





// menghentikan looping dengan program

// let konfirmasi = confirm("Lanjut?");
// if(konfirmasi == true){
//     let num = 1;
//     while(num <= 10){
//         console.log("Angkot no. " + num + " beroperasi dengan baik.");
//         num++;
//     }
// }

// let i = 0;

// while(i < 7){
//     console.log("Angkot no. " + i + " beroperasi dengan baik");
//     i++;
// }

// for(i = 7; i <= 10; i++){
//     console.log("Angkot no. " + i + " sedang tidak beroperasi");
//     // i++;
// }




// if / else untuk bilangan ganjil/genap

// let angka = prompt("Masukkan angka genap/ ganjil:");

// if(angka % 2 == 0){
//     alert("Anda memasukkan angka genap!")
// }else if(angka % 2 == 1){
//     alert("Anda memasukkan angka ganjil")
// }else if(isNaN){
//     alert("Anda memasukkan huruf")
// }

// var angkot = 1;
// var totalAngkot= 10;
// var angkotAktif= 6;

// for (angkot = 1; angkot <= totalAngkot; angkot++){
//     if ( angkot <= angkotAktif ){
//         console.log("Angkot Nomer " + angkot + " Sedang Beroprasi");
//     } else if ( angkot === 8){
//         console.log("Angkot Nomer " + angkot + " Sedang Lembur");
//     } 
//     else {
//         console.log("Angkot Nomer " + angkot + " Sedang Tidak Beroprasi");
//     } 
// }

// function generatePyramid() {
//     var totalNumberofRows = 5;
//     var arr = new Array();
//     for (var i = 1; i <= totalNumberofRows; i++) {
//       for (var j = 1; j <= i; j++) {
//         arr.push(j);
//         console.log(j);
//       }
//       console.log("\n");
//     }
//   }

// function createPyramid(rows) {
//     for (let i = 1; i <= rows; i++) {
//       let pattern = ' '.repeat(rows - i);
//       pattern += '*'.repeat(2 * i - 1);
//       console.log(pattern);
//     }
//   }
  
//   createPyramid(5); // You can change the argument to specify the number of rows in the pyramid.

// let s = '';
// for(let i = 10; i > 0; i--){
//     for(let j = 0; j <= i; j++){
//         s += '*';
//     }
//     s += '\n'
// }

// console.log(s)

let ulang = true;
while (ulang) {
  let chance = 3;
  let c = Math.floor(Math.random() * 10) + 1;
  let hasil = '';

  while (chance >= 1) {
    alert("Memulai permainan dengan " + chance + " kesempatan");
    let p = parseInt(prompt("Tebak angka 1-10"));
    if (p === c) {
      hasil = 'BENAR';
      alert('Anda ' + hasil + ' angka yang anda tebak adalah ' + c);
      break;
    } else if (p < c) {
      hasil = 'RENDAH';
      chance -= 1;
      alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + p + '\ntersisa ' + chance + ' kesempatan lagi.');
    } else if (p > c) {
      hasil = 'TINGGI';
      chance -= 1;
      alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + p + '\ntersisa ' + chance + ' kesempatan lagi.');
    }

    if (chance === 0) {
      alert('Lia gagal HAHAHHAHAHAHA');
    }
  }
  ulang = confirm('Mau ulang ga cantik?');
}
alert("Terima kasih");
