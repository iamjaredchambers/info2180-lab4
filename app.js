window.onload = function (e)
{
      /*var superArray = <?php echo _encode($superheroes); ?> ;*/
       var superName = document.getElementById("superInput").value;
       var superRequest = new XMLHttpRequest();
       var cleanInput = sanitizeString(superName);
       var result1 = document.getElementById("result");
       var url = "http://localhost/info2180-lab4/superheroes.php?q="
       var button = document.querySelector("button")
       superRequest.onreadystatechange = button.addEventListener("click", function(e){
        console.log("This button has been clicked!");
        if (superRequest.readyState === XMLHttpRequest.DONE)
       {
         if (superRequest.status === 200)
         {
            var response = superRequest.responseText;
            result1.getElementById("superInput").innerHTML = this.responseText;
         }else{
           alert('There was a problem with the request.');
         }
       }
      });
        superRequest.open("GET", url+cleanInput, true);
          
        superRequest.send();

      
};  

