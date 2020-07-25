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

export default String(Datatypes)