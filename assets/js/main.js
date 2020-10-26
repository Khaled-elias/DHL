function check(){
    let text;
    let stadt = document.getElementById("bundeslandInfo").value 


    switch(stadt){
        case "Baden-Württemberg":
        text = "hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";

        case "Bayern":
            text = "hat 12,844 Mio Einwohner und München ist die Hauptstadt";
    
            break
        
        case "Berlin":
            text = "hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
        
            break
    
                
       
         case "Brandenburg":
            text = "hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt          ";
            
            break

        case "Bremen":
            text = "hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt            ";
                
               
             break
        case "Hamburg":
             text = "hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
                
            break

         case "Hessen":
             text = "hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
                    
             break  
                    
                    

        case "Mecklenburg-Vorpommern":
            text = "hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
                        
            break
                        
                        

        case "Niedersachsen":
        text = "hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
                            
        
            break   
            
            
        case "Nordrhein-Westfalen":
         text = "hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
                
        
             break

        case "Rheinland-Pfalz":
        text = "hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
                       
               
            break   

        case "Saarland":
        text = "hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
                       
               
            break   


        case "Sachsen":
        text = "hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
                               
                       
             break



        case "Sachsen-Anhalt":
        text = "hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
                                       
                               
            break


        case "Schleswig-Holstein":
        text = "hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
                                               
                                       
            break

         case "Thüringen":
         text = "hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
                                                       
                                               
            break


       default   :
       text =  "Ein solches Bundesland gibt es in Deutschland nicht"        
    }
document.getElementById("bundeslandInfoErgebnis").innerHTML = text;
}




