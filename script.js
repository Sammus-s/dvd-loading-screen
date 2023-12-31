let logoX, logoY, Xspeed = 1, Yspeed = 1, logoHueAngle = 0

imgLogo = document.getElementById('DVD_logo')
divDisplay = document.getElementById('display')


function startUp(){      
    imgLogo.style.top = (divDisplay.offsetHeight - imgLogo.offsetHeight)/2 + 'px'
    imgLogo.style.left = (divDisplay.offsetWidth - imgLogo.offsetWidth)/2 + 'px'
}

function moveLogo(){
    imgLogo.style.top = parseInt(imgLogo.style.top) + Yspeed + 'px'
    
    imgLogo.style.left = parseInt(imgLogo.style.left) + Xspeed + 'px'

    handleColision()
}

function handleColision(){        
    //Vertical Colision
    if ((parseInt(imgLogo.style.top) < 0 && Yspeed < 0) || (parseInt(imgLogo.style.top) + parseInt(imgLogo.offsetHeight) >= divDisplay.offsetHeight && Yspeed > 0)) {        
        Yspeed *= -1
        changeLogoColor()
    }    
    
    //Horizontal Colision
    if ((parseInt(imgLogo.style.left) < 0 && Xspeed < 0) || (parseInt(imgLogo.style.left) + parseInt(imgLogo.offsetWidth) >= divDisplay.offsetWidth && Xspeed > 0)) {        
        Xspeed *= -1
        changeLogoColor()
    }
}

function changeLogoColor(){
    logoHueAngle += 100
    imgLogo.style.filter = `saturate(500%) hue-rotate(${logoHueAngle}deg)`    
}

startUp()
var animation = setInterval(moveLogo,5);