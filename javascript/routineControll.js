//Rony Ahmmed EdTech-BDU
//bdu.rony@gmail.com
//department session group
let department = 0;
let session = 2;
let group = 1;
let runningRoutine ="";
 
//select department
document.getElementById("call_EdTech").onclick = function(){
    document.getElementById("nowDepartment").innerText ="Department of Educational Technology";
    department = 0;
    routineShow(department , session , group);
} 

document.getElementById("call_IRE").onclick = function(){
    document.getElementById("nowDepartment").innerText ="Internet of Things and Robotics Engineering";
    department = 1;
   routineShow(department , session , group);
    
} 


//select session
document.getElementById("call_s2018").onclick = function(){
    document.getElementById("nowSession").innerText ="2018-19";
    session = 0;
   routineShow(department , session , group);
     
} 

document.getElementById("call_s2019").onclick = function(){
    document.getElementById("nowSession").innerText ="2019-20";
    session = 1;
   routineShow(department , session , group);
     
} 

document.getElementById("call_s2020").onclick = function(){
    document.getElementById("nowSession").innerText ="2020-21";
    session = 2;
   routineShow(department , session , group);

} 

document.getElementById("call_s2021").onclick = function(){
    document.getElementById("nowSession").innerText ="2021-22";
    session = 3;
    routineShow(department , session , group);

} 


//select Group
document.getElementById("call_G_1").onclick = function(){
    document.getElementById("nowGroup").innerText ="G-1";
    group = 0;
   routineShow(department , session , group);
     
} 

document.getElementById("call_G_2").onclick = function(){
    document.getElementById("nowGroup").innerText ="G-2";
    group = 1;
    routineShow(department , session , group);
     
} 
  


function routineShow(department , session , group){

    selectShowButtonRoutine( department , session , group);


    
     

   
    EdTech11.style.display="none";
    EdTech12.style.display="none";
    EdTech21.style.display="none";
    EdTech22.style.display="none";
    EdTech31.style.display="none";
    EdTech32.style.display="none";

    
    EdTech41.style.display="none";
    EdTech42.style.display="none";
    


    IRE11.style.display="none";
  //  IRE12.style.display="none";
    IRE21.style.display="none";
    IRE22.style.display="none";
    IRE31.style.display="none";
    IRE32.style.display="none";
    IRE41.style.display="none";
    IRE42.style.display="none";

        
    //This is for show routine
    //EdTech 2018-19 G-1
    if( department==0 && session==0 &&  group==0){
        EdTech11.style.display="block";
    }  
    //EdTech 2018-19 G-2
    if( department==0 && session==0 &&  group==1){
        EdTech12.style.display="block";
    } 



    //EdTech 2019-20 G-1
    if( department==0 && session==1 &&  group==0){
        EdTech21.style.display="block";
       
    } 
    //EdTech 2019-20 G-2
    if( department==0 && session==1 &&  group==1){
        EdTech22.style.display="block";
    }  


    
    //EdTech 2020-21 G-1
    if( department==0 && session==2 &&  group==0){
        EdTech31.style.display="block";
    } 
    //EdTech 2020-21 G-2
    if( department==0 && session==2 &&  group==1){
        EdTech32.style.display="block";
    }  

    //EdTech 2021-22 G-1
    if( department==0 && session==3 &&  group==0){
        EdTech41.style.display="block";
    }  
    //EdTech 2021-22 G-2
    if( department==0 && session==3 &&  group==1){
        EdTech42.style.display="block";
    }   



    //This is for show routine
    //IRE 2018-19 G-1
    if( department==1 && session==0 &&  group==0){
        IRE11.style.display="block";
    }  

    if( department==1 && session==0 &&  group==1){
        IRE11.style.display="block";
    }  

    //IRE 2019-20 G-1
    if( department==1 && session==1 &&  group==0){
        IRE21.style.display="block";
    } 
    //IRE 2019-20 G-2
    if( department==1 && session==1 &&  group==1){
        IRE22.style.display="block";
    } 


    
    //IRE 2020-21 G-1
    if( department==1 && session==2 &&  group==0){
        IRE31.style.display="block";
    } 
    //IRE 2020-21 G-2
    if( department==1 && session==2 &&  group==1){
        IRE32.style.display="block";
    }  

    //IRE 2021-22 G-1
    if( department==1 && session==3 &&  group==0){
        IRE41.style.display="block";
    } 
    //IRE 2021-22 G-2
    if( department==1 && session==3 &&  group==1){
        IRE42.style.display="block";
    }  


    

 }

 
 

//select but it will be red if next another button it will be green (ok)
 function selectShowButtonRoutine( department , session , group){

//department session group
    call_EdTech.style.backgroundColor = "green";
    call_IRE.style.backgroundColor = "green";

    call_s2018.style.backgroundColor ="green";
    call_s2019.style.backgroundColor = "green";
    call_s2020.style.backgroundColor = "green"; 
    call_s2021.style.backgroundColor = "green"; 

    call_G_1.style.backgroundColor = "green";
    call_G_2.style.backgroundColor = "green";
    
    if( department==0 )
        call_EdTech.style.backgroundColor = "red"; 
    if( department==1 )
        call_IRE.style.backgroundColor = "red"; 
        

    if( session == 0 )
        call_s2018.style.backgroundColor = "red"; 
    if( session == 1 )
        call_s2019.style.backgroundColor = "red"; 
    if( session == 2 )
        call_s2020.style.backgroundColor = "red"; 
    if( session == 3 )
        call_s2021.style.backgroundColor = "red";

    if( group == 0)
        call_G_1.style.backgroundColor = "red"; 
    if( group == 1)
    call_G_2.style.backgroundColor = "red"; 
   
 }


 routineShow(department , session , group);