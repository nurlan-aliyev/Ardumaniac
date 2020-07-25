const Variables = `
#Dəyişənlər
Dəyişən, proqramda sonradan istifadə edilmək üçün, ədədi qiymətlərin adlandlrma üsuludur. Adından da göründüyü kimi, dəyişənin qiyməti davamlı olaraq dəyişə və yaxud sabit bir qiymət alıb heç dəyişmiyə bilər. Dəyişən ilk öncə təyin olunmalı və istəyə uyğun olaraq yadda saxlaması üçün ona bir qiymət verilməlidir. Aşağıdakı kod sxemində <code class="one-line">inputVariable</code> adlı dəyişən təyin olunur və 2-ci analoq pinindən alınan qiyməti alır. 

    int inputVariable = 0;
    inputVariable = analogRead(2);


"inputvariable" dəyişənin özüdür. Birinci sətrdə həmin bu dəyişən <b>integer</b>, qısaca <code class="one-line">int</code> növündə təyin olunurş İkinci sətirdə isə, bu dəyişənə 2-ci analoq pindən alınan qiymət verilir. Bu gələcəkdə həmin pindən istifadəni əlçatan edir. 

Dəyişən təyin olunduqdan və yaxud qiyməti dəyişdikdən sonra onu müəyyən şərtlərə uyğun yoxlaya bilərsiniz. Misal olaraq aşağıdakı kod blokunda dəyişənin qiymətini müəyyən bir şərtə uyğun yoxlanması göstərilib. Əgər dəyişənin şərti ödəyirsə, şərt bloku daxilindəki əmr icra olunur və son sətirdəki <code class="one-line">delay(inputVariable</code>) funksiyası ilə proqrama dəyişənin aldığı  qiymət qədər pauza verir: 

    if (inputVariable < 100) //şert ödeyir
    {
        inputVariable = 100; //yeni qiymet verilir
    }
    delay(inputVariable);    //qiymet qeder 
                             //pauza verilir

<p class="note">Qeyd: Dəyişənlərə elə ad verilməlidir ki, kod oxunarkən daha rahat və aydın olsun. Adlandırma zamanı xüsusi və dəyişənin məğzinə fikir vermək daha məqsədə uyğundur. Əgər daha ümumi adlardan istifadə edilsə, proqram böyüdükcə anlaşılmazlıqlar yarana və ən vacib ehtiyat olan zamanın itirilməsinə gətirib çıxara bilər. Bir də dəyişənlər üçün Arduino dili tərəfindən rezerv olunmuş adlardan başqa bütün adları istifadə etmək olar.</p> 

#Dəyişənlərin təyin olunması 
Bütün dəyişənlər istifadə olunmazdan əvvəl təyin olunmalıdır. Təyin etmək deyəndə, dəyişənin növünü (məs. <code class="one-line">int</code>, <code class="one-line">float</code>, <code class="one-line">long</code>, və s.), adını və istəyə uyğun olaraq–dəyişənə ilkin qiymət vermədən də onu təyin etmək mümkündür, ilkin qiymətini qeyd etmək nəzərdə tutulur. Proqram daxilində, dəyişən təyin olunduqdan sonra onun qiyməti müxtəlif əməliyyatlarla dəyişdirilə bilər. 

Aşağıdakı nümunədə, ilkin qiyməti 0 olan və <code class="one-line">int</code> növünə aid <code class="one-line">inputVariable</code> dəyişəni təyin olunur. Buna sadə təyinetmə deyilir. 

    int inputVariable = 0;
 
#Dəyişənin istifadə zonası
Dəyişən, <code class="one-line">setup()</code> funksiyasından əvvəldə, yəni proqramın başlanğıcında, funksiya daxilində və bəzən də for dövründə təyin oluna bilər. Təyin olunduğu yerə görə həmin dəyişəndən istifadə edə bilmə məsələsi meydana çıxır və buna dəyişənin istifadə zonası deyilir. 

Qlobal dəyişənlər zonasına bütün proqram daxilində istifadə edilə və görülə bilən dəyişənlər aiddir, biraz öncə də qeyd etdiyimiz kimi, <code class="one-line">setup()</code> funksiyasından əvvəldə yazılan dəyişənləri bura aid edə bilərik. 

Lokal–yerli zonasına isə hər hansısa funksiya daxilində və yaxud da bir dövr daxilində təyin olunmuş dəyişənlər aid edilir. Həmin bu dəyişənlər yalnız təyin olunduqları funksiya, dövr və s. daxilində istifadə oluna və görülə bilər, bu zonadan kənarda təyin olunmuş dəyişənlərdən istifadə etmək mümkün deyil.

Buna görə də proqram daxilində eyni adlı dəyişənlərdən müxtəlif yerlərdə istifadə etmək imkanı yaranır, lakin bu qarışıqlıq yarada bilən bir məsələ olduğuna görə tövsiyyə olunmur. 

Aşağıdakı nümunədə daha aydın izah olunub:

    int value;                //Qlobal deyişen
    void setup()
    {
    // no setup needed
    }

    void loop()
    {
        for (int i = 0; i<20;)// lokal deyişen
        {
            i++;              // dövrde istifade
                              // oluna biler  
        }
        float f;              // loop funksiyasında
                              // istifade oluna biler
    }

`


export default String(Variables)