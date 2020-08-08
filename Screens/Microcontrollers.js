const Microcontrollers =
    `
#Mikrokontrollerlər haqqında

Arduino-nun ürəyində mikrokontroller yatır, hansı ki, insanın edə bilməyəcəyi sürətdə və dəqiqlikdə məntiqi işlər aparma qabiliyyətinə malikdir.

Siz hətta onunla real dünyayla yaxından əlaqədə olan sistemləri yarada bilərsiniz. Misal olaraq, ağıllı ev, istixana və hətta bağça sistemləri yaratmaq mümkündür ki, hansı ki, insan əməyi və təsirini minimal səviyyəyə endirib işlərin demək olar ki, hamısını vaxtında və dəqiqliklə yerinə yetirə bilirlər.

Mikrokontrollerlər kiçik olduqları üçün həm çox yer tutmur həm də əməliyyat üçün çox güc tələb etmirlər.
Bəs yaxşı, nə qədər kiçik? Fiziki olaraq Arduino ilə gələn mikrokontrollerlər ələ yerləşən formada olur.

Mikrokontroller göy PCB-ə yerlərşirilmiş dördbucaqlı formasındadır. Lakin, bu o demək deyil ki, bütün mikrokontrollerlər bu ölçüdə olur, onlar funksiya və qiymətlərinə görə bu böyüklükdən başlayaraq kiçicik-mikroskopik formalarda da ola bilir. 

Sizin göstərişlər verdiyiniz əsas prosessor nüvəsindən başqa olaraq, çipdə, proqram yerinə yetirilərkən  əmrləri yadda saxlamaq üçün əməli yaddaş (RAM-<b>R</b>andom <b>A</b>ccess <b>M</b>emory) da mövcüddur. Onda həmçinin giriş və çıxış qurğuları var, hansı ki, ətraf mühit və ya digər kompüterlərlə əlaqə yaratmaq mümkündür.

Mikrokontrollerlər 1970-ci illərin əvvəllərində, sənayedə  müxtəlif avtomatlaşdırma işlərini yerinə yetirmək üçün ixtira olunub.
Hal-hazırki Arduino lövhələrində <em>Atmel</em> şirkəti tərəfindən istehsal olunan, <b>AVR</b> çipləri ailəsinə daxil olan <b>ATmega328</b> mikroporsessorudur. Bu mikroprosessorlar ilk olaraq 1990-cı ilin əvvəllərində yaradılıb.

Mikrokontrollerlərin ən üstün cəhətlərindən biri onların telefon, komputer və digər cihazların mikroprosessorlarından ucuz olmasıdır. Buna səbəb onların qabiliyyətlərinin məhdud olmasıdır. 

Çünki, onlar ya hər hansısa bir şeyi idarə etmək və yaxud sensorlardan qəbul olunan siqnallara uyğun reaksiya vermək üçün dizayn olunublar. 

Ucuz olduqlarına görə onlardan bütün növ kiçik hesablama tapşırıqlarında istifadə edə bilərsiniz, məs. qaraj qapısını və s. qurğuları kodla avtomatlaşdıra bilərsiniz. 

Arduino lövhəsinə yerləşdirilmiş mikrokontroller çox ucuzdu, lövhənin daha qiymətli olmasına səbəb onun üzərinə yerləşdirilmiş digər vacib qurğulardır ki, onlar sizin işlərinizi asanlaşdırmağa kömək edir.

***
`;

const MicrocontrollersEN =
    `
#About Microcontrollers 

At the heart of the Arduino lies a microcontroller that has the ability to perform logical operations at speeds and accuracy that humans cannot.

You can even create systems that are in close contact with the real world. For example, it is possible to create smart home, greenhouse and even garden systems, which can minimize human labor and impact and perform almost all the work in a timely and accurate manner.

Microcontrollers are small and do not take up much space and do not require much power for operation.
Well, how small? Physically, the microcontrollers that come with the Arduino are in captured form.

The microcontroller is rectangular in shape, mounted on a blue PCB. However, this does not mean that all microcontrollers are of this size, they can be in small-microscopic forms, ranging in size and function.

In addition to the main processor core, which you specify, there is RAM (RAM-<b>R</b>andom <b>A</b>ccess <b>M</b>emory) on the chip to store commands during program execution. ) is also available. It also has input and output devices that can communicate with the environment or other computers.

Microcontrollers were invented in the early 1970s to perform a variety of automation tasks in the industry.
The current Arduino board includes an ATmega328 microprocessor from Atmel, a family of AVR chips. These microprocessors were first created in the early 1990s.

One of the advantages of microcontrollers is that they are cheaper than microprocessors for phones, computers and other devices. This is because of their limited abilities.

Because they are designed to either control something or react to signals received from sensors.

Because they are cheap, you can use them in all kinds of small computational tasks, e.g. garage door, etc. you can automate devices with code.

The microcontroller placed on the Arduino board is very cheap, and the reason why the board is more valuable is the other important devices placed on it, which help you to facilitate your work.

***
`;


export default String(Microcontrollers)
export { MicrocontrollersEN }