const audiModels=["A1","S7","Q3","Q8","E-Tron"];
const audiModelsValue = [1400000, 2500000, 1900000, 8000000, 9000000];
const bmwModels=["BMW X1","BMW X7","BMW M6","BMW M8","BMW X2"];
const bmwModelsValue = [1000000, 2500000, 700000, 19000000, 3000000];
const teslaModels=["Tesla Motors Model S","Tesla Motors Model X","Tesla Motors Model Y","Tesla Motors Roadster","Tesla Motors Model 3"];
const teslaModelsValue = [2000000, 5000000, 700000, 5000000, 2000000];
const A1=["2010 – 2015","2014 – 2018","2018-н.в."];
const A1Value=[100000,299000,400000];
const S7=["2012 – 2014","2014 – 2018","2019-н.в."];
const S7Value=[250000,2300000,10300000];
const Q3=["2011 – 2014","2014 – 2018","2018-н.в."];
const Q3Value=[200000,1100000,3500000];
const Q8=["2018-н.в."];
const Q8Value=[500000];
const Etron=["2018-н.в."];
const EtronValue=[500000];
const BmwM6=["1984 – 1989","2005 – 2010","2012 – 2018"];
const BmwM6Value=[50000,1500000,3500000];
const BmwX1=["2009 – 2012","2012 – 2015","2015 – 2019","2019-н.в."];
const BmwX1Value=[100000,200000,1000000];
const BmwX7=["2019","2022-н.в."];
const BmwX7Value=[100000,6000000];
const BmwM8=["2019","2022-н.в."];
const BmwM8Value=[100000,2200000];
const BmwX2=["2017"];
const BmwX2Value=[300000];
const TeslaS=["2012 – 2016","2016 – 2021","2021-н.в."];
const TeslaSValue=[700000,2000000,11000000];
const TeslaX=["2015 – 2021","2021-н.в."];
const TeslaXValue=[100000,7000000];
const TeslaY=["2020-н.в."];
const TeslaYValue=[100000];
const TeslaRoadster=["2008 – 2012","2017-н.в."];
const TeslaRoadsterValue=[100000,5000000]
const Tesla3=["2008 – 2012","2017-н.в."];
const Tesla3Value=[500000,3000000];

function selectBrand(sender){
    
    if (sender.options[sender.selectedIndex].value=="none")
    document.getElementById("models").style.display="none";
    else
    document.getElementById("models").style.display="block";

    let optionString="";
    if (sender.options[sender.selectedIndex].value=="audi"){
        for (let model of audiModels)
        optionString +=`<option>${model}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="bmw"){
        for (let model of bmwModels)
        optionString +=`<option>${model}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="tesla"){
        for (let model of teslaModels)
        optionString +=`<option>${model}</option>`;
    }
    
    document.getElementById("models").innerHTML=optionString;
}
function selectGen(sender){
    if (sender.options[sender.selectedIndex].value=="none")
    document.getElementById("generations").style.display="none";
    else
    document.getElementById("generations").style.display="block";
    let optionString1="";
    if (sender.options[sender.selectedIndex].value=="A1"){
        for (let generation of A1)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="S7"){
        for (let generation of S7)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Q3"){
        for (let generation of Q3)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Q8"){
        for (let generation of Q8)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="E-Tron"){
        for (let generation of Etron)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="BMW X1"){
        for (let generation of BmwX1)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="BMW X7"){
        for (let generation of BmwX7)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="BMW M6"){
        for (let generation of BmwM6)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="BMW M8"){
        for (let generation of BmwM8)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="BMW X2"){
        for (let generation of BmwX2)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Tesla Motors Model S"){
        for (let generation of TeslaS)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Tesla Motors Model X"){
        for (let generation of TeslaX)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Tesla Motors Model Y"){
        for (let generation of TeslaY)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Tesla Motors Roadster"){
        for (let generation of TeslaRoadster)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Tesla Motors Model 3"){
        for (let generation of Tesla3)
        optionString1 +=`<option>${generation}</option>`;
    }
    document.getElementById("generations").innerHTML=optionString1
}
var checkbrand=document.getElementById("brands").value;
var checkmodel=document.getElementById("models").value;
var checkgen=document.getElementById("generations").value;




function setPrice(){
    let optionsString3 = '';
    let checkbrand=document.getElementById("brands").value;
    if (checkbrand == "audi") {
        for (let i = 0; i < audiModels.length; i++) {
            optionsString3 += `<option value=${audiModelsValue[i]}>${audiModels[i]}></option>`;
            alert(optionsString3.value)
        }
        
    }
    if (checkbrand == "bmw") {
        for (let i = 0; i < audiModels.length; i++) {
            optionsString3 += `<option value=${audiModelsValue[i]}>${audiModels[i]}</option>`
        }
    }
    if (checkbrand == "tesla") {
        for (let i = 0; i < audiModels.length; i++) {
            optionsString3 += `<option value=${audiModelsValue[i]}>${audiModels[i]}</option>`
        }
    }
    var price;
    var checkbody=document.querySelector('input[name="radioinput"]:checked').value;
    var checkrange=document.getElementById("input_text1").value;
    console.log(checkbody.value);
    console.log(checkrange.value);
    price=Number(optionsString3)+Number(checkbody)+Number(checkrange);
    alert(price)
    }
