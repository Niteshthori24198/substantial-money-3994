
const QR_BASE_URL = `http://localhost:3000/qrcode`;




// QR Option tabs 

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}




// Select Design Images

const designImagesHTML = `<div class="main-container">
                            <h2>Select your favourite Design</h2>
                            <div class="radio-buttons">
                                <label class="custom-radio">
                                    <input type="radio" name="design" value="blue" checked />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <img src="../images/qr-design/blue-1.png" alt="">

                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="design" value="black" />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <img src="../images/qr-design/black-2.png" alt="">
                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="design" value="pink" />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <img src="../images/qr-design/pink-3.png" alt="">
                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="design" value="brown" />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <img src="../images/qr-design/brown-4.png" alt="">
                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="design" value="red" />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <img src="../images/qr-design/red-5.png" alt="">
                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="design" value="crimson" />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <img src="../images/qr-design/chrimston-6.png" alt="">
                                    </span>
                                </label>
                            </div>
                            </div>`;








const qr_select_designEl = document.querySelectorAll('.qr_select_design');

for (let el of qr_select_designEl) {

    el.innerHTML = designImagesHTML;

}





// ********************************

let QrColorDesign = 'black';

// ********************************





const design = document.getElementsByName('design');

for (d of design) {

    d.addEventListener("change", (event) => {

        QrColorDesign = event.target.value;

        console.log(event.target.value);

    })
}




// *************************************************************

//    QR=Image

const QR_Code_img_text = document.getElementById('QR_Code_img_text');

const QR_Code_img_link = document.getElementById('QR_Code_img_link');

const QR_Code_img_phone = document.getElementById('QR_Code_img_phone');

const QR_Code_img_upi = document.getElementById('QR_Code_img_upi');

const QR_Code_img_wa = document.getElementById('QR_Code_img_wa');

// **************************************************************
//    Text QR Code Generator


const text_qr_form = document.getElementById('text_qr_form');

text_qr_form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const msg = text_qr_form['text-message-qr'].value.trim()
    
    // console.log(msg);

    if( !msg ){
        alert(`Please write a valid infomation ! `);
        return
    }


    if( !QrColorDesign ) QrColorDesign = "black"


    QR_Code_img_text.src = `https://cdn.dribbble.com/users/964000/screenshots/3675038/switcher_qr_barcode_alinashi_shot.gif`;



    const payload = {
        text : msg,
        color : QrColorDesign
    }


    const res = await fetch(`${QR_BASE_URL}/text`, {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(payload)
    }).then(res => res.json()).catch(err=>{
        console.log(err);
    })


    // console.log(res);

    setTimeout(()=>{

        QR_Code_img_text.src = res.qrcode;

    },5000);

    
    // console.log(QrColorDesign);


})


//    Link QR Code Generator


const link_qr_form = document.getElementById('link_qr_form');

link_qr_form.addEventListener("submit", async (event) => {

    event.preventDefault();

    // console.log('clicked');

    const link = link_qr_form['link-url-qrl'].value.trim()
    
    // console.log(link);

    if( !link ){
        alert(`Please write a valid infomation ! `);
        return
    }


    if( !QrColorDesign ) QrColorDesign = "black"


    QR_Code_img_link.src = `https://cdn.dribbble.com/users/964000/screenshots/3675038/switcher_qr_barcode_alinashi_shot.gif`;



    const payload = {
        URL : link,
        color : QrColorDesign
    }


    const res = await fetch(`${QR_BASE_URL}/link`, {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(payload)
    }).then(res => res.json()).catch(err=>{
        console.log(err);
    })


    // console.log(res);

    setTimeout(()=>{

        QR_Code_img_link.src = res.qrcode;

    },5000);

    
    // console.log(QrColorDesign);


})


// Phone QR Generator



const phone_qr_form = document.getElementById('phone_qr_form');

phone_qr_form.addEventListener("submit", async (event) => {

    event.preventDefault();

    // console.log('clicked');

    const countrycode = phone_qr_form['select_country_code_phone'].value.trim()

    const phoneNumber = phone_qr_form['phone-number-qrl'].value.trim()
    
    // console.log(link);

    if( !countrycode || !phoneNumber ){
        alert(`Please write a valid infomation ! `);
        return
    }


    if( !QrColorDesign ) QrColorDesign = "black"


    QR_Code_img_phone.src = `https://cdn.dribbble.com/users/964000/screenshots/3675038/switcher_qr_barcode_alinashi_shot.gif`;



    const payload = {
        phone : `${countrycode}${phoneNumber}`,
        color : QrColorDesign
    }

    console.log(payload)

    const res = await fetch(`${QR_BASE_URL}/phone`, {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(payload)
    }).then(res => res.json()).catch(err=>{
        console.log(err);
    })


    // console.log(res);

    setTimeout(()=>{

        QR_Code_img_phone.src = res.qrcode;

    },5000);

    
    // console.log(QrColorDesign);


})


// QR for Whatsapp


const whatsapp_qr_form = document.getElementById('whatsapp_qr_form');

whatsapp_qr_form.addEventListener("submit", async (event) => {

    event.preventDefault();

    // console.log('clicked');

    const countrycode = whatsapp_qr_form['select_country_code_wa'].value.trim()

    const phoneNumber = whatsapp_qr_form['wa-number-qrl'].value.trim()

    const Message = whatsapp_qr_form['wa-text-message-qr'].value.trim()
    
    // console.log(link);

    if( !countrycode || !phoneNumber){
        alert(`Please write a valid infomation ! `);
        return
    }


    if( !QrColorDesign ) QrColorDesign = "black"


    QR_Code_img_wa.src = `https://cdn.dribbble.com/users/964000/screenshots/3675038/switcher_qr_barcode_alinashi_shot.gif`;



    const payload = {
        phone : `${countrycode}${phoneNumber}`,
        text : Message,
        color : QrColorDesign
    }

    console.log(payload)

    const res = await fetch(`${QR_BASE_URL}/whatsapp`, {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(payload)
    }).then(res => res.json()).catch(err=>{
        console.log(err);
    })


    // console.log(res);

    setTimeout(()=>{

        QR_Code_img_wa.src = res.qrcode;

    },5000);

    
    // console.log(QrColorDesign);


})


// QR generation for UPI

const upi_qr_form = document.getElementById('upi_qr_form')

upi_qr_form.addEventListener("submit", async (event) => {

    event.preventDefault();

    // console.log('clicked');

    const name = upi_qr_form['upi-id-name'].value.trim()

    const upi = upi_qr_form['upi-id-qrl'].value.trim()

    const amount = upi_qr_form['upi-id-amount-qrl'].value.trim()
    
    
   

    if( !name || !upi){
        alert(`Please write a valid infomation ! `);
        return
    }


    if( !QrColorDesign ) QrColorDesign = "black"


    QR_Code_img_upi.src = `https://cdn.dribbble.com/users/964000/screenshots/3675038/switcher_qr_barcode_alinashi_shot.gif`;



    const payload = {
        name : name,
        upi : upi,
        amount : amount,
        color : QrColorDesign
    }

    console.log(payload)

    const res = await fetch(`${QR_BASE_URL}/upi`, {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(payload)
    }).then(res => res.json()).catch(err=>{
        console.log(err);
    })


    // console.log(res);

    setTimeout(()=>{

        QR_Code_img_upi.src = res.qrcode;

    },5000);

    
    // console.log(QrColorDesign);


})