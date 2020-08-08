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

const StructureEN = `
#Structure
The basic structure of the Arduino programming language is very simple and consists of at least two parts. These two parts are the functions required for the program to work. And functions consist of various commands.

    void setup()
    {
        commands;
    }

    void loop()
    {
        commands;
    }

Here <code class="one-line">setup()</code> is a program preparation, and <code class="one-line">loop()</code> is a function that executes commands. Both functions must be specified when writing the program.

At the beginning of the program, the variables to be used must be specified within the <code class="one-line">setup()</code> function. The setup function is the initial function of the program and is called only once during the execution of the program and can be used either for the <code class="one-line">pinMode()</code> (more information on the following topics) or to create a serial connection between the Arduino board and the computer.

The loop function is called after the setup and constantly reads commands - input data, output signal, etc. executes. From this we can say that the loop function is the basis of all Arduino programs, and most of the executed program falls on it.


#setup()
The <code class="one-line">setup()</code> function is called only once during program execution, and can be used to assign pins on a board or to establish a serial connection. Even if there is no executable code block, the program must write the <code class="one-line">setup()</code> function. 

    void setup()
    {
        pinMode(pin, OUTPUT); //sets pin as OUTPUT
    }

#loop()
After the <code class="one-line">setup()</code> function is called, the <code class="one-line">loop()</code> function, as the name implies, loops sequentually to control the Arduino board, respond to external signals, etc. In short, the loop function is the basis of the Arduino program.

    void loop()
    {
        digitalWrite(pin, HIGH); //turns pin on
        delay(1000);             //pauses for 1 sec.
        digitalWrite(pin, LOW);  //turns pin off
        delay(1000);             //pauses for 1 sec.
    }

#Functions
A function is a block of code with its own name and commands inside. These commands are executed when the function is called.
There is enough information about the <code class="one-line">setup()</code> and <code class="one-line">loop()</code> functions, and we will talk about other pre-written functions in the following topics. 

You can create functions yourself to solve any problem you want and eliminate confusion that may arise in the program. To do this, you must first determine the <b>type</b> of function. The output results of the functions correspond to the defined types, e.g. The result of a function of type <b>integer</b> will also be an integer. If no output is expected from the function, then the type of such function should be written as <b>void</b>.

    type functionName(parameters)
    {
        commands;
    }

The <code class="one-line">delayVal()</code> function of the integer type shown below is designed to pause a program using a value read from a potentiometer. Initially, it defines the variable <b>"v"</b> within the function, equates the value of that variable to a value between 0-255 read from the potentiometer, and finally returns the value of the variable v as a result. 

    int delayVal()
    {
        int v;               //temporary v variable
        v = analogRead(pot); //read pot. value
        v /= 4;              //converse 0-1023 to 0-255
        return v;            //return final value
    }

#{}Curly braces
Curly brackets define the beginning and end of function and condition blocks. 

    type function()
    {
        commands;
    }

The open curly bracket must be closed. If left unchecked, this can lead to compilation errors that are difficult to find in the program. The best way to prevent this is to close the bracket as soon as you open it and write down the commands inside. 

There is a convenient way to check this balance in an Arduino environment. Just select the open bracket, and the other half of it will be highlighted.

#;Semicolon
A semicolon is used to terminate any command, or to separate elements of a program. It is also used to separate commands in parentheses during <code class="one-line">for</code> loop in which it's mandatory. 

    int x = 13; //x is equals to 13

<p class="note"> Note: If a semicolon is not placed in the required place on any line, a compilation error may occur again, so it is better to put it on the place where the semicolon should be placed before writing the command. </p>

#/*...*/Comments 
A comment block is a field of text used to provide general information about a program or any operation to users. The program does not read the comment block and does not execute any line. These blocks start with <code class="one-line">/*</code> and end with <code class="one-line">*/</code>.

    /* Do not forget
       to close 
       the comment block!
    */


#//Line comments
Single line comments start with <code class="one-line">//</code> and convert the written line into a comment. Like the comment block, it is not read, executed, or stored by the program.

    //an example for single line comments

Single line comments are used to write information about a written command or to explain an operation.

***
`


export default String(Structure)
export { StructureEN } 