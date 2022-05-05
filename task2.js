let audimodels=["A1","S7","Q3","Q8","E-Tron"];
let bmwmodels=["BMW X1","BMW X7","BMW M6","BMW M8","BMW X2"];
let teslamodels=["Tesla Motors Model S","Tesla Motors Model X","Tesla Motors Model Y","Tesla Motors Roadster","Tesla Motors Model 3"];
let A1=["2010 – 2015","2014 – 2018","2018"];
let S7=["2012 – 2014","2014 – 2018","2019"];
let Q3=["2011 – 2014","2014 – 2018","2018"];
let Q8=["2018"];
let Etron=["2018"];
let BMW_M6=["1984 – 1989","2005 – 2010","2012 – 2018"];
let BMW_X1=["2009 – 2012","2012 – 2015","2015 – 2019","2019"];
let BMW_X7=["2019","2022"];
let BMW_M8=["2019","2022"];
let BMW_X2=["2017"];
let Tesla_S=["2012 – 2016","2016 – 2021","2021"];
let Tesla_X=["2015 – 2021","2021"];
let Tesla_Y=["2020"];
let Tesla_Roadster=["2008 – 2012","2017"];
let Tesla_3=["2017","2008 – 2012","2017"];
let A1firstb=["Хэтчбек 5 дв. Sportback","Хэтчбек 3 дв."];
let A1secondb=["Хэтчбек 5 дв. Sportback","Хэтчбек 3 дв."];
let A1thirdb=["Хэтчбек 5 дв. citycarver","Хэтчбек 5 дв."];
let S7allb=["Лифтбек Sportback"];
let Q3allb=["Внедорожник 5 дв."];
let Q8allb=["Внедорожник 5 дв."];
let ETallb=["Внедорожник 5 дв."];
let M6firstb=["Купе"];
let M6secondb=["Купе","Кабриолет"]
let M6thirsb=["Купе","Кабриолет","Седан Gran Coupe"];
let X1allb=["Внедорожник 5 дв."];
let X7allb=["Внедорожник 5 дв."];
let M8firstb=["Купе","Кабриолет","Седан Gran Coupe"];
let M8secondb=["Купе","Кабриолет","Седан Gran Coupe"];
let X2allb=["Внедорожник 5 дв."];
let Tsallb=["Лифтбек"];
let Txallb=["Внедорожник 5 дв."];
let Tyallb=["Внедорожник 5 дв."];
let TRoadfirstb=["Родстер"];
let TRoadsecondb=["Тарга"];
let T3allb=["Седан"];
function selectBrand(sender){
    
    if (sender.options[sender.selectedIndex].value=="none")
    document.getElementById("models").style.display="none";
    else
    document.getElementById("models").style.display="block";

    let optionString="";
    if (sender.options[sender.selectedIndex].value=="audi"){
        for (let model of audimodels)
        optionString +=`<option>${model}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="bmw"){
        for (let model of bmwmodels)
        optionString +=`<option>${model}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="tesla"){
        for (let model of teslamodels)
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
        for (let generation of BMW_X1)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="BMW X7"){
        for (let generation of BMW_X7)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="BMW M6"){
        for (let generation of BMW_M6)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="BMW M8"){
        for (let generation of BMW_M8)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="BMW X2"){
        for (let generation of BMW_X2)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Tesla Motors Model S"){
        for (let generation of Tesla_S)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Tesla Motors Model X"){
        for (let generation of Tesla_X)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Tesla Motors Model Y"){
        for (let generation of Tesla_Y)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Tesla Motors Roadster"){
        for (let generation of Tesla_Roadster)
        optionString1 +=`<option>${generation}</option>`;
    }
    if (sender.options[sender.selectedIndex].value=="Tesla Motors Model 3"){
        for (let generation of Tesla_3)
        optionString1 +=`<option>${generation}</option>`;
    }
    document.getElementById("generations").innerHTML=optionString1
}
function selectBody(sender){
    if (sender.options[sender.selectedIndex].value=="none")
    document.getElementById("bodies").style.display="none";
    else
    document.getElementById("bodies").style.display="block";
    let optionString2="";
    if (sender.options[sender.selectedIndex].value=="2010 – 2015"){
        for (let body of A1firstb)
        optionString2 +=`<option>${body}</option>`;
    document.getElementById("bodies").innerHTML=optionString2;
}
}