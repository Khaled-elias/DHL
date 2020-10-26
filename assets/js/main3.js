function check(){
    let info
    let mon = document.getElementById("month").value

    switch(mon){
        case "Mar":
            info =  ` <img src="https://www.horoscopedates.com/img/icon_aries.png" alt=""> <br>
            <h1 style="color: #F6014A;" >  ARIES
             </h1> <br>
            Today your patience might be tested when one or more of your projects gets put on hold by someone… `
            break
         case "Apr":
            info =  `<img src="https://www.horoscopedates.com/img/icon_taurus.png " alt="">
            <br>
            <h1 style="color: #9BFF39;" > TAURUS
            </h1> <br>
            Your intense energy makes you a great candidate for a leadership position right now, so if you are… `
            break

         case "May" :
            info = `<img src="https://www.horoscopedates.com/img/icon_gemini.png" alt="">
             <br>
             <h1 style="color: #5B93FF;" >  GEMINI
            </h1> <br>
             If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…`

           break 
            
        case "Jun":
            info =`<img src="https://www.horoscopedates.com/img/icon_cancer.png" alt="">
             <br>
             <h1 style="color: #C8CACB;" >  CANCER
             </h1> <br>
             Too many different elements in your life are overlapping with each other right now—and it's your…`

        break

        case "Jul":
            info =`<img src="https://www.horoscopedates.com/img/icon_leo.png" alt="">
          <br>
          <h1 style="color: #FFCF46;" >  LEO
         </h1> <br>
            The issues you'll be dealing with today are very complicated ones—you will have to navigate your… `

        break


        case "Aug":
             info =`<img src="https://www.horoscopedates.com/img/icon_virgo.png" alt="">
            <br>
            <h1 style="color: #00CA7B;" >  VIRGO
            </h1> <br>
             You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…`

        break



        case "Sep":
            info =`<img src="https://www.horoscopedates.com/img/icon_libra.png" alt="">
             <br>
             <h1 style="color: #42E4FF;" > LIBRA
            </h1> <br>
            Pick a cultural event that's coming up and get some tickets for it today.`

        break


        case "Oct":
        info =`<img src=" https://www.horoscopedates.com/img/icon_scorpio.png " alt="">
       <br>
       <h1 style="color: #8900B3;" > SCORPIO
        </h1> <br>
        Someone will challenge a belief that you've held for a very long time today—and they will say an…`

        break


        case "Nov":
        info =`<img src=" https://www.horoscopedates.com/img/icon_sagittarius.png" alt="">
        <br>
        <h1 style="color: #FF825C;" > SAGITTARIUS
        </h1> <br>
        Someone in your life needs to step up and take on more responsibility—and you need to tell them to....`

        break


        case "Dec":
        info =`<img src="https://www.horoscopedates.com/img/icon_capricorn.png" alt="">
          <br>
          <h1 style="color: #A6580C;" > CAPRICORN
        </h1> <br>
        Breaking the rules is not always a bad thing—especially if the rules limit your creativity.`

        break


        case "Jan":
        info =`<img src=" https://www.horoscopedates.com/img/icon_aquarius.png" alt="">
        <br>
        <h1 style="color: #7E58FF;" > AQUARIUS
        </h1> <br>
        Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…`

        break



        case "Feb":
        info =`<img src="https://www.horoscopedates.com/img/icon_pisces.png  " alt="">
        <br>
        <h1 style="color: #4C9ADA;" >  PISCES
        </h1> <br>
        Communication is very important today—written, spoken, and even nonverbal body language will all…`

        break
        

        default:
           info = '<h2 style="color: red;" >please give a Month </h2>' 

        
         
    }

    document.getElementById("erg").innerHTML = info
    event.preventDefault()
    
}