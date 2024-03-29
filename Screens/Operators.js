const Operators = `
#Riyazi əməllər
Bura hardasa hamı tərəfindən bilinən toplama, çıxma, vurma və bölmə əməlləri daxildir. Arduino dilində bu əməllərə aid nümunələr aşağıda göstərilmişdir:

    y = y + 3;
    x = x - 7;
    i = j * 6;
    r = r / 5;

Bu əməllər həddlərin datatiplərinə uyğun yerinə yetirilir və nəticə də həmin növdə alınır. Məs. 7/2 əməlinin cavabı 3 olacaq çünki, hər iki ədəd <code class="one-line">int</code> növünə aiddir və vergüllü ədəd alına bilməz. Və əgər aparılan hesabatın nəticəsi <code class="one-line">int</code> tipinin əhatə dairəsindən kənara çıxırsa bu əməliyyat aparılmır. 

Əgər aparılan hesabatın hədlərinin tipləri fərqlidirsə onda, hesabat üçün daha böyük əhatə dairəsinə (Bax: Verilənlərin növləri) malik olan tipdən istifadə edilir. Məs. əgər hədlərdən biri <code class="one-line">int</code> digəri <code class="one-line">float</code> tipindədirsə, hesabat üçün <code class="one-line">float</code> tipindən istifadə olunacaq və alınan nəticə vergüllü olacaq. 

<p class="note">Qeyd: Bir tipdən digərinə keçmək üçün qəlib (cast) operatorundan istifadə edə bilərsiniz. Məs. <code class="one-line">a = (int)3.14</code> ifadəsində a-nın qiyməti 3-ə bərabər olacaq.</p>

#Mürəkkəb əməllər
Mürəkkəb əməllərdən istifadə zamanı həm riyazi əməl yerinə yetirilir həm də dəyişənə yeni qiymət verilir. Bu əməllərdən daha çox dövr bloklarında istifadə olunur. Ən geniş istifadəyə malik mürəkkəb əməllər aşağıdakılardır:

    x++     //x = x + 1
    x--     //x = x - 1
    x += y  //x = x + y
    x -= y  //x = x - y
    x *= y  //x = x * y
    x /= y  //x = x / y

#Müqayisə operatorları
Bu operatorlardan əsasən hər hansısa şərtin doğruluğunu yoxlamaq və ya iki həddi müqayisə etmək üçün istifadə olunur. Aşağıda geniş istifadəyə malik olan müqayisə operatorları göstərilmişdir:

    x == y  // beraberliyi yoxlayır
    x != y  // berabersizliyi yoxlayır
    x <  y  // sol müqayise
    x >  y  // sağ müqayise
    x <= y  // kiçikdir beraberdir
    x >= y  // böyükdür beraberdir

Yuxarıda qeyd olunan operatorların əsas məğzi şərhlərdə qeyd olunduğu kimidir. Məs. <code class="one-line">if</code> şərt blokunda hər hansısa halın doğruluğunu yoxlayanda və ya hədləri müqayisə edəndə yazılmış ifadədən sadəcə iki nəticədən biri alına bilər, bunlar <code class="one-line">TRUE</code> və <code class="one-line">FALSE</code>, tərcümədə <code class="one-line">DOĞRU</code> və <code class="one-line">YANLIŞ</code> sabitləridir. Bu haqda növbəti mövzularda geniş məlumat verilib. 

#Məntiqi operatorlar
Məntiqi operatorlar əsasən iki ifadəni müqayisə edir və gözlənildiyi kimi müqayisə doğrudursa <code class="one-line">TRUE</code>, yanlışdırsa <code class="one-line">FALSE</code> nəticəsini qaytarır. Aşağıdakı nümunədə əsasən <code class="one-line">if</code> şərt blokunda istifadə olunan 3 məntiqi operatora–<strong>AND</strong>, <strong>OR</strong> və <strong>NOT</strong> operatorlarına aid nümunə göstərilmişdir:

Məntiqi <strong>AND</strong>: 

    if (x > 0 && x < 5)     // her iki ifade 
                            // doğrudursa true
Məntiqi <strong>OR</strong>:

    if (x > 0 || x < 5)     // iksinden her-hansısa
                            // biri doğrudursa true
Məntiqi <strong>NOT</strong>:

    if (!x > 0)             // eger ifade yanlışdırsa true
                            // çıxış kimi verir

Bu operatorlar uyğun olaraq <strong>VƏ</strong>, <strong>VƏ YAXUD</strong>, <strong>YOX</strong> kimi tərcümə olunur. İndi isə bu operatorlara daha yaxından baxaq:

<strong>VƏ</strong> operatoru:

    ifade1 && ifade2 

Əvvəlcədən də qeyd etdiyimiz kimi bu müqayisədən alınan nəticə ya <code class="one-line">TRUE</code> ya da <code class="one-line">FALSE</code> olur. Və alınan nəticəyə uyğun proqramda başqa əmrlər yazıb onları icra etmək mümkündür.

Yuxarıdakı kod sətri yalnız və yalnız hər iki ifadə doğru olduqda <code class="one-line">TRUE</code> qaytarır. Əgər iki ifadədən hər hansısa biri ödəməzsə onda <code class="one-line">FALSE</code> nəticə kimi qaytarılacaq. 

<strong>VƏ YAXUD</strong> operatoru:

    ifade1 || ifade2

Bu operatordan istifadə etdikdə, əgər iki ifadədən hər hansısa biri və yaxud hər ikisi doğru olarsa, onda nəticə kimi <code class="one-line">TRUE</code> alınır. Yox əgər hər iki ifadə şərti ödəməyib yanlış olarsa nəticə kimi <code class="one-line">FALSE</code> alınır. 

<strong>YOX</strong> operatoru:

    !ifade1

Hərfi tərcüməsi çox da anlaşıqlı olmasa da, bu operatorun əsas məqsədi, müqayisə əməliyyatı aparılan ifadədən alınan cavabın əksi alınır. Məs. bir ifadədən <code class="one-line">TRUE</code> alınırsa <strong>NOT</strong> operatorundan <code class="one-line">FALSE</code>, ifadədən <code class="one-line">FALSE</code> alınırsa operator vasitəsilə <code class="one-line">TRUE</code> alınır. 

Aşağıda buna aid bir cədvəl göstərilmişdir, və bu cədvəldən istifadə edib məntiqi operatorları asanlıqla öyrənmək olar:

|   A   |   B   | A(AND)B | A(OR)B | NOT A | NOT B |
|:-----:|:-----:|:-------:|:------:|:-----:|:-----:|
|  TRUE |  TRUE |   TRUE  |  TRUE  | FALSE | FALSE |
|  TRUE | FALSE |  FALSE  |  TRUE  | FALSE |  TRUE |
| FALSE |  TRUE |  FALSE  |  TRUE  |  TRUE | FALSE |
| FALSE | FALSE |  FALSE  |  FALSE |  TRUE |  TRUE |

***

`

