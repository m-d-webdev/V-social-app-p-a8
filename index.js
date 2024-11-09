function downlistfrien() {
    let listfrien = document.querySelector('.listfriendsPAGE');
    listfrien.classList.toggle('acvtivelistfriendsPAGE')
}
/*
function showmenuprofile() {
 }*/
var closebtn = document.querySelector('.closebtn')
var meneuprofil = document.querySelector('.meneuprofil');
var button2 = document.querySelector('.button2');
button2.addEventListener('click', function () {
    meneuprofil.classList.toggle('acvtivemeneuprofil')

})
closebtn.addEventListener('click', function () {
    meneuprofil.classList.toggle('acvtivemeneuprofil')

})
function showhowmini() {
    let bl = document.querySelector('#bl').value;
    let ble = document.querySelector('#ble').value;
    let howmini = document.querySelector(".howmini");
    howmini.classList.toggle('activehowmini');
    document.getElementById("balance").innerHTML = bl + " " + ble;
    document.getElementById("balance").style.color = "black";

    if (ble == "" || bl == "") {
        document.getElementById("balance").style.color = "red";
        document.getElementById("balance").innerHTML = "Please enter correct information";

    }
}
var shippingpage = document.querySelector('.shippingpage');
var butto = document.querySelector('.button1');
var butto2 = document.querySelector('.closebtn2');
butto.addEventListener("click", function () {
    shippingpage.classList.toggle('activeshippingpage');
    console.log("clicked");
}
); butto2.addEventListener("click", function () {
    shippingpage.classList.toggle('activeshippingpage');
    console.log("clicked");
}
);
/*
function shippingpag() {
    let shippingpage = document.querySelector('.shippingpage');
    shippingpage.classList.toggle('activeshippingpage');
}*/
function ship() {
    let Shipping_completed = document.querySelector('.Shipping_completed');
    Shipping_completed.style.top = '0';
}
function ok() {
    let Shipping_completed = document.querySelector('.Shipping_completed');
    Shipping_completed.style.top = '-1500px';
    let shippingpage = document.querySelector('.shippingpage');
    shippingpage.classList.toggle('activeshippingpage');
}
function downdiv111() {
    let div_111 = document.querySelector('.div_111');
    div_111.classList.toggle('activediv_111');
}
function downprofileer() {
    let meneuprofil = document.querySelector('.meneuprofil');
    meneuprofil.classList.toggle('acvtivemeneuprofil')
    let pROFILEpage = document.querySelector(".PROFILEpage");
    pROFILEpage.classList.toggle("activePROFILEpage")
}
/*function activeelabel2() {
    let labell = document.querySelector(".labell2");
    labell.classList.toggle('activelabeL')
} function activeelabel3() {
    let labell = document.querySelector(".labell3");
    labell.classList.toggle('activelabeL')
}*/
function downaddnweaccount() {
    let meneuprofil = document.querySelector('.meneuprofil');
    meneuprofil.classList.toggle('acvtivemeneuprofil')
    let sWICHACCOUNT = document.querySelector('.SWICHACCOUNT');
    sWICHACCOUNT.classList.toggle('activeSWICHACCOUNT')

}
function downcntmesg() {
    let cNTmessag = document.querySelector(".CNTmessag");
    cNTmessag.classList.toggle('activeCNTmessag')
}
function aciveCNTnotification() {
    cNTnotification = document.querySelector(".CNTnotification")
    cNTnotification.classList.toggle('activeCNTnotification')
}

var scaninput200 = document.getElementById("scaninput2");
var scaninput100 = document.getElementById("scaninput1");
var scaninput300 = document.getElementById("scaninput3");
function downscan() {
    let meneuprofil = document.querySelector('.meneuprofil');
    meneuprofil.classList.toggle('acvtivemeneuprofil')
    let searchforfriend = document.querySelector('.searchforfriend');
    searchforfriend.classList.toggle('activesearchforfriend')

}

function btnyscab() {
    if (scaninput200.value !== '' || scaninput100.value !== '' || scaninput300.value !== '') {
        document.querySelector('.butn2').style.opacity = 2
    }
}
scaninput200.onkeydown = btnyscab
scaninput100.onkeydown = btnyscab
scaninput300.onkeydown = btnyscab

