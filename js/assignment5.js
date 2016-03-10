function MenuChoice()
{
	if (document.getElementById("menu").value == "Show Area 1")
	{
		document.getElementById("section1").style.visibility = "visible";
		document.getElementById("section2").style.visibility = "hidden";
	}
	else if (document.getElementById("menu").value == "Show Area 2")
	{
		document.getElementById("section1").style.visibility = "hidden";
		document.getElementById("section2").style.visibility = "visible";
	}
	else
	{
		document.getElementById("section1").style.visibility = "hidden";
		document.getElementById("section2").style.visibility = "hidden";
	}
}