const OperatorsEN = `
#Arithmetic
Arithmetic operators include addition, subtraction, multiplication, and division. They return the sum, difference, product, or quotient (respectively) of two operands. 

    y = y + 3;
    x = x - 7;
    i = j * 6;
    r = r / 5;

The operation is conducted using the data type of the operands, so, for example, 7/2 results in 3 instead of 3.5 since 7 and 2 are ints and are incapable of using decimal points. This also means that the operation can overflow if the result is larger than what can be stored in the data type.

If the operands are of different types, the larger type is used for the calculation. For example, if one of the numbers (operands) are of the type <code class="one-line">float</code> and the other of type <code class="one-line">integer</code>, floating point math will be used for the calculation.

<p class="note">Note: Use the cast operator to convert one variable type to another on the fly. For example, <code class="one-line">a = (int)3.14</code> will set a equal to 3.</p>

#Compound assignments
Compound assignments combine an arithmetic operation with a variable assignment. These are commonly found in for loops as described later. The most common compound assignments include: 

    x++     //x = x + 1
    x--     //x = x - 1
    x += y  //x = x + y
    x -= y  //x = x - y
    x *= y  //x = x * y
    x /= y  //x = x / y

#Comparison operators
Comparisons of one variable or constant against another are often used in if statements to test if a specified condition is true. In the example found on the following pages, ?? is used to indicate any of the following conditions: 

    x == y  //x is equal to y
    x != y  //x is not equal to y
    x <  y  //x is less than y
    x >  y  //x is greater than y
    x <= y  //x is less than or equal to y
    x >= y  //x is greater than or equal to y

#Logical operators
Logical operators are usually a way to compare two expressions and return a <code class="one-line">TRUE</code> or <code class="one-line">FALSE</code> depending on the operator. There are three logical operators, <strong>AND</strong>, <strong>OR</strong> and <strong>NOT</strong>, that are often used in if statements: 

Logical <strong>AND</strong>: 

    if (x > 0 && x < 5)     //true only if both
                            //expressions are true
Logical <strong>OR</strong>:

    if (x > 0 || x < 5)     //true if either
                            //expression is true
Logical <strong>NOT</strong>:

    if (!x > 0)             //true only if
                            //expression is false


There is a logical truth table listed below, which can be used later: 


|   A   |   B   | A(AND)B | A(OR)B | NOT A | NOT B |
|:-----:|:-----:|:-------:|:------:|:-----:|:-----:|
|  TRUE |  TRUE |   TRUE  |  TRUE  | FALSE | FALSE |
|  TRUE | FALSE |  FALSE  |  TRUE  | FALSE |  TRUE |
| FALSE |  TRUE |  FALSE  |  TRUE  |  TRUE | FALSE |
| FALSE | FALSE |  FALSE  |  FALSE |  TRUE |  TRUE |

***

`

export default String(Operators)
export { OperatorsEN }