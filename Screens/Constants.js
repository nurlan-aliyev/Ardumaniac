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

const ConstantsEN = `
#Constants
The Arduino language has a few predefined values, which are called constants. They are used to make the programs easier to read. Constants are classified in group.  

#true/false
These are Boolean constants that define logic levels. <code class="one-line">FALSE</code> is easily defined as <b>0</b>(zero) while <code class="one-line">TRUE</code> is often defined as 1, but can also be anything else except zero. So in a Boolean sense, -1, 2 and -200 are all also defined as <code class="one-line">TRUE</code>.  

    if (b == TRUE)      //if true 
    {
        doSomething;
    }

#high/low
These constants define pin levels as <code class="one-line">HIGH</code> or <code class="one-line">LOW</code> and are used when reading or writing to digital pins. <code class="one-line">HIGH</code> is defined as logic level 1, <strong>ON</strong>, or 5 volts while <code class="one-line">LOW</code> is logic level 0, <strong>OFF</strong>, or 0 volts. 

    digitalWrite(13, HIGH); 

#input/output 
Constants used with the <code class="one-line">pinMode()</code> function to define the mode of a digital pin as either <code class="one-line">INPUT</code> or <code class="one-line">OUTPUT</code>. 

    pinMode(13, OUTPUT); 

***

`


export default String(Constants)
export { ConstantsEN }