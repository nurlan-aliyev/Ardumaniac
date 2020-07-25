const Constants = `
#Sabitlər
Arduino dilində qabaqcadan hazırlanmış qiymətlər vardır ki, onlara sabit deyilir. Onlar proqramların oxunmasını daha da rahatlaşdırır. Sabitlər qruplara bölünür. 

#true/false
Bu iki sabit haqda əvvəlki mövzularda da söhbət açmışıq. <code class="one-line">FALSE</code> Arduino dilində əsasən <b>0</b> (sıfır) kimi, <code class="one-line">TRUE</code> isə <b>1</b> kimi bilinir. Bu iki vahidə analoq olaraq, 0–<strong>YOXDUR</strong>, 1–<strong>VARDIR</strong> variantı da var. 

    if (b == TRUE)      //eger şert ödense 
    {
        komandalar;     //emrleri yerine yetirir
    }

#high/low
Bu iki sabit lövhənin pinlərindən istifadə olunan zaman lazım olur. <code class="one-line">HIGH</code> məntiqi sabit kimi 1, <strong>ON</strong> (yanılı) və yaxud 5 volt kimi qəbul olunur, <code class="one-line">LOW</code> isə məntiqi sabit kimi 0, <strong>OFF</strong> (sönülü) və yaxud 0 volt kimi qəbul olunur. 

    digitalWrite(13, HIGH); //13cü pine 
                            //5 volt verilir
                            //ON halına getirilir
                            //Mentiqi 1 
                            //qiymetini alır

#input/output (giriş/çıxış)
Bu sabitlər <code class="one-line">pinMode</code> vasitəsi ilə lövhədə mövcud olan pinlərini <code class="one-line">INPUT</code> və ya <code class="one-line">OUTPUT</code> (<strong>GİRİŞ</strong> və ya <strong>ÇIXIŞ</strong>) kimi təyin ediləndə istifadə edilir. 

    pinMode(13, OUTPUT); //13cü pini çıxış 
                         //pini kimi teyin edir

***

`

export default String(Constants)