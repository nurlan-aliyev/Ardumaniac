const Structure = `
#Struktur
Arduino proqramlaşdırma dilinin əsas strukturu çox sadədir və ən azı iki hissədən ibarət olur. Bu iki hissə proqramın işləməsi üçün lazımi olan funksiyalardır. Və funksiyalar müxtəlif əmrlərdən (komanda) ibarət olur.

    void setup()
    {
        komandalar;
    }

    void loop()
    {
        komandalar;
    }

Burada <code class="one-line">setup()</code> proqramın hazırlıq, <code class="one-line">loop()</code> isə əmrləri icra edən funksiyadır. Hər iki funksiya proqram yazıldıqda mütləq şəkildə qeyd olunmalıdır. 

Proqramın əvvəlində istifadə oluncaq dəyişənlər <code class="one-line">setup()</code> funksiyasının daxilində təyin olunmalıdır. Setup funksiyası proqramın ilkin funksiyasıdır və proqram icra olunarkən sadəcə bir dəfə çağrılır və ondan ya <code class="one-line">pinMode</code> (sonrakı mövzularda haqqında məlumat var) ya da Arduino lövhəsi ilə kompüter arasında serial əlaqə yaratmaq üçün istifadə olunur. 

Loop funksiyası isə setup-dan sonra çağrılır və daimi olaraq əmrləri–giriş verilənlərini oxumaq, çıxışa siqnal vermək və s. icra edir. Burdan deyə bilərik ki, loop funksiyası bütün Arduino proqramlarının əsasıdır və yerinə yetirilən proqramın çox hissəsi onun payına düşür. 


#setup()
<code class="one-line">setup()</code> funksiyası proqram yerinə yetirilərkən sadəcə bir dəfə çağrılır, ondan lövhə üzərindəki pinlərin təyinatını verə və yaxud serial əlaqə yaratmaq üçün istifadə etmək olar. Hətta heç bir icra olunmalı kod bloku yoxdursa da, proqramda mütləq <code class="one-line">setup()</code> funksiyası yazılmalıdır. 


    void setup()
    {
        pinMode(pin, OUTPUT); // ÇIXIŞ pin-i
    }

#loop()
<code class="one-line">setup()</code> funksiyası çağrıldıqdan sonra, <code class="one-line">loop()</code> funksiyası adından da göründüyü kimi, ardıcıl olaraq dövr(loop) edib Arduino lövhəsini idarə etməyə, xaricdən gələn siqnallara cavab verməyə və s. imkan yaradır. Bir sözlə loop funksiyası Arduino proqramının əsasıdır.         

    void loop()
    {
        digitalWrite(pin, HIGH);  // 5V verilir
        delay(1000);              // 1 san pauza
        digitalWrite(pin, LOW);   // 0V verilir
        delay(1000);              // 1 san pauza
    }

#Funksiyalar
Funksiya, öz adı və daxilində əmrlər olan kod blokudur. Bu əmrlər, funksiya çağrılanda icra edilir. 
<code class="one-line">setup()</code> və <code class="one-line">loop()</code> funksiyaları haqqında kifayət qədər məlumat verilib, sonrakı mövzularda digər öncədən yazılmış funksiyalar haqqında söhbət açılacaq. 

İstədyiniz bir məsələni həll etmək və proqramda yarana biləcək qarışıqlığı aradan qaldırmaq üçün, siz, özünüz funksiyalar yarada bilərsiniz. Bunun üçün ilk öncə, funksiyanın növünü (<b>type</b>) müəyyənləşdirmək lazımdır. Funksiyaların çıxış (output) nəticələri, təyin olunmuş növlərinə uyğun olur, məs. tam ədəd (<b>integer</b>) növlü funksiyanın nəticəsi də tam ədəd (<b>'int'</b>) olcaq. Əgər funksiyadan heç bir çıxış nəticəsi gözlənirmirsə onda belə funksiyaların növünü <b>void</b> kimi yazmaq lazımdır. 

<p class="note"><strong><em>Qeyd:</em></strong> <em>Void</em>–ingilis dilindən tərcümədə boşluq mənasını verir. Növü müəyyənləşdirdikdən sonra, funksiyaya xüsusi bir ad və mötərizələr içərisində lazımi parametrlər qeyd olunmalıdır.</p>

    növ funsksiyaAdı(parametrler)
    {
        komandalar;
    }

Aşağıda göstərilən tam ədəd tipli <code class="one-line">delayVal()</code> funksiyası, potansiometrdən oxunan qiymətdən istifadə edərək proqramda pauza yaratmaq üçün yaradılıb. İlkin olaraq funksiya daxilində <b>"v"</b> dəyişənini təyin edir, həmin dəyişənin qiymətini potensiometrdən oxunan, 0-255 arası dəyişən qiymətə bərabər edir və son olaraq da v dəyişəninin qiymətini nəticə kimi çıxışa verir. 

    int delayVal()
    {
        int v;               // v deyiş. teyini
        v = analogRead(pot); // pot. qiymeti
        v /= 4;              // 0-1023 0-255-e keçid
        return v;            // çıxış neticesi
    }

#{}dalğalı mötərizələr
Dalğalı mötərizələr funksiya və şərt bloklarının başlanğıc və sonunu müəyyənləşdirir. 

    növ funksiya()
    {
        komandalar;
    }

Açılmış dalğalı mötərizə mütləq şəkildə bağlanmalıdır. Əgər fikir verilməsə, bu proqramda tapılması çətin olan kompliyasiya xətaları yarada bilər. Bunun qarşısın almaq üçün ən yaxşı üsul, dalğalı mötərizəni açan anda bağlıyıb, daxilində istənilən əmrləri yazmaqdır. 

Arduino mühitində bu balansı yoxlamaq üçün rahat yol var. Sadəcə açılan mötərizəni seçin, və onun digər yarısı işarələnəcək. 

#;nöqtəli vergül
Nöqtəli vergüldən hər hansısa əmri sonlandırmaq və ya proqramın elementlərini bir-birindən ayırmaq üçün istifadə olunur. Həmçinin <code class="one-line">for</code> dövründə (haqqında məlumat veriləcək) mötərizə daxilində əmrləri bir-birindən ayırmaq üçün istifadə olunur və mütləqdir. 

    int x = 13; // x 13-e beraber edilir

<p class="note">Qeyd: Hər hansısa sətrdə, nöqtəli vergül tələb olunan yerdə qoyulmayıbsa yenidən kompliyasiya xətası baş verə bilər, bunun üçün nöqtəli vergül qoyulmalı yerlərdə əmri yazmazdan əvvəl qeyd eləmək daha məqsədəuyğundur.</p>

#/*...*/şərh blokları  
Şərh bloku, proqram haqqında ümumi məlumat və yaxud istifadəçilərə hər hansısa əməliyyatı izah etmək üçün istifadə edilən mətn sahəsidir. Proqram şərh blokunu oxumur və heç bir sətri yerinə yetirmir. Bu bloklar <code class="one-line">/*</code> ilə başlayır və <code class="one-line">*/</code> ilə bitir.

    /* şerh blokuna aid nümune
    bloku bağlamağı unutmayın!
    */


#//tək sətirli şərhlər 
Tək sətr şərhləri <code class="one-line">//</code> ilə başlayır və yazıldığı sətri şərh halına çevirir. Şərh bloku kimi proqram tərəfindən oxunmur, icra edilmir və yaddaşda yer tutmur. 

    // tek setr şerhine aid nümune

Tək sətr şərhlərindən yazılmış əmr haqqında məlumat yazmaq üçün və yaxud aparılan əməliyyatı izah etməkçün istifadə olunur.
`

export default String(Structure) 