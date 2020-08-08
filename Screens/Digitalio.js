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

const DigitalIOEN = `
#pinMode(pin,  mode), 
#mode = OUTPUT/INPUT
Used in <code class="one-line">void setup()</code> to configure a specified pin to behave either as an INPUT or an OUTPUT.

    pinMode(pin, OUTPUT);  //sets pin as OUTPUT
 
Arduino digital pins default to inputs, so they don't need to be explicitly declared as inputs with <code class="one-line">pinMode()</code>. Pins configured as <code class="one-line">INPUT</code> are said to be in high-impedance state.  

There are also convenient 20k pullup resistors built into the Atmega chip can be accessed from software. These built-in pullup resistors are accesed in the following manner: 

    pinMode(pin, INPUT);    //sets pin to input 
    digitalWrite(pin, HIGH);//turn on pullup resistors

Pins configured as <code class="one-line">OUTPUT</code> are said to be in a low-impedance state and can provide 40mA (milliamps) of current to other devices. This is enough current to brightly light up an LED, but not enough current to run most relays, solenids, or motors. 

Short circuits on Arduino pins and excessive current can damage or destroy the output pin, or damage the entire Atmega chip. It is often a good idea to connect an <code class="one-line">OUTPUT</code> pin to an external device in series with a 470 or 1k ohms resistors.

#digitalRead(pin)  
Reads the value from a specified digital pin with the result either <code class="one-line">HIGH</code> or <code class="one-line">LOW</code>. The pin can be specified as either a variable or constant (0-13). 

    qiymet = digitalRead(pin);  //sets 'value' 
                                //equal to the 
                                //input pin

#digitalWrite(pin, qiymət)
Outputs either logic level <code class="one-line">HIGH</code> or <code class="one-line">LOW</code> at a specified digital pin. The pin can be specified as either a variable or constant (0-13). 

    digitalWrite(pin, HIGH);   //sets pin to HIGH

The following example reads a pushbutton connected to a digitak input and turns on a LED connected to a digital output when the button has been pressed: 

    int led = 13;     //LED on pin 13
    int pin  = 7;     //pushbutton on pin 7
    int value = 0;    //variablle to read value

    void setup()
    {
        pinMode(led, OUTPUT);  //sets pin 13 as OUTPUT
        pinMode(pin, INPUT);   //sets pin 7 as INPUT
    }

    void loop()
    {
        value = digitalRead(pin);  //sets value equal to
                                   //the input pin
        digitalWrite(led, value);  //sets led to the
                                   //button's value
                               
    }

***
`

export default String(DigitalIO)
export { DigitalIOEN }