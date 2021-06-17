function preload(){

}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(220,200);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    fill(100,150,110);
    rect(70,70,260,260,10);
    for(a = 0 ; a<9 ;a++){
        fill(255,255,255);
        circle(90+25*a + 3*a,85,20,20,5);
    }
    for(b = 0 ; b<9 ; b++){
        circle(90,115+25*b,20,20,5);
    }
    for(c = 0 ; c<8 ;c++){
        circle(315-25*c - 3*c,315,20,20,5);
    }
    for(d = 0 ; d<8 ; d++){
        circle(315,110+25*d,20,20,5);
    }
    tint(tint_color);
    image(video,100,100,200,200);
    
    //circle(100,100,100,100,10);
    noStroke();
    fill(9,255,255);
    for(i = 0 ; i<20 ; i++){
        
        rect(100,+ 10*i + 95,33-1.5*i,12);
    }
    for(l = 0 ; l < 20 ; l++){
        rect(100 + 10*l,300,12,-33+1.5*l);
    }
    for(k = 0 ; k < 20 ; k++){
        rect(300,100 + 10*k,-33+1.5*k,12);
    }
    for(j = 0 ; j < 20 ; j++){
        rect(100 + 10*j,100,12,33-1.5*j);
    }
    ///
    
    
}
function filterTint(){
    tint_color = document.getElementById("Color").value;
}

function take_snapshot(){
    save('IMG.png');
}