function upfirstname() {
    var pp = document.querySelector(".p1");
    pp.classList.toggle("activep")
} function upfirstname2() {
    var pp = document.querySelector(".p2");
    pp.classList.toggle("activep")
} function upfirstname3() {
    var pp = document.querySelector(".p3");
    pp.classList.toggle("activep")
} function upfirstname4() {
    var pp = document.querySelector(".p4");
    pp.classList.toggle("activep")
} function upfirstname5() {
    var pp = document.querySelector(".p5");
    pp.classList.toggle("activep")
} function upfirstname6() {
    var pp = document.querySelector(".p6");
    pp.classList.toggle("activep")
}
function upfirstname7() {
    var pp = document.querySelector(".p7");
    pp.classList.toggle("activep")
}
//var input1=document.querySelector('#input1');
function activesignin() {
    let signin = document.querySelector('.signin')
    signin.classList.toggle("activesignin");
    let meneuprofil = document.querySelector('.meneuprofil');
    meneuprofil.classList.toggle('acvtivemeneuprofil');

}
function downalerttc() {
    let meneuprofil = document.querySelector('.meneuprofil');
    meneuprofil.classList.toggle('acvtivemeneuprofil');
    let confogout = document.querySelector('.confogout')
    confogout.classList.toggle('activeconfogout')
}
function activeloadpage() {
    var demotext = document.querySelector('.demotext').value;
    var demotext2 = document.querySelector('.demotext2').value;
    var demotext3 = document.querySelector('.demotext3').value;
    let loadpage = document.querySelector('.loadpage')
    loadpage.classList.toggle('activeloadpage')
    let searchforfriend = document.querySelector('.searchforfriend');
    searchforfriend.classList.toggle('activesearchforfriend');
    document.getElementById("demo091").innerHTML = 'ID :' + " " + demotext;
    document.getElementById("demo092").innerHTML = 'Name :' + " " + demotext2;
    document.getElementById("demo093").innerHTML = 'Email :' + " " + demotext3;
}

function actchatpage() {
    let chatpage = document.querySelector(".chatpage");
    chatpage.classList.toggle("activechatpage");
    let cNTmessag = document.querySelector(".CNTmessag");
    cNTmessag.classList.toggle('activeCNTmessag')
}

var h6fb = document.querySelector('.h6fb')
var h6insta = document.querySelector('.h6insta')
var h6yt = document.querySelector('.h6yt')
var h6tw = document.querySelector('.h6tw')
var ifb = document.querySelector('.ifb')
var iinsta = document.querySelector('.iinsta')
var iyt = document.querySelector('.iyt')
var itw = document.querySelector('.itw')

function activeimg() {
    ifb.classList.toggle('activeifb')
    h6fb.classList.toggle('activefb')
    umg1 = document.querySelector('.umg1');
    umg1.classList.toggle('activeimg')
} function activeimg2() {
    iinsta.classList.toggle('activeiinsta')
    h6insta.classList.toggle('activeinsta')
    umg2 = document.querySelector('.umg2');
    umg2.classList.toggle('activeimg')
} function activeimg3() {
    iyt.classList.toggle('activeimgv')
    h6yt.classList.toggle('activeall')
    umg3 = document.querySelector('.umg3');
    umg3.classList.toggle('activeimg')
} function activeimg4() {
    itw.classList.toggle('activeimgv')
    h6tw.classList.toggle('activeall')
    umg4 = document.querySelector('.umg4');
    umg4.classList.toggle('activeimg')
}
function activecntsosialmedia() {
    let cntsosialmedia = document.querySelector('.cntsosialmedia');
    cntsosialmedia.classList.toggle('activecntsosialmedia')
}


function setincity() {
    var selectcitys = document.querySelector('#selectcitys').value;
    var cityfinal = document.querySelector('.cityfinal')
    cityfinal.innerHTML = 'your choose__:' + " " + selectcitys;
}

function activecntcity() {
    let cntcity = document.querySelector('.cntcity')
    cntcity.classList.toggle('activecntcity')
}

function activecntcontry() {
    let cntcontry = document.querySelector('.cntcontry')
    cntcontry.classList.toggle('activecntcontry')
}
function openfile() {
    document.getElementById('file').click();
}
imgjs = document.querySelector('#imgj');
inpt = document.getElementById('file');
inpt.onchange = function () {
    imgj.src = URL.createObjectURL(inpt.files[0])
    imgj.style.width = 'auto';
    document.querySelector('.pimg').style.display = 'none';
}
function activesalepage() {
    let salepage = document.querySelector('#salepage');
    salepage.classList.toggle('activesalepage');
}
function activebuypage() {
    let buypage = document.querySelector('.buypage');
    buypage.classList.toggle('activebuypage');
}


