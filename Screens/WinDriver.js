const WinDriver =
    `
#Lazımi drayverlərin Windows kompüterlərinə yüklənməsi

İstifadə elədiyiniz kompüterin əməliyyat sistemi Windows 7, Vista və yaxud XP-dirsə, lövhəni istifadə etmək üçün kompüterə lazımi proqram fayllarını və drayverləri endirib qurlaşdırmaq lazım gəlir.

Bunun üçün aşağıdakı addımları yerinə yetirməliyik:

1. Lövhəni kompüterinizə birləşdiyiniz anda Windows ƏS yeni avadanlığı təyin edəcək və drayver qurlaşdırılmasına başlayacaq. Bu proses yerinə yetirilməyəcək, çünki ƏS drayverləri özü tapa bilmir. Bu normal haldır. 
2. Start(Пуск) menyusundan Control Panel(Панель управления) bölməsinə klikləyin.
3. Burada, yuxarı-sol küncdə yerləşən System and Security(Система и безопасность) bölməsinə klikləyin.
4. System(Система) başlığı altında yerləşən Device Manager(Диспетчер устройств) bölməsinə klikləyin. Açılan pəncərədə, Ports(Порты) yazısı altında yenicə qoşulmuş Arduino-nu axtarın. Burada siz, Arduino UNO(COMxx) adlı port görməlisiniz. Əgər belə port yoxdursa, deməli ƏS lövhəni təyin edə bilməyib. Buna görə lövhəni kompüterdən ayırıb yenidən birləşdirmək lazımdır.
5. Arduino UNO(COMxx) portu üzərinə sağ klik edib, Update Driver(Обновить драйвер) yazısını seçin. Belə etdikdə yeni bir pəncərə açılır, bu pəncərədə sadəcə Next(Далее) düyməsini klikləmək lazımdır.
6. Yeni açılmış pəncərədə Browse(Обзор) düyməsini klikləyib, zip arxivindən çıxarılmış fayllar qovluğunun yerini müəyyənləşdirmək lazımdır.
7. Son olaraq, Arduino UNO üçün lazım olan "ArduinoUNO.inf" adlı drayver faylını tapıb seçmək lazımdır. 
 
Bu fayl Drivers qovluğunda yerləşir. Artıq bu nöqtəyə çatanda, Windows sizin üçün drayverləri qurlaşdıracaq. Əgər hər şey düzgün edilərsə, lövhəni rahat formada istifadə etmək olar.

`;

export default String(WinDriver)