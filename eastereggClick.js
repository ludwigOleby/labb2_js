
//Easter egg when clicking logo
document.getElementById("logo").addEventListener("click", function() {
    document.body.style.backgroundColor = "grey";
    });

// Easter  egg when writing "rofl"

    var Combination = "";
    document.addEventListener("keyup", function(event) {
        if (event.key === 'r') {
            Combination = "1";
        }
        else if (event.key === 'o') {
            if (Combination === "1")
            {
                Combination = "2";
            }
        }
        else if (event.key === 'f') {
            if (Combination === "2")
            {
                Combination = "3";
            }
        }
        else if (event.key === 'l') {
            if (Combination === "3")
            {
                Combination = "4";
                checkCombination();
            }
        }
    });
    function checkCombination() {
        if(Combination === '4') {
          alert('1337 :)');
        } 
     }