/*submit.addEventListener('click', function () {
 
 if (input1 == "") {
        document.querySelector('.cl1').style.visibility = 'visible';
    } 
   else{
    document.querySelector('.cl1').style.visibility = 'hidden';
   }
 if (input3 == "") {
        document.querySelector('.cl3').style.visibility = 'visible';
    } 
    else{
        document.querySelector('.cl3').style.visibility = 'hidden';
    }
    if (input4 == "") {
        document.querySelector('.cl4').style.visibility = 'visible';
    }
    else if(input4 != ""){
        document.querySelector('.cl4').style.visibility = 'hidden';
    }
     if (input5 == "") {
        document.querySelector('.cl5').style.visibility = 'visible';
    }
    else{
        document.querySelector('.cl5').style.visibility = 'hidden';
    }
   if (input6 == "") {
        document.querySelector('.cl6').style.visibility = 'visible';
    } 
    else{
        document.querySelector('.cl6').style.visibility = 'hidden';
    }
 if (input7 == "") {
        document.querySelector('.cl7').style.visibility = 'visible';
    }
    else{
        document.querySelector('.cl7').style.visibility = 'hidden';
    }
})*/
function onkzxzx() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;
    var input5 = document.getElementById("input5").value;
    var input6 = document.getElementById("input6").value;
    var input7 = document.getElementById("input7").value;
    if (input1 == '') {
        document.querySelector('.cl1').style.visibility = 'visible';
    }
    else {
        document.querySelector('.cl1').style.visibility = 'hidden';
    }

    if (input2 == "") {
        document.querySelector('.cl2').style.visibility = 'visible';
    }
    else {
        document.querySelector('.cl2').style.visibility = 'hidden';
    }
    if (input3 == "") {
        document.querySelector('.cl3').style.visibility = 'visible';
    }
    else {
        document.querySelector('.cl3').style.visibility = 'hidden';
    }
    if (input4 == "") {
        document.querySelector('.cl4').style.visibility = 'visible';
    }
    else {
        document.querySelector('.cl4').style.visibility = 'hidden';
    }
    if (input5 == "") {
        document.querySelector('.cl5').style.visibility = 'visible';
    }
    else {
        document.querySelector('.cl5').style.visibility = 'hidden';
    }
    if (input6 == "") {
        document.querySelector('.cl6').style.visibility = 'visible';
    }
    else {
        document.querySelector('.cl6').style.visibility = 'hidden';
    }
    if (input7 == "") {
        document.querySelector('.cl7').style.visibility = 'visible';
    }
    else {
        document.querySelector('.cl7').style.visibility = 'hidden';
    }
}
let btnff = document.querySelector(".butn2");
loadpage = document.querySelector(".loadpage")

function showew() {
    loadpage = document.querySelector(".loadpage")
    loadpage.style.visibility = 'hidden';
    loadpage.style.opacity = 0;
} function showew2() {
    nores = document.querySelector('.nores')
    nores.style.top = 0;
}

