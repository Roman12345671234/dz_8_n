R=0;
    DI=document.getElementsByTagName("h3");
    DIL=DI.length;
    function A(){
    for(i=0; i-DIL; i++){DIS=DI[ i ].style;
    DIS.position='relative';
    DIS.left=(Math.sin(R+i) *5)+"px";
    DIS.top=(Math.cos(R+i) *5)+"px"}
    R++;}
    setInterval('A()',100);
