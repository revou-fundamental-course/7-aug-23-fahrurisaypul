//luas segitiga
document.getElementById('submit_luas').addEventListener('click', function(){
    let tinggi = parseInt(document.getElementById('tinggiSegitiga').value);
    let alas = parseInt(document.getElementById('alasSegitiga').value);
    document.getElementById('luas').value = 0.5*alas*tinggi;
})

//keliling segitiga
document.getElementById('submit_keliling').addEventListener('click', function(){
    let a = parseInt(document.getElementById('sisi_a').value);
    let b = parseInt(document.getElementById('sisi_b').value);
    let c = parseInt(document.getElementById('sisi_c').value);
    document.getElementById('keliling').value = a+b+c;
})

//tombol pilihan
document.getElementById('btn_choice').addEventListener('click', function(){
    const sectionLuas = document.getElementById('luasSegitiga');
    const sectionKeliling = document.getElementById('kelilingSegitiga');
    const button    = document.getElementById('btn_choice');

    if (sectionLuas.style.display === "none"){
        sectionLuas.style.display = "block";
        sectionKeliling.style.display = 'none'
       button.innerText = 'Luas';
        
    } else{
        sectionKeliling.style.display = "block";
        sectionLuas.style.display = 'none';
        button.innerText = 'Keliling';
    }
})

//tombol reset
document.getElementById('reset').addEventListener('click', function(){
    var form = document.querySelector('form');
    form.reset();
  })




    