function cliktbn() {
    scaninput2 = document.getElementById("scaninput2").value;
    scaninput1 = document.getElementById("scaninput1").value;
    scaninput3 = document.getElementById("scaninput3").value;
    demo091 = document.getElementById("demo091");
    demo092 = document.getElementById("demo092");
    demo093 = document.getElementById("demo093");
    demo091.innerHTML = scaninput1;
    demo092.innerHTML = scaninput2;
    demo093.innerHTML = scaninput3;
    if (scaninput2 != '' || scaninput1 != '' || scaninput3 != '') {
        loadpage.style.visibility = 'visible';
        loadpage.style.opacity = 10;
        setTimeout('showew()', 4000);
        setTimeout('showew2()', 4100);
    }
}
function tryag() {
    loadpage.style.visibility = 'visible';
    loadpage.style.opacity = 10;
    setTimeout('showew()', 4000);
    nores = document.querySelector('.nores')
    setTimeout('showew2()', 4100);
    nores.style.top = '-1200px';
}
function cnals() {
    nores = document.querySelector('.nores')
    nores.style.top = '-1200px';

}
var suprieurimg = document.querySelector(".suprieurimg")
var fatherxntmedia = document.querySelector(".fatherxntmedia")
var xntmedia = document.querySelector('.xntmedia')
var suprieur = document.querySelector(".suprieur");
suprieur.addEventListener('click', function () {
    suprieurimg.classList.toggle("activesuprieurimg")
    fatherxntmedia.classList.toggle("activefatherxntmedia")
    xntmedia.classList.toggle('activexntmedia')
})
let changeimg = document.querySelector('#changeimg');
let inptFile = document.querySelector("#inptFile");
changeimg.addEventListener('click', function () {
    inptFile.click()
})
let imageOfprofile3 = document.querySelector(".imageOfprofile3")
let imageOFprofile2 = document.querySelector(".imageOFprofile2")
let imageOfProfile = document.querySelector(".imageOfProfile");
var imagechnpr = document.querySelector('.imagechnpr');
inptFile.onchange = function () {
    imageOfprofile3.src = URL.createObjectURL(inptFile.files[0])
    imageOfProfile.src = URL.createObjectURL(inptFile.files[0])
    imageOFprofile2.src = URL.createObjectURL(inptFile.files[0])
    imagechnpr.src = URL.createObjectURL(inptFile.files[0])
}
var misin = document.querySelector(".misin")
var imgedi1 = document.querySelector(".imgedi1");
var imgedi2 = document.querySelector(".imgedi2");
var imgedi3 = document.querySelector(".imgedi3");
var imgedi4 = document.querySelector(".imgedi4");
var imgedi5 = document.querySelector(".imgedi5");
var imgedi6 = document.querySelector(".imgedi6");
var editdivflmn = document.querySelector('.editdivflmn');
var editdivage = document.querySelector('.editdivage');
var editdivemali = document.querySelector('.editdivemali');
var editdivads = document.querySelector('.editdivads');
var editdivphone = document.querySelector('.editdivphone');
var editdivid = document.querySelector('.editdivid');
var btn100 = document.querySelector('.btn100');
var btn200 = document.querySelector('.btn200');
var btn300 = document.querySelector('.btn300');
var btn400 = document.querySelector('.btn400');
var btn500 = document.querySelector('.btn500');
var btn600 = document.querySelector('.btn600');
imgedi1.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivflmn.classList.toggle('activeeditdivflmn')
})
btn100.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivflmn.classList.toggle('activeeditdivflmn')
})
imgedi2.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivage.classList.toggle('activeeditdivage')
})
btn200.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivage.classList.toggle('activeeditdivage')
})
imgedi3.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivads.classList.toggle('actveeditdivads')
})

btn300.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivads.classList.toggle('actveeditdivads')
})

imgedi4.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivemali.classList.toggle('activeeditdiv1email')
})

btn400.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivemali.classList.toggle('activeeditdiv1email')
})

imgedi5.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivphone.classList.toggle('activeeditdivphone')
})
btn500.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivphone.classList.toggle('activeeditdivphone')
})
imgedi6.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivid.classList.toggle('activeeditdivid')
})
btn600.addEventListener('click', function () {
    misin.classList.toggle('activemisin')
    editdivid.classList.toggle('activeeditdivid')
})
// email case  
var emailprofile = document.getElementById('emailprofile')
var inpteditdiv = document.querySelector('.inpteditdiv')
inpteditdiv.onkeyup = function () {
    inpteditdiv.value = inpteditdiv.value.toLowerCase()
}
inpteditdiv.onchange = function () {
    inpteditdiv.value.trim();
    if (inpteditdiv.value.indexOf(' ') !== -1 || inpteditdiv.value.indexOf('@') == -1
        || inpteditdiv.value.indexOf('.') == -1 || inpteditdiv.value.indexOf('.') < inpteditdiv.value.indexOf('@')
        || inpteditdiv.value.indexOf('.') == inpteditdiv.value.indexOf('@') + 1
    ) {
        inpteditdiv.style.border = 'solid 1px red'
        document.querySelector('.h55').style.visibility = 'visible'
    }

    else {
        inpteditdiv.style.border = ''
        document.querySelector('.h55').style.visibility = 'hidden'

    }
}
function setemail() {
    if (inpteditdiv.value.indexOf(' ') == -1 && inpteditdiv.value.indexOf('@') !== -1
        && inpteditdiv.value.indexOf('.') !== -1 && inpteditdiv.value.indexOf('.') > inpteditdiv.value.indexOf('@')
        && inpteditdiv.value.indexOf('.') !== inpteditdiv.value.indexOf('@') + 1
    ) {
        misin.classList.toggle('activemisin')
        editdivemali.classList.toggle('activeeditdiv1email');
        alert('The email addres has been changed');
        emailprofile.innerHTML = inpteditdiv.value;
    }
}

