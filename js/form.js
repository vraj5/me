function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        company: document.getElementById("company").value ,
        mobile: document.getElementById("mobile").value ,
        content: document.getElementById("content").value ,
        functions: document.getElementById("functions").value ,
        state: document.getElementById("state").value ,
        experience: document.getElementById("experience").value ,
        extra: document.getElementById("extra").value ,
    };
    
    const serviceID = "service_l0rsprq";
    const templateID = "template_nxhqlwf"
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("company").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("content").value = "";
            document.getElementById("functions").value = "";
            document.getElementById("state").value = "";
            document.getElementById("experience").value = "";
            document.getElementById("extra").value = "";
            console.log(res);
            alert("Your message sent Successfully :) We'll contact you Soon..");
        })
        .catch((err) => console.log(err));
}