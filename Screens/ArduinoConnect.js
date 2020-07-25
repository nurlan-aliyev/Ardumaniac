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

export default String(ArduinoConnect)