// full  name SPACE
var fullnameprofile = document.getElementById('fullnameprofile')
var inptuflnm1 = document.querySelector(".inptuflnm1");
var inptuflnm2 = document.querySelector(".inptuflnm2");
inptuflnm1.onchange = function () {
    inptuflnm1.value.trim();
    ts = /\d/.test(inptuflnm1.value);
    if (ts) {
        document.querySelector('.h5offirstnm').style.visibility = 'visible'
        inptuflnm1.style.border = 'solid 1px red'
    }
    else {
        document.querySelector('.h5offirstnm').style.visibility = 'hidden'
        inptuflnm1.style.border = ''
    }
}

inptuflnm2.onchange = function () {
    inptuflnm2.value.trim();
    ts2 = /\d/.test(inptuflnm2.value);
    if (ts2) {
        document.querySelector('.h5oflastnm').style.visibility = 'visible'
        inptuflnm2.style.border = 'solid 1px red'
    }
    else {
        document.querySelector('.h5oflastnm').style.visibility = 'hidden'
        inptuflnm2.style.border = ''
    }
}
function endinflnm() {
    misin.classList.toggle('activemisin');
    editdivflmn.classList.toggle('activeeditdivflmn')
    if (inptuflnm1.value != '') {
        fullnameprofile.innerHTML = inptuflnm1.value + '\xa0'
        if (inptuflnm2.value != '') {
            fullnameprofile.innerHTML += '\xa0' + inptuflnm2.value;
        }
    }
}

// age space --------------------------------------------------------------------------

var ageprofile = document.getElementById('ageprofile');
var inptage = document.querySelector('.inptage');

function endingage() {
    if (inptage.value == '') {
        document.getElementById('h5ofbd').style.visibility = 'visible';
    }
    else {
        ageprofile.innerHTML = inptage.value
        misin.classList.toggle('activemisin')
        document.getElementById('h5ofbd').style.visibility = 'hidden';
        editdivage.classList.toggle('activeeditdivage')

    }
}

// edress field ------------------------------------------------------------------
var Adressprofile = document.getElementById('Adressprofile');
var cconty = document.querySelector('.cconty');
var ccity = document.querySelector('.ccity');
var cstreet = document.querySelector('.cstreet')
function sndingadrs() {
    if (
        cconty.value != '' &&
        ccity.value != '' &&
        cstreet.value != ''
    ) {
        misin.classList.toggle('activemisin')
        editdivads.classList.toggle('actveeditdivads')
        Adressprofile.innerHTML = cconty.value.toUpperCase() + '\xa0' + '-' + ccity.value.toUpperCase() + '\xa0' + '-' + cstreet.value.toUpperCase()
    }
    else {
        alert('complet all file')
    }
}
// Phone field ---------------------------

var phoneprofile = document.getElementById('phoneprofile');
var inptphone = document.querySelector(".inptphone");
inptphone.onchange = function () {
    if (inptphone.value.length != 10) {
        document.querySelector('.h5ofnmb').style.visibility = 'visible'
    }
    else {
        document.querySelector('.h5ofnmb').style.visibility = 'hidden'

    }
    /*
    for(var i=0; i<=inptphone.value.length; i++){
        if()
    }*/
}
function endingphon() {

    if (inptphone.value.length == 10) {
        misin.classList.toggle('activemisin')
        editdivphone.classList.toggle('activeeditdivphone');
        phoneprofile.innerHTML = inptphone.value;

    }
}

let endinphone = document.querySelector('.endinphone');
endinphone.addEventListener('click', endingphon)

// -----------------------------d-------------
var inptid = document.querySelector('.inptid')

function endingID() {
    if (inptid.value != '' && inptid.value.length > 8 && inptid.value.length < 20) {
        misin.classList.toggle('activemisin')
        editdivid.classList.toggle('activeeditdivid')
        document.getElementById('idprofile').innerHTML = inptid.value;
        document.querySelector('.h5ofID').style.visibility = 'hidden';
    }
    else {
        document.querySelector('.h5ofID').style.visibility = 'visible';
    }
}

let eningidd = document.querySelector('.eningidd')
eningidd.addEventListener('click', endingID)



// -------------
var columnmv = document.querySelector('.columnmv');

