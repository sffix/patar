let a=0;
let b=0;
function vanish(){
    if(a==0){
        document.getElementById("img1").style.display="none";
        document.getElementById("dis1").style.display="block";
        a=1;
    }
}
    function vanish2(){
        if(a==1){
            document.getElementById("img1").style.display="block";
            document.getElementById("dis1").style.display="none";
            a=0;
        }
    }
    function vanish3(){
        if(b==0){
            document.getElementById("img2").style.display="none";
            document.getElementById("dis2").style.display="block";
            b=1;
        }
    }
        function vanish4(){
            if(b==1){
                document.getElementById("img2").style.display="block";
                document.getElementById("dis2").style.display="none";
                b=0;
            }
        }