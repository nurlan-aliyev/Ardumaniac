const NecessaryFunctions = `
#delay(millisaniyə)
Proqramı verilmiş millisaniyə qədər pauza edir. <strong>1000ms = 1 san</strong>. 

    delay(1000);      //bir saniye gözleyir

#millis()
Arduino lövhəsinə enerji veriləndən bəri işlək olduğu zaman müddətini millisaniyəyə çevirib verir. 

    value = millis(); 

<p class="note">Qeyd: Təqribi 9 saat sonra bu ədəd sıfırlanır.</p> 

#min(x, y)
Verilən iki ədədi və ya dəyişəni müqayisə edir və kiçik olanı çıxışa verir. 

    value = min(value, 100);  //eger value böyükdürse 
                              //cavab 100
                              //eger kiçikdirse
                              // özü olur
                          

#max(x, y) 
Verilən iki ədədi və ya dəyişəni müqayisə edir və böyük olanı çıxışa verir. 

    value = max(value, 100);  //eger value kiçikdirse
                              // cavab 100
                              //eger böyükdürse
                              // özü olur
                          

#randomSeed(seed) 
<code class="one-line">random()</code> funksiyasının düzgün işləməsi üçün vacib olan funksiyadır və başlanğıc nöqtəsini təyin edir. 

    randomSeed(value);    

Arduino dili təsadüfi ədəd almaqda o qədər də yaxşı deyil, bunun üçün randomSeed funksiyasına dəyişən, sabit və ya hər hansısa təsadüfi ədəd alan başqa bir funksiyanı verib, <code class="one-line">random()</code> funksiyasının təsadüfi ədəd almasına kömək edir. 

#random(max)
#random(min, max) 
Bu funksiya sizə verilmiş qiymətlər aralığında təsadüfi qiymətlər verir. 

    value = random(100, 200);  //100-200 arasi 
                               //tesadüfi eded alınır
                               
<p class="one-line">Qeyd: Bunu <code class="one-line">randomSeed()</code> funskiyasından sonra istifadə edin.</p> 

Növbəti nümunədə 0-255 arası təsadüfi ədəd alınır və təyin olunmuş pinə çıxış qiyməti kimi verilir: 

    int ranNumber;                    //tesadüfi eded 
                                      //üçün deyişen
    int led = 10;                     //220om müq. 
                                      //LED 10cu pin

    void setup() {}                   //funksiyaya 
                                      //lazım deyil

    void loop()
    {
        randomSeed(millis());         //millis()
                                      //funksiyası 
                                      //seed kimi
        randNumber = random(255);     //0-255 arası 
                                      //tesadüfi eded
        analogWrite(led, randNumber); //pine alınan
                                      //qiymeti PWM
                                      //siqnalı kimi 
        delay(500);                   //san. yarısı 
                                      //qeder pauza
    }

#Serial.begin(tezlik)
Serial data transmissiyası üçün serial port açır və köçürülən informasiya üçün tezlik yaradır. Ən çox istifadə olunan informasiya köçürülməsi tezliyi 9600-dür. Başqa sürətlər də mövcuddur. 

    void setup()
    {
        Serial.begin(9600); //9600 tezlikli 
                            //serial port açılır
    }

<p class="note">Qeyd: Bu portdan istifadə zamanı rəqəmsal 0 (RX) və 1 (TX) pinləri eyni vaxtda işlənə bilməz.</p> 

#Serial.println(data) 
Bu funksiyanın <code class="one-line">Serial.print()</code> funksiyasından fərqi ondadır ki, Serial Monitora yazılan hər yazıdan sonra bir sətr aşağı düşülür. Bu çıxışdakı informasiyanın oxunmasını rahatlaşdırır. 

    Serial.println(analogValue); //analogValue 
                                 //deyişenini
                                 // çap edir
            
<p class="note">Qeyd: Bu funksiyalar haqqında daha çox məlumat almaq istəyirsinizsə, Arduino vebsəhifəsinə müraciət edin.</p> 

Növbəti sadə nümunədə 0-cı analoq pinindən qiymət oxunur və hər saniyə kompüterə ötürülür. 

    void setup()
    {
        Serial.begin(9600);  //9600 tezlikli
                             //serial port açılır
    }

    void loop()
    {
        Serial.println(analogRead(0)); //oxunan 
                                       //qiymet
                                       //kompütere 
                                       //ötürülür
        delay(1000);                   //1san pauza 
    }

***
`

export default String(NecessaryFunctions)