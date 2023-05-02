function sendMail(){
    var params = {
        name: document.getElementById("free-name").value ,
        email: document.getElementById("free-email").value ,
        mobile: document.getElementById("free-num").value ,
        company: document.getElementById("free-company").value ,
        technology: document.getElementById("free-tech").value ,
        link: document.getElementById("free-link").value ,
        location: document.getElementById("free-location").value ,
        gender: document.getElementById("free-gender").value ,
        experience: document.getElementById("free-exp").value ,
        work: document.getElementById("free-work").value ,
        freelance: document.getElementById("free-freelance").value ,
        file: document.getElementById("free-file").value ,
        text: document.getElementById("free-text").value ,
    };
    
    const serviceID = "service_cfykjf7";
    const templateID = "template_w3nw9ge"
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById("free-name").value = "";
            document.getElementById("free-email").value = "";
            document.getElementById("free-num").value = "";
            document.getElementById("free-company").value = "";
            document.getElementById("free-tech").value = "";
            document.getElementById("free-link").value = "";
            document.getElementById("free-location").value = "";
            document.getElementById("free-gender").value = "";
            document.getElementById("free-exp").value = "";
            document.getElementById("free-work").value = "";
            document.getElementById("free-freelance").value = "";
            document.getElementById("free-file").value = "";
            document.getElementById("free-text").value = "";
            console.log(res);
            alert("Thank you for joining our Community :) We'll contact you Soon..");
        })
        .catch((err) => console.log(err));
}