// const mouveMouse= document.querySelector(".mouvemouse")
// window.addEventListener('mousemove', (e)=>{
//     mouveMouse.style.left= e.pageX + "px"
//     mouveMouse.style.top= e.pageY + "px"
// })


const myForm = document.getElementById('myForm');
      myForm.addEventListener('submit', function(e){
        if (confirm("Voulez-vous envoyez ce formulaire maintenant ??")) {
          const name = document.getElementById('nom').value;
                
          alert("Merci " +' '+name+' '+ "pour vos commentaires !!!(MKACG)");
            alert("Envoie reussi....");

        }else{
            alert("Le choix vous appartient !!!")
        }
        e.preventDefault();
      })  

// const headJs = document.getElementById("headJs");
//       headJs.addEventListener('mouseover', function(){
//          headJs.style.backgroundColor = "#122121"
//       })
//       headJs.addEventListener('mouseout', function(){
//          headJs.style.backgroundColor = "#cce1e1"
//       })

const sectionImageProject = document.getElementById('sectionImageProject');
      sectionImageProject.addEventListener('mouseover', function(){
        sectionImageProject.style.backgroundColor = "#050949";
      })

      sectionImageProject.addEventListener('mouseout', function(){
        sectionImageProject.style.backgroundColor = "#0610a0";
      })

const sectionImageProject2 = document.getElementById('sectionImageProject2');
      sectionImageProject2.addEventListener('mouseover', function(){
        sectionImageProject2.style.backgroundColor = "#050949";
      })

      sectionImageProject2.addEventListener('mouseout', function(){
        sectionImageProject2.style.backgroundColor = "#0610a0";
      })