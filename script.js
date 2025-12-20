fetch("chocolatier.json")

  .then(chocolat => chocolat.json())
  .then(data => {
    console.log(data)

    console.log(data.nomEntreprise)

    console.log(data.clients)
 
    
    

    
    listeBeneficesClients(data.listeBeneficesClients)
    afficheProduits(data.produits)
    afficheClients(data.clients)

    })



function afficheProduits(tableauProduits){
//ROle : affiche dans la page web les cartes des chocolats
 // tableauProduits : la liste des chocolat : tableau

 tableauProduits.forEach(chocolat=>{

    // pour chaque chocolat : je l'affiche dans la page 
     document.getElementById("chocolats").innerHTML +=` <div class="carte w-25"> <!-- div1 -->
                 <img src="${chocolat.imageUrl}" alt="" class="w-98">
                 <h4>${chocolat.titre}</h4>
                 <p>${chocolat.presentation}</p>
            </div>`
 })
}

 function afficheClients(avisClients) {
    // ROLE: affiche dans la page web les avis clients


    avisClients.forEach(clients => {
        // pour chaque client j'affiche l'avis

        document.getElementById("clients").innerHTML +=`<div class="card flex mt-80 align-center ">

            <p>${clients.nom}</p>
            
              <!--ETOILE-->
            <nav> 

               <ul>
                    <i class="ph-fill ph-star"></i>
                </ul>

                <ul>
                    <i class="ph-fill ph-star"></i>
                </ul>

                <ul>
                    <i class="ph-fill ph-star"></i>
                </ul>

                <ul>
                    <i class="ph-fill ph-star"></i>
                </ul>

                <ul>
                    <i class="ph-fill ph-star"></i>
                </ul>

            <p>${clients.typePrestation}</p>
             <p> ${clients.commentaire }</p>

             
        </div>`
 })}


        
function listeBeneficesClients(listeBenefices) {
    // ROLE: affiche dans la page web les avis clients


  
        // pour chaque client j'affiche les benefices

        document.getElementById("listeBeneficesClients").innerHTML +=`
        <div class="mt-80 flex">
            
        <div class="card ">


            <img src=" " alt="" class="w-33">
            <p>${listeBenefices[0]} </p>
        </div>


        
        <div class="card">

        
            <img src=" " alt="" class="w-33">
            <p>${listeBenefices[1]} </p>
        </div>


        
        
        <div class="card">


            <img src=" " alt="" class="w-33">
            <p>${listeBenefices[2]} </p>
        </div>



        
        
        `
        
    
 }




AOS.init();


    
    

        

        


        


    



