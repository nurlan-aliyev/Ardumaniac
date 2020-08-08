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

const NecessaryFunctionsEN = `
#delay(milliseconds)
Pauses your program for the amount of time as specified in milliseconds, where 1000 equals 1 second. 

    delay(1000);      //waits for one second

#millis()
Returns the number of milliseconds since the Arduino board began running the current program as an unsigned long value. 

    value = millis(); sets value equal to millis() 

<p class="note">Note: This number will overflow (reset back to zero), after approximately 9 hours.</p> 

#min(x, y)
Calculates the maximum of two numbers of any data type and returns the larger number. 

    value = min(value, 100);  //sets value to the larger 
                              //of value or 100, ensuring
                              //that it is at least 100
                          

#max(x, y) 
Verilən iki ədədi və ya dəyişəni müqayisə edir və böyük olanı çıxışa verir. 

    value = max(value, 100);  //eger value kiçikdirse
                              // cavab 100
                              //eger böyükdürse
                              // özü olur
                          

#randomSeed(seed) 
Sets a value, or seed, as the starting point for the <code class="one-line">random()</code> function.

    randomSeed(value);  //sets value as the random seed

Because the Arduino is unable to create a truly random number, randomSeeed allows you to place a variable, constant, or other function into the random function, which helps to generate more random <strong>"random"</strong> numbers. There are a variety of different seeds, or functions, that can be used in this function includong millis() or even <code class="one-line">analogRead()</code> to read electrical noise through an analog pin. 

#random(max)
#random(min, max) 
The random function allows you to return pseudo-random numbers within a range specified by min and max values. 

    value = random(100, 200);  //sets value to a 
                               //random number
                               //between 100-200
                               
<p class="one-line">NOte: Use this after using the <code class="one-line">randomSeed()</code> function.</p> 

The following example creates a random value between 0-255 and outputs a PWM signal on a PWM pin equal to random value: 

    int ranNumber;              //variable to store 
                                //the random value
    int led = 10;               //LED with 220 resistor 
                                //on pin 10

    void setup() {}             //no setup needed

    void loop()
    {
        randomSeed(millis());         //sets millis() 
                                      //as seed
        randNumber = random(255);     //random number 
                                      //from 0-255
        analogWrite(led, randNumber); //outputs PWM
                                      //signal
        delay(500);                   //pauses for
                                      //half a second
    }

#Serial.begin(rate)
Opens serial port and sets the baud rate for serial data transmission. The typical baud rate for comminucating with the computer is 9600 although other speeds are supported. 

    void setup()
    {
        Serial.begin(9600); //opens serial port 
                            //sets data rate to 9600
    }

<p class="note">Note: When using serial communication, digital pins 0 (RX) and 1 (TX) cannot be used at the same time.</p> 

#Serial.println(data) 
Prints data to the serial port, followed by an automatic carriage return and line feed. This command takes the same form as <code class="one-line">Serial.print()</code>, but is easier for reading data on the Serial Monitor. 

    Serial.println(analogValue); //sends the value 
                                 //of analogValue
            
<p class="note">Note: For more information on the various permutations of the Serial.println() and Serial.print() functions please refer to the Arduino website.</p> 

The following simple example takes a reading from analog pin 0 and sends this data to the computer every 1 second. 

    void setup()
    {
        Serial.begin(9600);  //sets serial to 9600
    }

    void loop()
    {
        Serial.println(analogRead(0)); //sends analog 
                                       //value
        delay(1000);                   //pauses for 1 second
    }

***
`


export default String(NecessaryFunctions)
export { NecessaryFunctionsEN }