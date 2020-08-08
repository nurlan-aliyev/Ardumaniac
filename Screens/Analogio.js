const AnalogIO = `
#analogRead(pin)
Xüsusi analoq pinindən 10-bitlik qiymət oxuyur. Bu funksiya sadəcə 0-5 aralığındakı analoq pinlərdən istifadə zamanı yararlı olur. Alınan qiymət 0 ilə 1023 arasında olur. 

    value = analogRead(pin); //pinden oxunan qiymeti
                             //deyişene teyin edir

<p class="note">Qeyd: Analoq pinləri rəqəmsal pinlərdən fərqli olaraq qabaqcadan <code class="one-line">INPUT</code> və yaxud <code class="one-line">OUTPUT</code> kimi təyin olunmağa ehtiyac duymurlar.</p>

#analogWrite(pin, value)
PWM nişanlı pinlərə psevdo-analoq qiymətləri verir. Yeni Arduino lövhələrində bu funksiya 3, 5, 6, 9, 10 və 11-ci pinlərdə istifadə oluna bilər. Nisbətən köhnə, ATmega8 çipli Arduino lövhələrində isə yalnız 9, 10 və 11-ci pinlərdə bu funksiyanın istifadəsi mümkündür. Çıxışa verilən qiymət dəyişən və ya sabit olaraq 0-255 aralığında ola bilər. 

    analogWrite(pin, value);  //analoq pine 
                              //qiymet verilir

Verilən qiymət 0 olduqda çıxışa sabit 0 volt verilir, 255 olduqda çıxışa sabit 5 volt verilir. 0-255 arasında qalan qiymətlərdə isə çıxışa verilən gərginlik 0 və 5 volt olmaqla dəyişir (iki qiymətdən yalnız biri verilir). Qiymət 255-ə yaxındırsa deməli çıxışa daha çox 5 volt veriləcək. Məs. verilən qiymət 128 olarsa zamanın yarısında çıxışa verilən gərginlik 0, digər yarısında isə 5 volt olacaq. 

Aşağıdakı nümunədə, analoq giriş pinindən qiymət oxunur, həmin qiymət 4-ə bölünür və 0-255 aralığında PWM siqnalı alınır və çıxış pininə verilir: 

    int led = 10; //10cu pindeki 220om müq. rez. LED
    int pin = 0;  //0 analoq pinindeki potansiometer
    int value;    //qiymeti saxlamaq üçün deyişen

    void setup(){} //bu funksiyaya ehtiyac yoxdur

    void loop()
    {
        value = analogRead(pin); //qiymet deyişende
                                 // saxlanılır
        value /= 4;              //PWM siqnalına 
                                 //çevrilme aparılır
        analogWrite(led, value); //hemin siqnal
                                 //çıxışa verilir
    }

***
`

const AnalogIOEN = `
#analogRead(pin)
Reads the value from a specified analog pin with a 10-bit resolution. This pin only works on analog in pins (0-5). The result varies from 0 to 1023. 

    value = analogRead(pin); //sets 'value'
                             //equal to 'pin'

<p class="note">Note: Analog pins do not require to be first declared as  <code class="one-line">INPUT</code> nor <code class="one-line">OUTPUT</code>.</p>

#analogWrite(pin, value)
Writes a pseudo-analog value using hardware enabled pulse width modulation (PWM) to an output pin marked PWM. On newer Arduinos with the ATmega168 chip, this function works on pins 3, 5, 6, 9, 10 and 11. Older Arduinos only supports 9, 10 and 11. The value can be specified as a variable or constant with a value from 0-255. 

    analogWrite(pin, value);  //writes 'value'
                              //to analog 'pin'

A value of 0 generates a steady 0 volts output at the specified pin. A value of 255 generates a steady 5 volts output at the specified pin. For values in between 0-255, the pin rapidly alternates between 0 and 5 volts. 

Because this is a hardware function, the pin will generate a steady wave after a call to analogWrite in the background until the next call to analogWrite (or a call to digitalRead or digitalWrite on the same pin).

    int led = 10; //LED with 220 resist. on pin 10
    int pin = 0;  //potentiometer on analog pin 0
    int value;    //value for reading

    void setup(){} //no needed

    void loop()
    {
        value = analogRead(pin); //sets value 
                                 //equal to pin
        value /= 4;              //converts 0-1023 
                                 //to 0-255
        analogWrite(led, value); //outputs PWM signal
                                 // to LED
    }

***
`
export default String(AnalogIO)
export { AnalogIOEN }