var settmenu = document.querySelector('.settmenu');
const sttinglbl = document.querySelector('.sttinglbl');
var sttinglbl2 = document.getElementById('sttinglbl2')
sttinglbl.addEventListener('click', () => {
    columnmv.classList.toggle('activeclofst')
    settmenu.classList.toggle('activesettmenu')
    sttinglbl.classList.toggle('activesttinglbl')
})
//-------------------------------- DOCUMENT --------

var channelmenu = document.querySelector('.channelmenu');
var fatherchannelmenu = document.querySelector('.fatherchannelmenu');
var savedpag = document.querySelector('.savedpag');
var savedlbl = document.querySelector('.savedlbl');
var cvllbl = document.querySelector('.cvllbl');
var civilpg = document.querySelector('.civilpg');
var lkdlbl = document.querySelector('.lkdlbl');
var lkdpg = document.querySelector('.lkdpg');
var pginr = document.querySelector(".pginr")
var hlplbl = document.querySelector('.hlplbl')
var helppg = document.querySelector(".helppg")
var problesend = document.querySelector(".problesend")
var sendbtn = document.querySelector(".sendbtn")
var endenbtnpr = document.querySelector(".endenbtnpr")
var desproblem = document.querySelector(".desproblem")
// ===> ^__^  ====
document.addEventListener('click', e => {
    if (!settmenu.contains(e.target) && !sttinglbl.contains(e.target)) {
        settmenu.classList.remove('activesettmenu')
        sttinglbl.classList.remove('activesttinglbl')
        columnmv.classList.remove('activeclofst')

    }
    if (!meneuprofil.contains(e.target) && !button2.contains(e.target)) {
        meneuprofil.classList.remove('acvtivemeneuprofil')
    }
    if (!channelmenu.contains(e.target) && !fatherchannelmenu.contains(e.target)) {
        columnmv.classList.remove('activeclofch')
        channelmenu.classList.remove('activechannelmenu')
        fatherchannelmenu.classList.remove('activefatherchannelmenu')
    }
    if (!savedpag.contains(e.target) && !savedlbl.contains(e.target)) {
        columnmv.classList.remove('activeclofsvd')
        savedpag.classList.remove('activesavedpag')
        savedlbl.classList.remove('activesavedlbl')
    }
    if (!civilpg.contains(e.target) && !cvllbl.contains(e.target)) {
        columnmv.classList.remove('activeclofcv')
        cvllbl.classList.remove('activecvllbl')
        civilpg.classList.remove('activecivilpg')
    }
    if (!lkdpg.contains(e.target) && !lkdlbl.contains(e.target)) {
        columnmv.classList.remove('activecloflkd')
        lkdlbl.classList.remove('activelkdlbl')
        lkdpg.classList.remove("activelkdpg")

    }
    if (!hlplbl.contains(e.target) && !helppg.contains(e.target)) {
        columnmv.classList.remove('activeclofhlp');
        hlplbl.classList.remove('activehlplbl')
        helppg.classList.remove("activehelppg")


    }

    if (!suprieurimg.contains(e.target) && !fatherxntmedia.contains(e.target) && !xntmedia.contains(e.target)) {
        suprieurimg.classList.remove("activesuprieurimg")
        fatherxntmedia.classList.remove("activefatherxntmedia")
        xntmedia.classList.remove('activexntmedia')

    }
})



//--------------- 
var menusetign = document.querySelector('.menusetign')
var actvsietting = document.querySelector('.actvsietting');
var actvsiettingspan = document.querySelector('.actvsiettingspan')
actvsietting.addEventListener('click', function () {
    menusetign.classList.toggle('activemenusetign');
    actvsietting.classList.toggle('activeactvsietting')
}
)
actvsiettingspan.addEventListener('click',
    function () {
        menusetign.classList.toggle('activemenusetign');
        actvsietting.classList.toggle('activeactvsietting')
    }
)

//-----------------------------------------


fatherchannelmenu.addEventListener('click', () => {
    columnmv.classList.toggle('activeclofch')
    channelmenu.classList.toggle('activechannelmenu')
    fatherchannelmenu.classList.toggle('activefatherchannelmenu')
})

//--saved -------------------------------------------------------------


savedlbl.addEventListener('click', () => {
    columnmv.classList.toggle('activeclofsvd')
    savedpag.classList.toggle('activesavedpag')
    savedlbl.classList.toggle('activesavedlbl')

})
// civil --------------------
cvllbl.addEventListener('click', () => {
    civilpg.classList.toggle('activecivilpg')
    columnmv.classList.toggle('activeclofcv')
    cvllbl.classList.toggle('activecvllbl')


})

