const Variables = `
#Dəyişənlər
Dəyişən, proqramda sonradan istifadə edilmək üçün, ədədi qiymətlərin adlandlrma üsuludur. Adından da göründüyü kimi, dəyişənin qiyməti davamlı olaraq dəyişə və yaxud sabit bir qiymət alıb heç dəyişmiyə bilər. Dəyişən ilk öncə təyin olunmalı və istəyə uyğun olaraq yadda saxlaması üçün ona bir qiymət verilməlidir. Aşağıdakı kod sxemində <code class="one-line">inputVariable</code> adlı dəyişən təyin olunur və 2-ci analoq pinindən alınan qiyməti alır. 

    int inputVariable = 0;
    inputVariable = analogRead(2);


"inputvariable" dəyişənin özüdür. Birinci sətrdə həmin bu dəyişən <b>integer</b>, qısaca <code class="one-line">int</code> növündə təyin olunurş İkinci sətirdə isə, bu dəyişənə 2-ci analoq pindən alınan qiymət verilir. Bu gələcəkdə həmin pindən istifadəni əlçatan edir. 

Dəyişən təyin olunduqdan və yaxud qiyməti dəyişdikdən sonra onu müəyyən şərtlərə uyğun yoxlaya bilərsiniz. Misal olaraq aşağıdakı kod blokunda dəyişənin qiymətini müəyyən bir şərtə uyğun yoxlanması göstərilib. Əgər dəyişənin şərti ödəyirsə, şərt bloku daxilindəki əmr icra olunur və son sətirdəki <code class="one-line">delay(inputVariable</code>) funksiyası ilə proqrama dəyişənin aldığı  qiymət qədər pauza verir: 

    if (inputVariable < 100) //şert ödeyir
    {
        inputVariable = 100; //yeni qiymet verilir
    }
    delay(inputVariable);    //qiymet qeder 
                             //pauza verilir

<p class="note">Qeyd: Dəyişənlərə elə ad verilməlidir ki, kod oxunarkən daha rahat və aydın olsun. Adlandırma zamanı xüsusi və dəyişənin məğzinə fikir vermək daha məqsədə uyğundur. Əgər daha ümumi adlardan istifadə edilsə, proqram böyüdükcə anlaşılmazlıqlar yarana və ən vacib ehtiyat olan zamanın itirilməsinə gətirib çıxara bilər. Bir də dəyişənlər üçün Arduino dili tərəfindən rezerv olunmuş adlardan başqa bütün adları istifadə etmək olar.</p> 

#Dəyişənlərin təyin olunması 
Bütün dəyişənlər istifadə olunmazdan əvvəl təyin olunmalıdır. Təyin etmək deyəndə, dəyişənin növünü (məs. <code class="one-line">int</code>, <code class="one-line">float</code>, <code class="one-line">long</code>, və s.), adını və istəyə uyğun olaraq–dəyişənə ilkin qiymət vermədən də onu təyin etmək mümkündür, ilkin qiymətini qeyd etmək nəzərdə tutulur. Proqram daxilində, dəyişən təyin olunduqdan sonra onun qiyməti müxtəlif əməliyyatlarla dəyişdirilə bilər. 

Aşağıdakı nümunədə, ilkin qiyməti 0 olan və <code class="one-line">int</code> növünə aid <code class="one-line">inputVariable</code> dəyişəni təyin olunur. Buna sadə təyinetmə deyilir. 

    int inputVariable = 0;
 
#Dəyişənin istifadə zonası
Dəyişən, <code class="one-line">setup()</code> funksiyasından əvvəldə, yəni proqramın başlanğıcında, funksiya daxilində və bəzən də for dövründə təyin oluna bilər. Təyin olunduğu yerə görə həmin dəyişəndən istifadə edə bilmə məsələsi meydana çıxır və buna dəyişənin istifadə zonası deyilir. 

Qlobal dəyişənlər zonasına bütün proqram daxilində istifadə edilə və görülə bilən dəyişənlər aiddir, biraz öncə də qeyd etdiyimiz kimi, <code class="one-line">setup()</code> funksiyasından əvvəldə yazılan dəyişənləri bura aid edə bilərik. 

Lokal–yerli zonasına isə hər hansısa funksiya daxilində və yaxud da bir dövr daxilində təyin olunmuş dəyişənlər aid edilir. Həmin bu dəyişənlər yalnız təyin olunduqları funksiya, dövr və s. daxilində istifadə oluna və görülə bilər, bu zonadan kənarda təyin olunmuş dəyişənlərdən istifadə etmək mümkün deyil.

Buna görə də proqram daxilində eyni adlı dəyişənlərdən müxtəlif yerlərdə istifadə etmək imkanı yaranır, lakin bu qarışıqlıq yarada bilən bir məsələ olduğuna görə tövsiyyə olunmur. 

Aşağıdakı nümunədə daha aydın izah olunub:

    int value;                //Qlobal deyişen
    void setup()
    {
    // no setup needed
    }

    void loop()
    {
        for (int i = 0; i<20;)// lokal deyişen
        {
            i++;              // dövrde istifade
                              // oluna biler  
        }
        float f;              // loop funksiyasında
                              // istifade oluna biler
    }

`

