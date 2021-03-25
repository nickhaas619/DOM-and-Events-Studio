
window.addEventListener("load", function(){
//requirment 1
    const takeoffButton = document.getElementById('takeoff');
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    
takeoffButton.addEventListener("click", function(){
    let confirmReady = window.confirm("Confirm that the shuttle is ready for takeoff.")
    if (confirmReady === true){
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = "blue";
       shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    }
    else{};
});
// requirment 2
const landButton = document.getElementById('landing');

landButton.addEventListener('click', function(){
window.alert('The shuttle is landing. Landing gear engaged.');
flightStatus.innerHTML = "The shuttle has landed";
shuttleBackground.style.backgroundColor = "green";
shuttleHeight.innerHTML = "0";
});

// requirment 3
const abortButton = document.getElementById('missionAbort');
abortButton.addEventListener('click', function(){
let confirmAbort = window.confirm("Confirm that you want to abort the mission.")
if (confirmAbort === true){
    flightStatus.innerHTML = "Mission aborted.";
    shuttleBackground.style.backgroundColor = "green";
    shuttleHeight.innerHTML = "0";
};
});    
    



//requirment 4
const upButton = document.getElementById('up')
const downButton = document.getElementById('down');
let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');



let rocketIcon = document.getElementById('rocket');
    rocketIcon.style.position= 'absolute'; 
rocketIcon.style.left = '0'; 
rocketIcon.style.bottom = '0';


    
   upButton.addEventListener('click', function(){
       p2 = parseInt(rocketIcon.style.bottom) + 10 +'px';
       rocketIcon.style.bottom = p2

   })
    
       downButton.addEventListener('click', function(){
        p2 = parseInt(rocketIcon.style.bottom) - 10 +'px';
        rocketIcon.style.bottom = p2
    })

    leftButton.addEventListener('click', function(){
        p2 = parseInt(rocketIcon.style.left) - 10 +'px';
        rocketIcon.style.left = p2
    })

    rightButton.addEventListener('click', function(){
        p2 = parseInt(rocketIcon.style.left) + 10 +'px';
        rocketIcon.style.left = p2
    })
    



   
    
    














});