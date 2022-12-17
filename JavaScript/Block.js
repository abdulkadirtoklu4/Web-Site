// Kullanıcı Engelleme Butonu
var Engelle = document.getElementById("engelleButton");
function KullanıcıEngelle()
{
    if(Engelle.click = true)
    {
        if(document.getElementById("engelleButton").innerHTML == "Kullanıcıyı Engelle")
        {
            alert("Kullanıcı Engellendi");
            document.getElementById("engelleButton").innerHTML = "Engeli Kaldır";
        }
    }
    
    if(document.getElementById("engelleButton").innerHTML == "Engeli Kaldır")
    {
        alert("Kullanıcı Engeli Kaldırıldı");
        document.getElementById("engelleButton").innerHTML = "Kullanıcıyı Engelle";
    }

}