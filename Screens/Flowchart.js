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

const FlowchartEN = `
#if
if statements test whether a certain condition has been reached, such as an analog value being above a certain number, and executes any statements inside the brackets if the statement is true. If false the program skips over the statement. The format for an <code class="one-line">if</code> test is: 

    if (someVariable ?? value)//??=> <, >,<=, >=, ==
    {
        doSomething; 
    }

The above example compares <code class="one-line">someVariable</code> to another value, which can be either a variable or constant. If the comparison, or condition in parantheses is true, the statements inside the brackets are run. If not, the program skips over them and continues on after the brackets. 

<p class="note">Note: The <code class="one-line">??</code> symbol in this example used instead of Operators (Look at Operators section).Beware of accidentally using "=" instead of  "==" when comparing!</p> 
 
#if... else
<code class="one-line">if... else</code> allows for 'either-or' decisions to be made. For example, if you wanted to test a digital input, and do one thing if the input went <code class="one-line">HIGH</code> or instead do another thing if the input was <code class="one-line">LOW</code>, you would write that this way: 

    if (inputPin == HIGH)
    {
        doThingA;
    }
    else
    {
        doThingB;
    }

<code class="one-line">else</code> can also precede another if test, so that multiple, mutually exclusive tests can be run at the same time. It is even possible to have an unlimited number of these else branches. Remember though, only one set of statements will be run depending on the condition tests: 

    if (inputPin < 500)
    {
        doThingA;
    }
    else if (inputPin >= 1000)
    {
        doThingB;
    }
    else
    {
        doThingC;
    }


#for
The for statement is used to repeat a block of statements enclosed in curly braces a specified number of times. An increment counter is often used to increment and terminate the loop. There are three parts, seperated by semicolons (;) to the for loop header: 

    for (initialization; condition; expression)
    {
        doSomething;
    }

The initialization of a local variable, or increment counter, happens first and only once. Each time through the loop, the following condition is tested. If the condition remains true, the following statements and expression are executed and the condition is tested again. When the condition becomes false, the loop ends. 

The following example starts the integer <code class="one-line">i</code> at 0, tests to see if i is still less than 20 and if true, increments i by 1 and executes the enclosed statements: 

    for (int i=0; i<20; i++)   //declares i, tests if 
                               //less than 20,
    {                          //increments i by 1
        digitalWrite(13, HIGH);//turns pin 13 on
        delay(250);            //pauses for 1/4
                               //second 
        digitalWrite(13, LOW); //turns pin 13 off
        delay(250);            //pauses for 1/4
    }


#while
<code class="one-line">while</code> loops will loop continously, and infinitely, until the expression inside the paranthesis becomes false. Something must change the tested variable, or the while loop will never exit. This could be in your code, such as an incremented variable, or an external condition, such as testing a sensor. 

    while (someVariable ?? value)
    {
        doSomething;
    }

The following example tests whether <code class="one-line">someVariable</code> is less than 200 and if true executes the statements inside the brackets and will continue looping until 'someVariable' is no longer less than 200. 

    while (someVariable < 200) //tests if less than 200
    {
        doSomething;          //executes enclosed statements
        someVariable++;       //increments variable by 1
    }

#do... while
The <code class="one-line">do... while</code> loop works in the same manner as the while loop, with exception that the condition is tested at the end of the loop, so the do loop will always run at least once. 

    do 
    {
        doSomething;
    } while (someVariable ?? value);

The following example assigns <code class="one-line">readSensors();</code> to the variable <code class="one-line">x</code>, pauses for 50 milliseconds, then loops indefinitely until 'x' is no longer less than 100: 

    do
    {
        x = readSensors();  //assigns the value of
                            //readSensors() to x
        delay(50);          //pauses 50 milliseconds
    } while (x < 100);      //loops if x is less than 100
                            

***
`

export default String(Flowchart)
export { FlowchartEN }