(function(){
    emailjs.init("qCI4-I7Ajpv3FW0Th");
})();

function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("name").value,
        to_name: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send('service_tjeyl9h','template_ij8xybf',tempParams).then(function(res){
        console.log("succes",res.status);
    })
}