const calisma=document.getElementById("calisma")
const calisma_alani=document.getElementById("calisma--alani")
const kisisel =document.getElementById("kisisel")
const kisisel_bigi=document.getElementById("kisisel-bilgi")
const iletisim=document.getElementById("iletisim")
const iletisim_bilgi=document.getElementById("iletisim-bilgi")
const menü=document.querySelector(".menü")

const baslik =document.querySelector(".baslik")
const sabit=document.querySelector(".sabit")

menü.addEventListener("click",()=>{
  const ana__div=document.createElement("div")


  const isaret =document.createElement("div")
  isaret.style.width="30px"
  isaret.style.height="30px"
  isaret.style.padding="10px"
  isaret.style.backgroundColor="rgb(81, 69, 3)"
  isaret.style.marginBottom="30px"
  isaret.classList="d-flex justify-content-center align-items-center"
  isaret.style.position="fixed"
  isaret.style.top="10px"
  isaret.style.right="10px"
  
  
  



  const i=document.createElement("i")
  i.classList="fa-solid fa-x"
  i.style.color="white"
  i.style.cursor="pointer"

  isaret.appendChild(i)

  const div =document.createElement("div")
  
  div.innerHTML=`


  <ul class="list-style-none  ">
      <li ><a href="./index.html" style="color: black;">Anasayfa</a></li>
      <hr>
      <li ><a href="./hakkımda.html" style="color: black;">Hakkımda</a></li>
      <hr>
      <li><a href=""  style="color: black;">Kişisel Bilgiler</a></li>
      <hr>
      <li><a href=""  style="color: black;">İletişim</a></li>
      <hr>
  </ul>

</div>
`
ana__div.style.width="250px"
ana__div.style.height="100vh"
ana__div.style.position="fixed"
ana__div.style.top="0px"
ana__div.style.right="0px"
ana__div.style.paddingTop="50px"
ana__div.style.backgroundColor="white"


ana__div.appendChild(isaret)
ana__div.appendChild(div)
document.body.appendChild(ana__div)


i.addEventListener("click",()=>{
  ana__div.classList="d-none"
})

  
})



sabit.addEventListener("click",function(e){
baslik.scrollIntoView({behavior:"smooth"})
})




calisma.addEventListener("click",function (e) {
    calisma_alani.scrollIntoView({behavior:"smooth"})

    
  })

  kisisel.addEventListener("click",function (e) {
    kisisel_bigi.scrollIntoView({behavior:"smooth"})
  })
  iletisim.addEventListener("click",function (e) {
    iletisim_bilgi.scrollIntoView({behavior:"smooth"})
  })

  menü.addEventListener("click",()=>{
  
  })



