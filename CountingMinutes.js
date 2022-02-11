function CountingMinutes(str) {

    let [firstDate, secondDate] = str.split('-') //  split ile stringi parçaladık. Parçalarken referans olarak - karakterini kullandık.
  
    let lastTwoFirst = firstDate.slice(-2) //  (-2) yaparak sondan iki karakteri alıp lastTwoFirst değişkenine atadık. am ve pm için
    
    let lastTwoSecond = secondDate.slice(-2) //  (-2) yaparak sondan iki karakteri alıp lastTwoSecond değişkenine atadık. am ve pm için
    
    let [firstDateSplit1, firstDateSplit2] = firstDate.split(':') //  birinci saati split ile stringi parçaladık. Parçalarken referans olarak : karakterini kullandık.
    
    let newFirstDateSplit2 = firstDateSplit2.split("").reverse().slice(2).reverse().join("") //  bir önceki değişkende parçaladğımız stringi split() ile diziye çevirdik ve sonra reverse() ile ters çevirdik. Sonra slice() ile 2. karakterden sonraki karakterleri alıp newFirstDateSplit2 değişkenine atadık. join() ile stringe çevirdik. am ve pm öncesinde yazılan karakterleri aldık.
    
    let [secondDateSplit1, secondDateSplit2] = secondDate.split(':') //  ikinici saati split ile stringi parçaladık. Parçalarken referans olarak : karakterini kullandık.
    
    let newSecondDateSplit2 = secondDateSplit2.split("").reverse().slice(2).reverse().join("") //  bir önceki değişkende parçaladğımız stringi split() ile diziye çevirdik ve sonra reverse() ile ters çevirdik. Sonra slice() ile 2. karakterden sonraki karakterleri alıp newSecondDateSplit2 değişkenine atadık. join() ile stringe çevirdik. am ve pm önündeki yazılan karakterleri aldık.
    
  
  /*
  
    am ve pm için kontrol yaptık. pm  için 12 dışındaki sayıları 24 lük sisteme çevirmek için +12 yapıyoruz.
    İlk saat ve ikinci saat için farklı kontroller yaptık.
    İlk kontorlde pm se ve 12 dışındaki sayıları 24 lük sisteme çevirmek için +12 yapıyoruz.
    İlk kontrolde am se ve 12 ise 00 yapıyoruz. 12 değilse dokunmuyoruz.

    İkinci kontroldeki am ve pm için kontrol yaptık. pm  için 12 dışındaki sayıları 24 lük sisteme çevirmek için +12 yapıyoruz.
    İkinci kontroldeki am se ve 12 ise 00 yapıyoruz. 12 değilse dokunmuyoruz.
    

  */


    if(lastTwoFirst === "pm") {
  
    if(firstDateSplit1 === "12"){
      firstDateSplit1 = "12"
    }else {
      firstDateSplit1 = Number(firstDateSplit1) + 12
    }
  
    }else if (lastTwoFirst === "am"){
      if(firstDateSplit1 === "12") {
        firstDateSplit1 = "00"
      }else {
        firstDateSplit1 = Number(firstDateSplit1)
      }
    }
  
    if(lastTwoSecond === "pm") {
  
    if(secondDateSplit1 === "12"){
      secondDateSplit1 = "12"
    }else {
      secondDateSplit1 = Number(secondDateSplit1) + 12
    }
  
    }else if (lastTwoSecond === "am"){
      if(secondDateSplit1 === "12") {
        secondDateSplit1 = "00"
      }else {
        secondDateSplit1 = Number(secondDateSplit1)
      }
    }
   
    /*
    
     iki tarih arasındaki farkı hesapladık.
    firstClock ve secondClock değişkenlerine atadık.
    firstClock değişkeninde ilk saat değerini, secondClock değişkeninde ikinci saat değerini topladık.
    firstClock ve secondClock değişkenlerindeki değerleri karşılaştırdık.
    24 lük sistemde aralık hesaplarken örn 13.00 ın 11.00 olması için 22 saat geçmesi gerek,
    yani ikinci değer küçükse (24*60) ekliyoruz. Böylece aradaki saati hesaplarız.
    if else koşullarında pm değerlerinde +12 eklememizin nedeni 24 lük sisteme çevirmekti.
    Artık 24 lük sistem üzerinden hesaplama yapıyoruz. Bu yüzden karşılaştırma yaptık.
    
    */ 
  
    let firstClock = Number(firstDateSplit1) * 60 + Number(newFirstDateSplit2)
    let secondClock = Number(secondDateSplit1) * 60 + Number(newSecondDateSplit2)
  
    if (secondClock < firstClock) {
      secondClock = secondClock + (24 * 60)
    }
  
    let totalMinute = secondClock - firstClock
    return totalMinute
  
  
  
}
     
  // keep this function call here 
  console.log(CountingMinutes("1:00pm-11:00am"));