const VariablesEN = `
#Variables
A variable is a way of naming and storing a numerical value for later use by the program. As their name suggests, variables are numbers that can be continually changed as opposed to constant whose value never changes. A variable needs to be declared and optionally assigned to the value needing to be stored. The following code declares a variable called <code class="one-line">inputVariable</code> and then assigns it the value obtained on analog input pin 2: 

    int inputVariable = 0;
    inputVariable = analogRead(2);

"inputvariable" is the variable itself. The first line declares that it will contain an <code class="one-line">int</code>, short <b>integer</b>. The second line sets the variable to the value at analog pin 2. This makes the value of pin 2 accessible elsewhere in the code. 

Once a variable has been assigned, or re-assigned, you can test its value to see if it meets certain conditions, or you can use its value directly. As an example to illustrate three useful operations with variables, the following code tests whether the <code class="one-line">inputVariable</code> is less than 100, if true it assigns the value 100 to <code class="one-line">inputVariable</code>, and then sets a delay based on <code class="one-line">inputVariable</code> which is now a minimum of 100: 

    if (inputVariable < 100) //tests variable 
                             //if less than 100
    {
        inputVariable = 100; //if true assigns
                             // value of 100
    }
    delay(inputVariable);    //uses variable as delay

<p class="note">Note: Variables should be given descriptive names, to make the code more readable. Variable names like tiltSensor or pushButton help the programmer and anyone else reading the code to understand what the variable represents.</p> 

#Declaring variables
All variables have to be declared before they can be used. Declaring a variable means defining its value type, as <code class="one-line">int</code>, <code class="one-line">float</code>, <code class="one-line">long</code>, etc., setting a specified name, and optionally assigning an initial value. This only needs to be done once in a program but the value can be changed at any time using arithmetic and various assignments. 

The following example declares that <code class="one-line">int</code> or integer type, and that its initial value equals zero. This is called a simple assignment. 

    int inputVariable = 0;
 
A variable can be decared in a number of locations throughout the program and where this definition takes place determines what parts of the program can use the variable. 

#Variable scope
A variable can be declared at the beginning of the program before <code class="one-line">setup()</code>, locally inside of functions, and sometimes within a statement block such as for loops. Where the variabe is declared determines the variable scope, or the ability of certain parts of a program to make use of the variable. 

A global variable is one that can be seen and used by every function and statement in a program. This variable is declared at the beginning of the program, before the <code class="one-line">setup()</code> function. 
 
A local variable is one that is defined inside a function or as part of a for loop. I is only visible and can only be used inside the function in which it was declared. It is therefore possible to have two or more variables of the same name in different parts of the same program that contain different values. Ensuring that only one function has access to its variables simplifies the program and reduces the potential for programming errors. 

The following example shows how to declare a few different types of variables and demonstrates each variable's visibility: 

    int value;                //A global variable
    void setup()
    {
    // no setup needed
    }

    void loop()
    {
        for (int i = 0; i<20;) //local variable
        {
            i++;              //only can be
                              //used inside 
                              //for loop  
        }
        float f;              //only can be
                              //used inside 
                              //void loop
    }

`


export default String(Variables)
export { VariablesEN }