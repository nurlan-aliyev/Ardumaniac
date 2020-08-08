const ArduinoConnect =
    `
#Arduinonun qoşulması

Bu bölmə <strong><em>Arduino Uno</em></strong> və <strong><em>Mega</em></strong> lövhələri nəzərə alınmaqla yazılıb, amma digər Arduino lövhələrində də eyni məntiq mövcüddur. 

Arduino lövhəsini aldıqdan sonra ediləcək ilk iş, onu kompüterinizə qoşub yoxlamaqdır. Lövhəni kompüterə birləşdirmək üçün, kompüterin USB portu ilə A-B USB birləşdiricisindən istifadə etmək lazımdır.

Bu port vasitəsi ilə həm lövhəyə enerji verilir həm də mikrokontrollerə lazımi informasiya və proqramları yollamaq mümkün olur. Bu portdan proqramı yerinə yetirərkən <em>"Serial Monitor"</em> (iləridəki mövzularda haqqında danışılacaq) pəncərəsi ilə  monitorinq də keçirə bilərsiniz.

Bəzi kiçik Arduino lövhələrinin, məs. <strong><em>Mini</em></strong>, <strong><em>ProMini</em></strong> və ya <strong><em>Lilypad</em></strong> üzərində USB portu mövcud deyil. Onları kompüterə birləşdirmək üçün xüsusi birləşdiricilərə ehtiyac duyulur. Və çox vaxt distributer tərəfindən lövhə ilə birlikdə satılır.

İndi isə, ilkin olaraq Arduino lövhəsini kompüterə qoşub, həm lövhəni yoxlayıb həm də olanları müşahidə edə bilərik.

Hər şeydən əvvəl lövhənin keçirici olmayan bir səth üzərində qoyulduğundan əmin olmaq vacibdir. Çünki lövhənin altında yerləşən pin-lər (<em>Pin ingilis dilindən tərümədə "biz, iynə" deməkdir, lövhədəki keçiricilər bizə oxşadığı üçün belə adlandırılır</em>) açıq haldadır və əgər hər hansısa metal və yaxud keçirici bir səth üzərində qoyularsa qısa qapanma baş verə bilər.

Belə olduqda ən yaxşı halda mikrokontroller funksiyaları düzgün yerinə yetirməyə, ən pis halda isə mikrokontroller yanıb sıradan çıxa bilər.

Lövhəni kompüterə qoşduqda, <strong>"ON"</strong> (bəzi lövhələrdə <strong>PWR</strong>) yazısı ilə işarələnmiş LED, işıqlanmalı və davamlı olaraq işıq saçmalıdır.

Eyni vaxtda <strong>"L"</strong> işarəli LED-in müəyyən aralıqla yanıb söndüyünü görə bilərik. Bu mikrokontrollerə əvvəlcədən zavodda yazılmış proqramın nəticəsidir.

`;

const ArduinoConnectEN =
    `
#Connecting Arduino

This section is written with <strong><em>Arduino Uno</em></strong> and <strong><em>Mega</em></strong> boards in mind, but the same logic applies to other Arduino boards.

The first thing to do after purchasing an Arduino board is to connect it to your computer and test it. To connect the board to the computer, you need to use the A-B USB connector with the computer's USB port.

Through this port, both the board is powered and the necessary information and programs can be sent to the microcontroller. From this port, you can also monitor the program with the <em>"Serial Monitor"</em> (more on that later).

On some small Arduino boards e.g, <strong><em>Mini</em></strong>, <strong><em>ProMini</em></strong> or <strong><em>Lilypad</em></strong> there is no USB port available. Special connectors are needed to connect them to the computer. And often sold together with the board by the distributor.

Now, we can first connect the Arduino board to the computer, check the board and observe what is happening.

First of all, it is important to make sure that the board is placed on a non-conductive surface. Because the pins under the board are open, and if placed on any metal or conductive surface, short-circuit may occur.

In this case, at best, the microcontroller may not perform its functions properly, and at worst, the microcontroller may burn out.

When you connect the board to a computer, the LED marked <strong>"ON"</strong> (on some boards <strong>PWR</strong>) should light up and illuminate continuously.

At the same time, we can see that the LED with the <strong>"L"</strong> symbol flashes at certain intervals. This is the result of a pre-written program on the microcontroller.

`;

export default String(ArduinoConnect)
export { ArduinoConnectEN }