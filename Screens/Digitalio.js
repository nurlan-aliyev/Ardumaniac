const DigitalIO = `
#pinMode(pin,  mode), 
#mode = OUTPUT/INPUT
<code class="one-line">void setup()</code> funksiyasında lövhənin pinlərinin işlənmə vəzifələrini təyin edir. 

    pinMode(pin, OUTPUT);  //pini OUTPUT 
                           //kimi teyin edir

Arduinonun rəqəmsal pinləri normal olaraq <code class="one-line">INPUT</code> (giriş) təyinatlıdır, buna görə də rəqəmsal pinlərdən <code class="one-line">INPUT</code> kimi istifadə olunursa <code class="one-line">pinMode()</code> funksiyasından istifadə məcbur deyil. 

Bu pinlər <code class="one-line">INPUT</code> kimi istifadə olunduqda, lövhə daxilində olan 20k om müqavimətli rezistorlardan istifadə etmək mümkündür (bu rezistorlar qısa-qapanma zamanı böyük rol oynayırlar). Bu imkandan istifadə etmək üçün aşağıdakı nümunədə göstəriləni etmək lazımdır: 

    pinMode(pin, INPUT);     //pin INPUT kimi
                             // teyin olunur
    digitalWrite(pin, HIGH); //rezistordan istifade

Arduino lövhəsindəki pinlərdən istifadə zamanı cərəyan şiddəti limiti keçərsə və yaxud qısa qapanma yaranarsa həmin pin və yaxud ümumilikdə Atmega mikrokontroller çipi sıradan çıxa bilər. Bunun qarşısını almaq üçün <code class="one-line">OUTPUT</code> pinindən istifadə zamanı həmin pinə ardıcıl olaraq 47 və yaxud 1k om müqavimətli rezistor qoşulmalıdır. 

#digitalRead(pin)  
Verilmiş xüsusi rəqəmsal pinindən <code class="one-line">HIGH</code> və ya <code class="one-line">LOW</code> qiymətlərini oxuyur. Buradakı pin ya dəyişən kimi ya da sabit olaraq 0-13 aralığında götürülə bilər. 

    qiymet = digitalRead(pin);  //"qiymet"i 
                                //pinden oxunan
                                //qiymete beraber
                                //edir

#digitalWrite(pin, qiymət)
Çıxışa ya <code class="one-line">HIGH</code> ya da <code class="one-line">LOW</code> (yandırıb, söndürmək) qiymətini verir. Burada da göstərilən pin həm hər hansısa dəyişən və ya sabit ola bilər (0-13). 

    digitalWrite(pin, HIGH);   //pin-e HIGH verir

Aşağıda göstərilən nümunədə 7-ci pini <code class="one-line">INPUT</code> kimi təyin edib purjinli açar (<em>pushbutton</em>) bağlanarkən alınan qiyməti oxuyub, <code class="one-line">OUTPUT</code> kimi təyin olunan 13-cü pindəki LED-i yandırır:

    int led = 13;     //13cü pindeki LED
    int pin  = 7;     //7ci pindeki açar
    int value = 0;    //açardan oxunan qiymet

    void setup()
    {
        pinMode(led, OUTPUT);  //13cü pini çıxış 
                               //kimi teyin edir
        pinMode(pin, INPUT);   //7ci pini çıxış
                               // kimi teyin edir
    }

    void loop()
    {
        value = digitalRead(pin);  //açardan alınan 
                                   //qiymeti oxuyur 
        digitalWrite(led, value);  //hemin qiymete 
                                   //uyğun LED-e  
                                   //çıxış qiymeti
                                   //verilir 
                               
    }

***
`

export default String(DigitalIO)