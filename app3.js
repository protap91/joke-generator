 let btn=document.querySelector("button");
 btn.addEventListener('click', async()=>{
   let fact =await getJokes();
   let p=document.querySelector("#joke");
    p.classList.remove("show"); // reset
     p.innerHTML = fact;

  setTimeout(() => {
    p.classList.add("show"); // 👈 THIS makes it visible
  }, 250);
 });



const url="https://official-joke-api.appspot.com/jokes/programming/random";
async function getJokes(){
   try{
    let config={headers:{Accept: "application/json"}};
        let res=await axios.get(url,config);
        let joke=res.data[0];
        return `${joke.setup}<br>
    <strong>${joke.punchline}</strong>`;
   } 
   catch(e){
    console.log("error",e);
   }
}
