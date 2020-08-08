const WhatsArduino =
    `
#Arduino nədir?

<em>Arduino</em>, daxilində ATmega çipi olan mikrokontrollerdir və tekstolit üzərində çap olunmuşdur. Belə sxemlər <strong>PCB</strong> yəni, <b>P</b>rinted <b>C</b>ircuit <b>B</b>oard adlanır. 
Bu sxemdə həmçinin mikrokontrollerin işləməsi və imkanlarının genişləndirilməsi üçün lazım olan çoxlu qabaqcadan qurlaşdırılmış elektrik komponentləri var. 

Mikrokontrollerlər kiçik kompüterlərdir və onlar elektrik avadanlıqlarını proqramlaşdırmaq və idarə etmək üçün mükəmməl cihazlardır.
Belə cihazlara misal olaraq məşhur <strong>PIC</strong> mikrokontrollerini göstərə bilərik.

Bizim haqqında danışacağımız mikrokontrollerə hər hansısa funksiyanı yerinə yetirməsi üçün, Arduino proqramlaşdırma mühitində kod yazmaq lazım gəlir.
Misal olaraq, bir neçə sətir kod yazmaqla, siz <b>LED</b>-i (<em>işıq saçan diod</em>) yandırıb söndürə bilərsiniz. Əgər dövrəyə açar (düymə) qoşub bir neçə sətir də əlavə etsəniz, mikrokontrollerə LED-i yalnızca düymə sıxılanda  yandırmasını əmr edə bilərsiniz. Və yaxud LED-i yalnızca düyməni sıxıb saxlamaqla yandıra bilərsiniz. Beləliklə siz, mikrokontrollersiz çətin başa gələn bir sxemi daha asanlıqla və daha tez yaratmaq imkanı qazanırsınız. 

Arduino adi kompüterə çox oxşayır, beləki, onunla bir çox funksiya yerinə yetirmək olar. Lakin Arduino təkbaşına elə də funksional deyil, ondan istifadə etmək üçün bir neçə giriş və çıxış aparatlarına ehtiyac duyulur. Bu aparatlar kompüterə ətraf barədə məlumat verir və ətrafa təsir etməsinə imkan yaradır.

İrəli getməzdən əvvəl, Arduino tarixi haqqında bilmək sizə kömək ola bilər.

#Arduino haradan gəldi?

Arduino İtaliya İnteraktiv Dizayn İnstitutunda yaradılıb. 
Bu institut insanların rəqəmsal sistem və mühitlərlə əlaqəsini öyrənən bir məktəbdir.

2001-ci ildə, <em>Casey Reas</em> və  <em>Benjamin Fry</em> tərəfindən <strong><em>Proccesing</em></strong> adlı layihəyə start verilib.
Bu layihənin məqsədi proqramçı olmayanları tez və asan şəkildə proqram yazmağa təşviq etmək idi.
Layihə, istifadəçiyə öz fikirlərini yoxlayıb qısa zaman içərisində onlar üzərində təcrübə aparmaq üçün
rəqəmsal qaralama (<em>sketchbook</em>) kitabını təqdim edirdi. Bu layihə, təcrübələri fiziki dünyada da aparmaq üçün yeni fikirlərin yaranmasına təkan yaratdı.
2003-cü ildə <em>Hernando Barragán</em> Processing-lə eyni işləmə prinsipinə malik olan <strong><em>Wiring</em></strong> adlı mikrokontroller üzərində işləməyə başladı.  
Bu lövhə Arduino-nun yaranmasına gedən yolda böyük rol oynadı.

Processing layihəsiylə ortaq olaraq, Wiring layihəsi də rəssam, dizayner və başqa yaradıcı insanları cəlb etməyə yönəlmişdi.
Lakin, Processing layihəsindən fərqli olaraq Wiring insanları proqramlaşdırmadan çox elektronikaya cəlb edirdi.
Wiring lövhəsi bəzi digər mikrokontrollerdən (PIC və s.) ucuz olmasına baxmayaraq şagirdlər üçün yüksək məbləğli yatırım idi.

2005-ci ildə daha sərfəli olan və həmin institut şagirdləri tərəfindən asan istifadə olunması düşünülən cihaz kimi, <strong><em>Arduino</em></strong> layihəsinə start verildi.
Deyilənə görə yaradıcıları bu layihəni İtaliya kralı olan <em>Arduin</em>-in şərəfinə adlandırıblar.
Bəzi fikirlərə görə bu ad institut yanında yerləşən pivəxananın adı ilə bağlıdır.

Arduino layihəsində həm Wiring həm də Processing layihələrindən alınmış təcrübələrdən çox istifadə edilib.
Misal olaraq, Processing layihəsindəkinə oxşar qrafikal istifadəçi interfeysi <b>(GUI)</b> Arduinoda istifadə olunur.
Həmin interfeys Processing layihəsindən alınsa da, Arduino üçün xüsusi bir formaya salınıb.

Həmçinin Arduino özündə, kodlaşdırılan layihələri adlandırarkən Processing layihəsinin yanaşmasından istifadə edib, onları skeç (<em>sketch</em>) adlandırır. Bu proqramda sizə bir çox skeçlər barədə məlumat veriləcək və siz onları yoxluya biləcəksiniz.

Arduino lövhəsi Wiring və əvvəlki mikrokontrollerdən fərqli olaraq daha 'mərhəmətli' və möhkəm idi.
Şagirdlər və hətta peşəkarlar, Wiring və digər mikrokontrollerləri asanlıqla xarab edə bilirdilər, bunun səbəbi naqilləri yanlış birləşdirmək idi.
Bu problem təkcə mailiyyə deyil eləcə də layihələrdə gecikmə problemlərini yaradırdı.

Arduino lövhəsində olan mikrokontroller çipini də dəyişmə imkanı var ki, əgər yararsız hala düşərsə tam lövhə yerinə sadəcə çipi əvəzləyə bilərsiniz.
Başqa vacib fərqlərdən biri də Arduino lövhəsinin digərlərindən daha ucuz və sərfəli olmasıdır ki, 2006-cı ildə <strong><em>Basic Stamp</em></strong> lövhəsi Arduino lövhəsindən 2 dəfə baha satılırdı.

***
`;

