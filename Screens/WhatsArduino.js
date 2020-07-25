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

export default String(WhatsArduino)