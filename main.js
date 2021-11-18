
    // membuat fungsi addEventListener untuk menyimpan data dari inputan user
    let button = document.querySelector("#button1");

    button.addEventListener("click", () => {
        // membuat variabel untuk menampung data fari id yang ada pada form & output
            let data = document.querySelector("#input1").value;
            let huruf1 = document.getElementById("huruf1");
            let kata1 = document.getElementById("kata1");
            let hurufvokal1 = document.getElementById("hurufvokal1");
            let angka1 = document.getElementById("angka1");
            let fibonacci1 = document.getElementById("fibonacci1");
            let bintang1 = document.getElementById("bintang1");
                     
            // mengolah data untuk menghitung jumlah huruf yang ada 
            // menggunakan fungsi s.split(" ") dan s.join("")
            let hitungHuruf = data.split(" ").join("").length;
            huruf1.innerHTML = hitungHuruf;
            
            // mengolah data untuk menghitung jumlah kata yang ada 
            // menggunakan fungsi s.split(" ")
            let kata = [];
            kata = data.split(" ").length;
            kata1.innerHTML = kata;
    
            // mengolah data untuk menghitung jumlah huruf vokal yang terdapat 
            // pada kalimat yang dimasukkan menggunakan pengulangan for & if 
            // dengan mengolah s.includes(input[i])
            let vokal = 'aiueo';
            let totalVokal = 0;
            for (let i = 0; i < data.length; i++) {
                if (vokal.includes(data[i])) {
                    totalVokal++;
                }
            }
            hurufvokal1.innerHTML = totalVokal;


            // mengolah data untuk mengubah huruf vokal menjadi angka berurutan
            let vokal2 = 'aiueo';
            let vokal1 = data.split("");
            let angka2 = 0;

            for (let i = 0; i < vokal1.length; i++) {
                if (vokal2.includes(vokal1[i])) {
                    angka2++;
                    vokal1[i] = angka2;
                }
            }
            angka1.innerHTML = vokal1.join("");

            // mengolah data untuk mengubah huruf vokal menjadi angka fibonacci
            let fibo2 = "aiueo";
            let fibo1 = data.split("");
            let num = [0];
            let n1 = 0;
            let n2 = 1;
            let angka3 = 0;
            let angka4 = 0;

            for (let i = 0; i < fibo1.length; i++) {
                angka3 = n2 + n1;
                n2 = n1;
                n1 = angka3;
                num.push(angka3);

                if (fibo2.includes(fibo1[i])) {
                    fibo1[i] = num[angka4];
                    angka4 = angka4 + 1;
                }
            }
            fibonacci1.innerHTML = fibo1.join("");

            // mengolah data untuk mengubah huruf tengah menjadi tanda *
            let bintang2 = data.split(" ");
            let kataTengah = [];
            let hasil = [];

            for (let i = 0; i < bintang2.length; i++) { 
                kataTengah = bintang2[i].slice(1, bintang2[i].length - 1).split("");

                for (let j = 0; j < kataTengah.length; j++) {
                    kataTengah[j] = "*";
                }

                hasil.push(
                    bintang2[i].slice(0, 1) + kataTengah.join("") + bintang2[i].slice(bintang2[i].length - 1)
                );
            }
            bintang1.innerHTML = hasil.join(" ");

    });
