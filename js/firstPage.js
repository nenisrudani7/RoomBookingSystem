window.onload
{
	document.getElementById("dropdownMenu").classList.toggle("show");
}

function myFunction() {
    document.getElementById("amount").classList.toggle("show");
}

window.onclick = function(event)
{
  if (!event.target.matches('.dropbtn')) 
  {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++)
	{
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show'))
	 {
        openDropdown.classList.remove('show');
     }
    }
  }
}

function menuDissapear(amount)
{
	document.getElementById("dropdownMenu").classList.toggle("show");
	instruction.innerText = "Please fill out the forms depending on the day and time you wish to book your rooms. Press complete when you finish."
	
	for (var index = 0; index < amount; index++)
	{
		if (index == 0)
		{
			document.getElementById("book1").style.display = "grid";
		}
		if (index == 1)
		{
			document.getElementById("book2").style.display = "grid";
		}
		if (index == 2)
		{
			document.getElementById("book3").style.display = "grid";
		}
		if (index == 3)
		{
			document.getElementById("book4").style.display = "grid";
		}
		if (index == 4)
		{
			document.getElementById("book5").style.display = "grid";
		}
		if (index == 5)
		{
			document.getElementById("book6").style.display = "grid";
		}
		if (index == 6)
		{
			document.getElementById("book7").style.display = "grid";
		}
		if (index == 7)
		{
			document.getElementById("book8").style.display = "grid";
		}
		if (index == 8)
		{
			document.getElementById("book9").style.display = "grid";
		}
		if (index == 9)
		{
			document.getElementById("book10").style.display = "grid";
		}
		
	}
}