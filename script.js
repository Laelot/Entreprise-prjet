function redirectUser() {
    var requestType = document.getElementById("requestType").value;
    var redirectButton = document.getElementById("redirectButton");

    if (requestType === "demandeentreprise") {
        // Rediriger vers le lien de formulaire pour les vacances
        window.location.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=SAQmcanxKUe2MEiC5NxY9c2pkBQP4p1EoBOnSEUa6fVUNU8wUUtUNFpURTBONlU5UlNFNjRHTUIwQS4u";
   
    }
}
