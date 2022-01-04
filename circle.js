// let r=process.argv.slice(2);
// let rnum=r*1;

function circleCircumference(r){
    let alan=3.14*(r*r);
    let cevre=2*3.14*r;
    cevre= cevre.toFixed(2);
    console.log(`Dairenizin çevresi ${cevre} metre ve dairenizin alanı  ${alan} metrekaredir.`)
}

//  circleCircumference(10);

module.exports={
    circleCircumference,
}

//Kendime Notlar : Burada yukardaki circleCircumference(10); kısmını açıp konsolda
//index.js i çalıştırınca  
//Dairenizin çevresi 62.80 metre ve dairenizin alanı  314 metrekaredir.
//Dairenizin çevresi 6.28 metre ve dairenizin alanı  3.14 metrekaredir.
//Yani index e fonksiyonu import ettik tamam ama index i çalıştırınca önce gelip circle.js deki import ettiğimiz
//fonksiyonu çalıştırıyor sonra kendi index.js dekini çalıştırıyor. Neden ?
    