const WhatsArduinoEN =
    `
#What is Arduino?

<em>Arduino</em> is a microcontroller with an ATmega chip inside and printed on <strong>PCB</strong>(<b>P</b>rinted <b>C</b>ircuit <b>B</b>oard). 
The circuit also has many pre-installed electrical components needed to operate and expand the capabilities of the microcontroller.

Microcontrollers are small computers and they are perfect devices for programming and controlling electrical equipment.
Examples of such devices are the popular <strong>PIC</strong> microcontrollers.

In order for the microcontroller to perform any function, it needs to be written code in the Arduino programming environment.
For example, by typing a few lines of code, you can turn the <b>LED</b> (<em>light emitting diode</em>) on and off. If you add a key to the circuit and add a few lines, you can command the microcontroller to turn on the LED only when the button is pressed. Or you can turn on the LED just by pressing and holding the button. This way, you can easily and quickly create a circuit that is difficult to complete without microcontrollers.

The Arduino is very similar to an ordinary computer, so it can perform many functions. However, the Arduino is not very functional on its own, and requires several input and output devices to use it. These devices provide the computer with information about the environment and allow it to influence the environment.

Before you go ahead, knowing the history of the Arduino can help you.

#Where did Arduino come from?

Arduino was created at the Italian Institute of Interactive Design.
This institute is a school that studies the relationship of people to digital systems and environments.

In 2001, <em>Casey Reas</em> and <em>Benjamin Fry</em> launched a project called <strong><em>Proccesing</em></strong>.
The aim of this project was to encourage non-programmers to write programs quickly and easily.
The project allows the user to test their ideas and experiment on digital sketchbooks.  This project gave rise to new ideas for conducting experiments in the physical world.
In 2003, <em>Hernando Barragán</em> began working on a microcontroller called <strong><em>Wiring</em></strong>, which has the same principle of operation as Processing.
This board played a major role in the creation of the Arduino.

In partnership with the Processing project, the Wiring project also aimed to attract artists, designers and other creative people.
However, unlike the Processing project, Wiring involved more electronics than programming.
Although the wiring board was cheaper than some other microcontrollers (PIC, etc.), it was a high-cost investment for students.

In 2005, the <strong><em>Arduino</em></strong> project was launched as a more affordable and easy-to-use device for students at the institute.
The creators are said to have named the project in honor of King Arduin of Italy.
According to some, this name is associated with the name of the brewery near the institute.


The Arduino project uses a lot of experience from both Wiring and Processing projects.
For example, a graphical user interface <b>(GUI)</b> similar to that in the Processing project is used in Arduino.
Although the interface is from the Processing project, it has been customized for the Arduino.

Arduino also uses the Processing project's approach when naming coded projects, calling them <em>sketch</em>es. In this program you will be informed about many sketches and you will be able to check them.

The Arduino board was more 'compassionate' and powerful than the Wiring and previous microcontrollers.
Students and even professionals could easily damage Wiring and other microcontrollers due to incorrect wiring.
This problem was not only financial, but also caused delays in projects.

It is also possible to replace the microcontroller chip on the Arduino board, so that if it becomes unusable, you can simply replace the chip instead of the full board.
Another important difference is that Arduino boards are cheaper and more profitable than others, and in 2006 the <strong><em>Basic Stamp</em></strong> board was sold twice as expensive as the Arduino board.


***
`;

export default String(WhatsArduino)
export { WhatsArduinoEN }