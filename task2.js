
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

function setPrice(){
     
    let checkmodel=document.getElementById("models").value;
    let checkgen=document.getElementById("generations").value;
    let price=0;
    var checkbody=document.querySelector('input[name="radioinput"]:checked').value;
    var checkrange=document.getElementById("input_text1").value;
    console.log(checkbody.value);
    console.log(checkrange.value);
    price=price+Number(checkbody);
    function minusslider(){
     price=price-(Number(checkrange)*3) ; 
    }
    function addmodelvalue(){
    if (checkmodel=="A1"){
        price=price+audiModelsValue[0];
    }
    if (checkmodel=="S7"){
        price=price+audiModelsValue[1];
    }
    if (checkmodel=="Q3"){
        price=price+audiModelsValue[2];
    }
    if (checkmodel=="Q8"){
        price=price+audiModelsValue[3];
    }
    if (checkmodel=="E-Tron"){
        price=price+audiModelsValue[4];
    }
    if (checkmodel=="BMW X1"){
        price=price+bmwModelsValue[0];
    }
    if (checkmodel=="BMW X7"){
        price=price+bmwModelsValue[1];
    }
    if (checkmodel=="BMW M6"){
        price=price+bmwModelsValue[2];
    }
    if (checkmodel=="BMW M8"){
        price=price+audiModelsValue[3];
    }
    if (checkmodel=="BMW X2"){
        price=price+audiModelsValue[4];
    }
    if (checkmodel=="Tesla Motors Model S"){
        price=price+teslaModelsValue[0];
    }
    if (checkmodel=="Tesla Motors Model X"){
        price=price+teslaModelsValue[1];
    }
    if (checkmodel=="Tesla Motors Model Y"){
        price=price+teslaModelsValue[2];
    }
    if (checkmodel=="Tesla Motors Roadster"){
        price=price+teslaModelsValue[3];
    }
    if (checkmodel=="Tesla Motors Model 3"){
        price=price+teslaModelsValue[4];
    }
    }
    function addgenvalue(){
        if ((checkgen=="2010 – 2015")&(checkmodel="A1")){
            price=price+A1Value[0];
        }
        if ((checkgen=="2014 – 2018")&(checkmodel="A1")){
            price=price+A1Value[1];
        }
        if ((checkgen=="2018-н.в.")&(checkmodel="A1")){
            price=price+A1Value[2];
        }
        if ((checkgen=="2012 – 2014")&(checkmodel="S7")){
            price=price+S7Value[0];
        }
        if ((checkgen=="2014 – 2018")&(checkmodel="S7")){
            price=price+S7Value[1];
        }
        if ((checkgen=="2019-н.в.")&(checkmodel="S7")){
            price=price+S7Value[2];
        }
        if ((checkgen=="2011 – 2014")&(checkmodel="Q3")){
            price=price+Q3Value[0];
        }
        if ((checkgen=="2014 – 2018")&(checkmodel="Q3")){
            price=price+Q3Value[1];
        }
        if ((checkgen=="2018-н.в.")&(checkmodel="Q3")){
            price=price+Q3Value[2];
        }
        if ((checkgen=="2018-н.в.")&(checkmodel="Q8")){
            price=price+Q8Value[0];
        }
        if ((checkgen=="2018-н.в.")&(checkmodel="E-Tron")){
            price=price+EtronValue[0];
        }
        if ((checkgen=="2009 – 2012")&(checkmodel="BMW X1")){
            price=price+BmwX1Value[0];
        }
        if ((checkgen=="2012 – 2015")&(checkmodel="BMW X1")){
            price=price+BmwX1Value[1];
        }
        if ((checkgen=="2015 – 2019")&(checkmodel="BMW X1")){
            price=price+BmwX1Value[2];
        }
        if ((checkgen=="2019-н.в.")&(checkmodel="BMW X1")){
            price=price+BmwX1Value[3];
        }
        if ((checkgen=="2019")&(checkmodel="BMW X7")){
            price=price+BmwX7Value[0];
        }
        if ((checkgen=="2022-н.в.")&(checkmodel="BMW X7")){
            price=price+BmwX7Value[1];
        }
        if ((checkgen=="1984 – 1989")&(checkmodel="BMW M6")){
            price=price+BmwM6Value[0];
        }
        if ((checkgen=="2005 – 2010")&(checkmodel="BMW M6")){
            price=price+BmwM6Value[1];
        }
        if ((checkgen=="2012 – 2018")&(checkmodel="BMW M6")){
            price=price+BmwM6Value[2];
        }
        if ((checkgen=="2019")&(checkmodel="BMW M8")){
            price=price+BmwM8Value[0];
        }
        if ((checkgen=="2022-н.в.")&(checkmodel="BMW M8")){
            price=price+BmwM8Value[1];
        }
        if ((checkgen=="2017")&(checkmodel="BMW X2")){
            price=price+BmwX2Value[0];
        }
        if ((checkgen=="2012 – 2016")&(checkmodel="Tesla Motors Model S")){
            price=price+TeslaSValue[0];
        }
        if ((checkgen=="2016 – 2021")&(checkmodel="Tesla Motors Model S")){
            price=price+TeslaSValue[1];
        }
        if ((checkgen=="2021-н.в.")&(checkmodel="Tesla Motors Model S")){
            price=price+TeslaSValue[2];
        }
        if ((checkgen=="2015 – 2021")&(checkmodel="Tesla Motors Model X")){
            price=price+TeslaXValue[0];
        }
        if ((checkgen=="2021-н.в.")&(checkmodel="Tesla Motors Model X")){
            price=price+TeslaXValue[1];
        }
        if ((checkgen=="2020-н.в.")&(checkmodel="Tesla Motors Model Y")){
            price=price+TeslaYValue[0];
        }
        if ((checkgen=="2008 – 2012")&(checkmodel="Tesla Motors Roadster")){
            price=price+TeslaRoadsterValue[0];
        }
        if ((checkgen=="2017-н.в.")&(checkmodel="Tesla Motors Roadster")){
            price=price+TeslaRoadsterValue[1];
        }
        if ((checkgen=="2008 – 2012")&(checkmodel="Tesla Motors Model 3")){
            price=price+Tesla3Value[0];
        }
        if ((checkgen=="2017-н.в.")&(checkmodel="Tesla Motors Model 3")){
            price=price+Tesla3Value[1];
        }
    }
    
    minusslider();
    addmodelvalue();
    addgenvalue();
    document.getElementById('result_multi').innerHTML = price;
    };

   