// ---liked -----

lkdlbl.addEventListener('click', () => {
    columnmv.classList.toggle('activecloflkd')
    lkdlbl.classList.toggle('activelkdlbl')
    lkdpg.classList.toggle("activelkdpg")


})

//------help-------------------
hlplbl.addEventListener('click', () => {
    columnmv.classList.toggle('activeclofhlp')
    hlplbl.classList.toggle('activehlplbl')
    helppg.classList.toggle("activehelppg")

})
// ----------------------
var nonlik = document.querySelector(".nonlik");
var likyad = document.querySelector('.likyad');
likyad.addEventListener('click', function () {
    nonlik.classList.remove("activenonlik")
    likyad.classList.toggle('activelikyad')
})
nonlik.addEventListener('click', function () {
    likyad.classList.remove('activelikyad')
    nonlik.classList.toggle("activenonlik")
})
//-----------LM9OL--------------------------
var cnttext = document.querySelector('.cnttext');
var content = document.querySelector(".content");
var lbllst1 = document.querySelector('.lbllst1')
var lbllst2 = document.querySelector('.lbllst2')
var lbllst3 = document.querySelector('.lbllst3')
var lbllst4 = document.querySelector('.lbllst4')
var lbllst5 = document.querySelector('.lbllst5')
var lbllst6 = document.querySelector('.lbllst6')
var lbllst7 = document.querySelector('.lbllst7')
var lbllst8 = document.querySelector('.lbllst8')
lbllst1.addEventListener('click', function () {
    cnttext.innerHTML = ": MacBook 2017, l’ultraportable d’Apple fait enfin plus que le minimum requis Enfin assez puissant pour toutes les tâches du quotidien, le MacBook n'est pas une foudre de guerre mais offre une bonne autonomie... pour un prix un peu élevé"
    pginr.classList.add("activepginr")
    content.src = 'photos/img1.jpeg'
})
lbllst2.addEventListener('click', function () {
    cnttext.innerHTML = "Hi Guys,Picking up my 18 AY M4 ZCP this weekend. I'm really liking the side skirts on the car and wife is not feeling it .http://cdn.bmwblog.com/wp-content/up...n-Yellow-9.jpgWhat does everyone think? Also, the side skirts on the car seems to be painted on the lower-side to match the AY, doubt that's how it comes from BMW."
    content.src = 'photos/img2.jpeg'
    pginr.classList.add("activepginr")
})
lbllst3.addEventListener('click', function () {
    cnttext.innerHTML = " Year of release: 2020 - 2024 Fuel: diesel Financial strength: 12 cv True Power: 265 ch Speed ​​converter: automatic Number of relationships: 8  Maximum speed: 227 km/h  City consumption: 7.2 l/100 km Road consumption: 6.0 l/100 km Mixed consumption: 6.5 l/100 km Carbon dioxide emission: 170 g/km Category: four-wheel drive Number of doors: 5 Safe (litres): 212 l"
    pginr.classList.add("activepginr")
    content.src = 'photos/img3.jpeg'
})
lbllst4.addEventListener('click', function () {
    cnttext.innerHTML = ["2020 Apple MacBook Air 13 Intel i3 1.1GHz 8GB Ram 256GB SSD Rose Gold A2179 2020 Apple MacBook Air 13 Intel i3 1.1GHz 8GB Ram 256GB SSD Rose Gold A2179"]
    pginr.classList.add("activepginr")
    content.src = 'photos/img4.jpeg'
})
lbllst5.addEventListener('click', function () {
    cnttext.innerHTML = ["APPLE MACBOOK PRO A1534Model 201O perating system MacOS Catalina RAM 8GB ROM 512GB SSD Bluetooth, WIFI, Webcam, 4 USB Port Graphic Card 2GB  Original Charger Free Cash on Delivery delivery time  3 days very good working condition  Its have 2 Size 14 and 15.5"]
    pginr.classList.add("activepginr")
    content.src = 'photos/img5.jpeg'
})
lbllst6.addEventListener('click', function () {
    cnttext.innerHTML = 'Location Mercedes Benz AMG GL 63 2021 dans Sharjah'
    pginr.classList.add("activepginr")
    content.src = 'photos/img6.jpeg'
})
lbllst7.addEventListener('click', function () {
    cnttext.innerHTML = ("Sélectionnez vos préférences en matière de cookies Nous utilisons des cookies et des outils similaires, qui sont nécessaires pour vous permettre d'effectuer des achats, d'améliorer votre expérience d'achat et de fournir nos services, comme indiqué dans notre Politique relative aux cookies. Nous utilisons également ces cookies pour comprendre comment les clients utilisent nos services (par exemple, en mesurant les visites de sites) afin de pouvoir apporter des améliorations.  Si vous y consentez, nous utiliserons également des cookies pour ameliorer votre expérience d'achat dans les boutiques Amazon, comme indiqué dans notre Politique relative aux cookies. Votre choix s'applique à l'utilisation des cookies publicitaires internes et tiers sur ce service. Les cookies stockent des informations standard relatives à un appareil, telles qu'un identifiant unique, ou y accèdent. Les 103 tiers qui utilisent des cookies sur ce service le font dans le but d'afficher et de mesurer des publicités personnalisées, de générer des informations sur l'audience, et de développer et d'améliorer des produits. Cliquez sur Refuser pour refuser, ou sur Personnaliser pour faire des choix publicitaires plus détaillés ou pour en savoir plus. Vous pouvez modifier vos choix à tout moment en accédant à la section Préférences en matière de cookies, comme indiqué dans la Politique relative aux cookies. Pour en savoir plus sur la manière dont Amazon utilise les informations personnelles, telles que l'historique des commandes sur la boutique Amazon, et à quelles fins, consultez notre Déclaration de confidentialité.")
    pginr.classList.add("activepginr")
    content.src = 'photos/img7.jpeg'
})
lbllst8.addEventListener('click', function () {
    cnttext.innerHTML = 'Just built my pc in the lian li evo and half of the front rgb strip is dead 🤦‍♂️'
    pginr.classList.add("activepginr")
    content.src = 'photos/img8.jpeg'
})
// -----------------  hEPLPLPELIUH-------------------------------
sendbtn.addEventListener("click", function () {
    if (desproblem.value != '') {
        problesend.classList.toggle('activeproblesend')
    }
    else
        alert('You did not ask any questions')
})
endenbtnpr.addEventListener("click", function () {
    problesend.classList.toggle('activeproblesend')
})

