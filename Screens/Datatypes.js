const Datatypes = `
#Dəyişənlərin növləri (Datatiplər)

##byte
<code class="one-line">byte</code> 8-bitlik, vergülsüz ədədi qiymətlər alır. Onların əhatə dairəsi <b>0</b>-dan <b>255</b>-ə qədərdir.

    byte someVariable = 180;

##int
Integer qısaca <code class="one-line">int</code>, əsas datatip olub, 16-bitlik vergülsüz ədədi qiymətləri alır. Əhatə dairəsi <b>32,767</b>-dən <b>-32,768</b>-ə qədərdir

    int someVariable = 1500;

##long
Adından da göründüyü kimi, uzun <b>integer</b> (tam ədəd) tipidir və 32-bitlik vergülsüz ədədi qiymətlər alır. Əhatə dairəsi <b>2,147,483,647</b>-dən <b>-2,147,483,648</b>-ə qədərdir.

    long someVariable = 90000; 

##float
Hərfi tərcüməsi üzən-vergüllü deməkdir, bu datatip, tam ədədlərin ala biləcəyi qiymətlərdən çox çox böyük qiymətləri ala bilir və vergüllü olur. Float <b>3.402823E+38</b>-dən <b>-3.4028235E+38</b>-ə qədər 32-bitlik qiymətlər ala bilir. 

    float someVariable = 3.14 


<p class="note">Qeyd: Float tipində təyin olunmuş qiymətlər dəqiq olmur, müqayisə zamanı gözlənilən nəticələri verməyə bilər. Və hesabatda digər datatiplərə nisbətən çox zəif sürətlidir, mümkün olduğu qədər istifadə olunmasa yaxşıdır.</p> 

##Massiv (array)-lər
Massiv, indekslənmiş qiymətlər toplusudur. Massivə daxil olan istənilən bir həddi, massivin adı və həmin həddin indeks nömrəsini bilməklə istifadə etmək mümkündür. Əsas müddəalardan biri də odur ki, <strong>massivlər 0 indekslidir</strong>, yəni elementlər 0-dan başlayaraq indekslənir. İstifadə olunmazdan əvvəl massivlər mütləq təyin olunmalı və istəyə uyğun olaraq ilkin qiymətləri qeyd etmək lazımdır:

    int myArray[] = {element0, element1...};

Həmçinin ilk öncə massivin növünü və ölçüsünü qabaqcadan təyin edib sonradan hər bir indeksə uyğun qiymət vermək də mümkündür:

    int myArray[5];  // 6 mövqeli massivin teyini 
    myArray[3] = 10; // 4cü elemente 10 
                     // qiymetinin verilmesi

Massivdəki elementlərdən istifadə etmək üçün, həmin elementin indeksini bilmək və bu qiyməti hər hansısa bir dəyişənə vermək kifayət edir. 

    x = myArray[3];  //x artıq 10-a beraberdir

Massivlərdən əsasən <code class="one-line">for</code> dövründə istifadə edilir. For dövründə sayğac rolunu oynayan dəyişəndən istifadə etməklə massivin hər bir elementini istifadə etmək mümkündür. Aşağıdakı nümunədə massivdən LED-in yanıb sönməsi üçün istifadə edilir. For dövründən istifadə etməklə sayğac 0-dan başlayır və massivin ölçüsünə qədər artır. Sayğacın aldığı hər bir qiymətə uyğun <code class="one-line">flicker[]</code> massivinin həmin indeksində yerləşən elementini 10-cu <b>PWM</b> (<b>P</b>ulse <b>W</b>idth <b>M</b>odulation) pininə qiymət kimi verir, 200 millisaniyə gözləyir və sonra dövr yenidən başlayır. 

    int ledPin = 10;
    byte flicker[] = {180, 30, 255, 10, 90, 150, 60};

    void setup()
    {
        pinMode(ledPin, OUTPUT);
    }

    void loop()
    {
        for(int i=0; i<7; i++)
        {
            analogWrite(ledPin, flicker[i]);
            delay(200);
        }
    }


`

const DatatypesEN = `
#Datatypes

##byte
<code class="one-line">byte</code> stores 8-bit numerical value without decimal points. They have a range of <b>0</b> to <b>255</b>.

    byte someVariable = 180;

##int
Integer shortly <code class="one-line">int</code>, is the primary datatype for storage of numbers without decimal points and store a 16-bit value with range of <b>32,767</b> to <b>-32,768</b>.

    int someVariable = 1500;

##long
Extended size datatype for long integers, without decimal points, stored in a 32-bit value with range of <b>2,147,483,647</b> to <b>-2,147,483,648</b>.

    long someVariable = 90000; 

##float
A datatype for floating-point numbers, or numbers that have a decimal point. Floating-point numbers have greater resolution than integers and are stored as a 32-bit value with a range of  <b>3.402823E+38</b> to <b>-3.4028235E+38</b>.

    float someVariable = 3.14 


<p class="note">Note: Floating-point numbers are not exact, and may yield strange results when compared. Floating point math is also much slower than integer math in performing calculations, so should be avoided if possible.</p> 

##Arrays
An array is a collection of values that are accessed with an index number. Any value in the array may be called upon by calling the name of the array and the index number of the value. Arrays are zero indexeeed, with the first value in the array beginning at index number 0. An array needs to be declared and optionally assigned values before they can be used. 

    int myArray[] = {element0, element1...};

Likewise it is possible to declare an array by declaring the array type and size and later assign values to an index position: 

    int myArray[5];  //declares int array with
                     //six positions
    myArray[3] = 10; //assigns the 4th index
                     //the value 10

To retrieve a value from an array, assign a variable to the array and index position: 

    x = myArray[3];  //x now equals 10

Arrays are often used in <code class="one-line">setup()</code> loops, where the increment counter is also used as the index position for each array value. The following example uses an array to flicker an LED. Using a  <code class="one-line">setup()</code> loop, the counter begins at 0, writes the value contained at index position 0 in the array <code class="one-line">flicker[]</code>, in this case 180, to the PWM pin 10, pauses for 200ms, then moves to the next index position. 

    int ledPin = 10;  //LED on pin 10
    byte flicker[] = {180, 30, 255, 10, 90, 150, 60};
    //array of 7 different values

    void setup()
    {
        pinMode(ledPin, OUTPUT); //sets OUTPUT pin
    }

    void loop()
    {
        for(int i=0; i<7; i++) //loop equals number
                               //of values in array
        {
            analogWrite(ledPin, flicker[i]); //writes 
                                             //index 
                                             //value 
            delay(200);                 //pause 200ms
        }
    }


`


export default String(Datatypes)
export { DatatypesEN }