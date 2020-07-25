const Flowchart = `
#if şərt bloku
<code class="one-line">if</code> şərt bloku adından da məlum olduğu kimi, mötərizə daxilindəki şərtin doğruluğunu yoxlayır və əgər verilmiş şərtin doğruluğu təsdiqlənirsə dalğalı mötərizə içərisindəki komandalar yerinə yetirir. Əgər şərtin doğruluğu ödənmirsə proqram <code class="one-line">if</code> blokunu oxumadan keçir. 

if şərt blokunun yazılma qanunu:

    if (someVariable ?? qiymet)//??=> <, >,<=, >=, ==
    {
        komandalar; 
    }

Yuxarıdakı nümunədə <code class="one-line">someVariable</code> dəyişənini verilən qiymətlə müqayisə edir. Bu qiymət hər hansısa dəyişən və yaxud sabit ola bilər. Əgər mötərizə içindəki ifadə düzgün olarsa dalğalı mötərizə içindəki komandallar yerinə yetiriləcək. Əgər şərt ödənmirsə bu blok proqram tərəfindən oxunmur və sonrakı sətrə keçir. 

<p class="note">Qeyd: Bu ifadədəki <code class="one-line">??</code> operatoru əvəz edir (bax Operatorlar). Müqayisə edərkən "=" yerinə "==" işarəsindən istifadə edin! Çünki tək bərabərdir işarəsi ifadəni müqayisə etmir, verilmiş ifadədə bərabərlik yaradır və müqayisə edilən ifadənin qiymətini yenidən təyin edir. Məs. if (x = 10) həmişə doğrudur çünki x dəyişəninin qiyməti artıq 10-a bərabər  olur və proqram tərəfindən bu doğru hal kimi sayılır. Amma if(x == 10) ifadəsi isə x-in əvvəlki qiyməti ilə 10-u müqayisə edir və bu daha doğrudur.</p> 
 
#if... else şərt bloku
<code class="one-line">if... else</code> şərt blokunun əsas özəlliyi hər hansısa şərt ödənmədikdə yeni şərti yoxlamaq üçün imkan yaradır və "və yaxud" məntiqilə işləyir. Məs. əgər hər hansısa bir ifadənin müqayisəsində 2 və ya daha çox mümkün hal varsa onları <code class="one-line">if... else</code> blokuyla etmək daha məqsədəuyğundur. Aşağıda buna aid bir nümunə verilmişdir: 

    if (girişPini == HIGH)
    {
        komandaA;
    }
    else
    {
        komandaB;
    }

<code class="one-line">else</code> özü də xüsusi şərtin doğruluğunu müqayisə edə bilir, bunun yazılış qaydası <code class="one-line">else if (ifade) {}</code> kimidir. Bu bloklardan istənilən sayda istifadə etmək olar, bunun üçün bilinən bir limit yoxdur ancaq proqramın performansına təsiri nəzərə almaq lazımdır. Aşağıda bu bloka aid nümunə verilmişdir:

    if (girişPini < 500)
    {
        komandaA;
    }
    else if (girişPin >= 1000)
    {
        komandaB;
    }
    else
    {
        komandaC;
    }


#for dövr bloku 
For dövr blokundan hər hansısa əmr sətrini və yaxud kod blokunu müəyyən qədər təkrarlamaq üçün və yaxud massivin elementlərindən isitfadə etmək üçün istifadə edilir. Bu dövrü sonlandırmaq üçün bir sayğacdan istifadə edilir. For dövrünün başlığı 3 hissədən ibarətdir və 3-ü də ";" ilə ayrılır:

    for (teyinEtme; şert; ifade)
    {
        komandalar;
    }

Lokal dəyişənin və ya sayğacın təyini yalnız bir dəfə təyin olunur. Hər dəfə sayğac artaraq (azalaraq) şərti yoxlamaqla for dövrünün proqram tərəfindən icra olunub olunmamasını təyin edir. Mötərizə daxilindəki şərt ödənməzsə onda for dövrü artıq icra olunmur. 

Növbəti nümunədə sayğac kimi <code class="one-line">int</code> növündə <code class="one-line">i</code> dəyişəni təyin olunur, və həmin həddin 20-dən artıq olması şərtini yoxlay;r, və əgər bu şərt ödənirsə i dəyişəni 1 vahid artır və dalğalı mötərizə daxilindəki kod icra olunur:

    for (int i=0; i<20; i++)    //i sayğacı
                                //teyin olunur
    {                           //20den kiçik 
                                //olması yoxlanır
        digitalWrite(13, HIGH); //13cü pine 
                                //5V verilir
        delay(250);             //saniyenin 1/4ü
                                // qeder pauza 
        digitalWrite(13, LOW);  //13cü pine 
                                //0V verilir
        delay(250);             //yeniden pauza 
                                //verilir
    }


#while dövr bloku
<code class="one-line">while</code> dövr bloku mötərizə daxilindəki şərt ödənmiyənə kimi, davamlı və sonsuz olaraq təkrarlanır. Blok daxilində mütləq elə bir məntiqi əməliyyat olmalıdır ki, while dövr sonlansın və proqramın yaddaşı dolmasın. Bunun üçün ya sayğac ya da <code class="one-line">if</code> şərt blokundan istifadə daha məqsədəuyğundur. 

    while (someVariable ?? qiymet)
    {
        komandalar;
    }

Növbəti nümunədə <code class="one-line">someVariable</code> dəyişəni 200-dən böyük qiymət alana kimi dövr təkrarlanır:

    while (someVariable < 200) //200den kiçik 
                               //olma şerti
    {
        komandalar;           //müyyen komandaları
                              //icra edir
        someVariable++;       //ve yoxlanılan 
                              //deyişen 1 vahid artır
    }

#do... while, son şərtli dövr bloku
<code class="one-line">do... while</code> dövr blokunda, dövr blokun son sətrindəki şərt ödənməyənə kimi icra olunur və şərtdən asılı olmuyaraq ən azı 1 dəfə icra olunur. 

    do 
    {
        komandalar;
    } while (someVariable ?? qiymet);

Növbəti nümunədə ilk növbədə <code class="one-line">x</code> dəyişəninə sensorlardan qiymət oxuyan <code class="one-line">readSensors();</code> funksiyasının aldığı qiyməti təyin olunur, 50 millisaniyə pauza verilir və x dəyişəni 100-dən böyük qiymət alana qədər icra olunur. 

    do
    {
        x = readSensors();  //deyişenin teyini
        delay(50);          //50ms pauza
    } while (x < 100);      //esas şert
                            

***
`
export default String(Flowchart)