//  mohatawa space is here mother fucker-------------------------------------------------
var lik = document.querySelectorAll(".lik");
// var li2 = document.querySelectorAll(".lik");
let arrlik = [];
lik.forEach(function (img) {
    arrlik.push(img)
    img.addEventListener('click', function () {
        let ind2 = arrlik.indexOf(img);
        if (arrlik[ind2].src.match("photos/coeur.png")) {
            arrlik[ind2].src = "photos/coeur2.png";
        }
        else if (arrlik[ind2].src.match("photos/coeur2.png")) {
            arrlik[ind2].src = "photos/coeur.png";
        }
        arrlik[ind2].classList.toggle('activelik')

    })

})


//  scroll images --------************-----___________________________________----------------------

var verright = document.querySelectorAll('.verright')
var verleft = document.querySelectorAll('.verleft')
var imagen1 = document.querySelector(".imagen1")
var imagen2 = document.querySelector(".imagen2");




//   verleft.addEventListener("click", function (){
//     var containerimgasa=document.querySelector(".containerimgasa")
//     containerimgasa.scrollBy(-700, 0)
//     alert('hello world')
// })


//   verright.addEventListener("click", function (){
//     var containerimgasa=document.querySelector(".containerimgasa")
//     containerimgasa.scrollBy(700, 0)

// }
///--------**********----++++++
var containerimgasa = document.querySelectorAll(".containerimgasa")
let arrimg = [];
containerimgasa.forEach(function (img) {
    arrimg.push(img)
})

///-------------------++

let arrbtnr = [];
verright.forEach(function (button2) {
    arrbtnr.push(button2)
    button2.addEventListener('click', function () {
        var indx1 = arrbtnr.indexOf(button2);
        arrimg[indx1].scrollBy(700, 0)
    })
}
)
///-------------------***
let arrbtnl = [];
verleft.forEach(function (button) {
    arrbtnl.push(button)
    button.addEventListener('click', function () {
        var indx = arrbtnl.indexOf(button);
        arrimg[indx].scrollBy(-700, 0)
    })
}
)



// -------------------------CRESA ELEMENTS  -------------------------_______________________-----------------

var mohtawa = document.querySelector(".mohtawa");

let bareymenu = document.createElement("div");
mohtawa.append(bareymenu)
console.log(bareymenu);











//  var  bbintin= (arrbtnl.indexOf(button)==arrbtn.indexOf(button))

