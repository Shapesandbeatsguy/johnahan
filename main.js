function preload() {}


   function setup() {
   createCanvas(900, 900);
   video=createCapture(VIDEO);
   video.hide();
   video.size()
   }
   
   function draw() {
   
     fill("black")
     stroke("red")
     circle(50,50,80);

     fill("orange")
     stroke("black")
     rect(90, 40, 460, 20);

     rect(90, 420, 460, 20);

    
     fill("black")
     stroke("red")
     circle(556,50,80);
    
     fill("black")
     stroke("red")
     circle(556,415,80);


     fill("black")
     stroke("red")
     circle(50,415,80);


     
     fill("orange")
     stroke("black")
     rect(526, 90, 40, 287);
    


    fill("orange")
     stroke("black")
     rect(25, 90, 40, 287);

     image(video,80,75,440,320);
   }


   function take_snapshot(){
    save("Image_from_onlineFrame.png" );
   }