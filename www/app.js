
function input(x){
    document.getElementById("display").value+=x;
   
}


function result(){
    var x = document.getElementById("display").value;

    document.getElementById("display").value = eval(x);
}



var mic = document.getElementById('b');
mic.onclick = () => {

// Handle results
function startRecognition(){
    window.plugins.speechRecognition.startListening(function(result){
        // Show results in the console
        console.log(result);

        document.getElementById("display").value+=x;
        document.getElementById("display").value = eval(x);
       


    }, function(err){
        console.error(err);
    }, {
        language: "en-US",
        prompt: "Whats up?",
        showPopup: true,
        showPartial: true
        
    });
    
}

// Verify if recognition is available
window.plugins.speechRecognition.isRecognitionAvailable(function(available){
    if(!available){
        console.log("Sorry, not available");
    }

    // Check if has permission to use the microphone
    window.plugins.speechRecognition.hasPermission(function (isGranted){
        if(isGranted){
            startRecognition();
        }else{
            // Request the permission
            window.plugins.speechRecognition.requestPermission(function (){
                // Request accepted, start recognition
                startRecognition();
            }, function (err){
                console.log(err);
            });
        }
    }, function(err){
        console.log(err);
    });
    
}, function(err){
    console.log(err);
});


window.plugins.speechRecognition.getSupportedLanguages(function(data){
    console.log(data); // ["es-ES","de-DE","id-ID" ........ ]
}, function(err){
    console.error(err);
});
window.plugins.speechRecognition.stopListening(function(){
    // No more recognition
}, function(err){
    console.log(err);
});

}
// function playVibrate() {
//     var u = new SpeechSynthesisUtterance();
//     var x = document.getElementById("display");
//     var txt = "";
//     txt = x.elements[0].value
//     u.text = txt;
//     u.lang = 'en-US';
//     speechSynthesis.speak(u);      
//     navigator.notification.vibrate(2000);
//     document.getElementById("display").reset();
//   }




