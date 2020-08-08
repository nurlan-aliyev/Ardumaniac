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

const ArduinoIDEEN =
    `
#Downloading Arduino IDE

In order to write code for Arduino boards there is <b>IDE</b> (<b>I</b>ntegrated <b>D</b>evelopment <b>E</b>nvorinment). The Arduino IDE translates the code you write into a language that the microcontroller can understand and loads it into its memory.

To install this software, you need to do the following:
1. Download the Arduino IDE from the official page <u>https://arduino.cc</u>. Because it is open source, this software is free. Download the file with the extension <code class = "one-line">.exe</code> corresponding to your computer's OS.
2. Open the downloaded file and select the "Next" button, and make sure to check all the boxes in the window that opens.
3. In the next window, the download folder should be selected, this is often the <em>"Program Files"</em> folder inside the <em>"C:"</em> drive, without making any changes select the <strong>"Install"</strong> button. 
4. Finally, wait for the program to install and press the <strong>"Close"</strong> button.

After the installation is complete, if you open the Arduino IDE software, you will be asked for permission to download the necessary drivers, do not forget to confirm the permissions!
`

export default String(ArduinoIDE)
export { ArduinoIDEEN }