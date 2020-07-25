const ArduinoIDE =
    `
#Arduino IDE-nin kompüterə endirilməsi

Arduino layihələrini kodlamaq üçün xüsusi hazırlanmış olan <b>İ</b>nteqrasiya edilmiş <b>Y</b>aratma <b>M</b>ühiti(<b>IDE</b>) proqram təminatından istifadə edilir. Arduino IDE, yazdığınız kodu mikrokontrollerin anlaya biləcəyi dilə çevirib onun yaddaşına yükləyir.

Bu proqram təminatını qurlaşdırmaq üçün aşağıdakıları yerinə yetirmək lazımdır: 
1. Arduino IDE-ni rəsmi səhifəsindən endirmək lazımdır <u>https://arduino.cc</u>. Açıq-qaynaq olduğuna görə bu proqram təminatı pulsuzdur. Kompüterinizin ƏS-nə uyğun <code class="one-line">.exe</code> uzantılı faylı endirin.
2. Endirilən faylı açın və açılmış pəncərədə bütün qutulara quş qoymaq şərtilə <strong>"Next"</strong> düyməsini seçin. 
3. Növbəti pəncərədə yüklənmə qovluğu seçilməlidir, çox vaxt bu avtomatik olaraq <em>"C:"</em> diski daxilindəki <em>"Proqram Files"</em> qovluğu olur, belə olduqda heç bir dəyişiklik etmədən <strong>"Install"</strong> düyməsini seçin. 
4. Son olaraq proqramın qurlaşdırılmasını gözləyin və <strong>"Close"</strong> düyməsini sıxın. 

Qurlaşdırma bitdikdən sonra, Arduino IDE proqram təminatını açsanız, sizdən lazımi drayverlərin yüklənməsi üçün icazə istəniləcək, icazələri təsdiqləməyi unutmayın!
`

export default String(ArduinoIDE)