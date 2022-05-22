let people = [
    {
        "name":"Sharukh Khan",
        "job":"Actor",
        "description":"He is one of the well known actors",
        "picture":"https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"
    },
    {
        "name":"Salman Khan",
        "job":"Actor",
        "description":"Alive",
        "picture":"https://www.bollywoodhungama.com/wp-content/uploads/2021/10/salman-khan.jpg"
        
    }
]
function getName(){
    // let check=document.getElementById("check").value;
    let searchTerm=document.getElementById("check").value;

//    let val
    let searchResults=[];
    document.getElementById("results").innerHTML=""
    for(let i=0;i<people.length;i++){
//  if((people[i]["name"]).toLowerCase()===check.toLowerCase()){
//     document.getElementById("cname").innerHTML=people[i]['name'];
//     document.getElementById("desc").innerHTML=people[i]['description'];
//     document.getElementById("image").src=people[i]["picture"];
//     break
        if(people[i]["name"].toLocaleLowerCase().includes(searchTerm.toLowerCase()))
        {
            searchResults.push(people[i]);

        }
//  else{
//      document.getElementById("results").innerHTML="NOT FOUND"
//     //  document.getElementById("desc").innerHTML="NOT FOUND"
//     // document.getElementById("image").src="https://c.tenor.com/p-tsA5hdz2cAAAAi/crying-cute-anime.gif"
//     }
    }
    populateResult(searchResults)
    // document.getElementById("cname").innerHTML=people[0]['name'];
    // document.getElementById("desc").innerHTML=people[0]['description'];
    // document.getElementById("image").src=people[0]["picture"];

}


function inName(){
   let count=0
    let inName=document.getElementById("inname").value;
    for(let i=0;i<people.length;i++)
    {
        if((people[i]["name"]).toLowerCase()===inName.toLowerCase()){
            count=1
            break;
    }
    if(count==1)
    {
        document.getElementById("return").innerHTML="Already exist";
    }
    else {
    let inImage=document.getElementById("inimage").value;
    let inDesc=document.getElementById("indesc").value;
    let inJob=document.getElementById("injob").value;


    people.push({"name":inName
    ,"job":inJob
    ,"description":inDesc
    ,"picture":inImage
    
})
    }
}
}

function populateResult(ppl)
{
    for(let i=0;i<ppl.length;i++)
    {
        let result=document.createElement("div")
        result.className="result";
        let image=document.createElement("img");
        image.src=ppl[i]["picture"];
        image.className="avtar";
        result.appendChild(image);//append element as child of the div
        let name=document.createElement("p")
        name.innerText=ppl[i]["name"];
        result.appendChild(name);
        let desc=document.createElement("p");
        desc.innerText=ppl[i]["description"];
        result.appendChild(desc);
        document.getElementById("results").appendChild(result);
    }

    
}




