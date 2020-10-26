

function showtxt(){
    let info
    let DHL = document.getElementById("mylist").value

    switch(DHL){
        case "0":
        case "1":    
        info = `<b>Brief und Postkarte </b> <br>
    	<p>  L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm </p>`
        

        break

        case "2":
       info= `<b>DHL Paket 2 kg</b> <br>
       <p> bis 60 x 30 x 15 cm </p>`
        
        break

        case "3":
        info = `<b>DHL Paket 5 kg</b> <br>
        <p>  bis 120 x 60 x 60 cm  </p>`;

         break

        case "4":
       
        info = `<b>DHL Paket 10 kg</b> <br>
        <p>  bis 120 x 60 x 60 cm  </p>`;
            
        break  
        
        default:
            info = `<b>Extra große Größe</b>`
       
    }
    document.getElementById("masse").innerHTML = info;

}