function run()
{
	var count = 0;
	var three=0,nine=0;
	var n=1,t=1;

	for(count=1;count<=100;count++){

		nine = n * 9;
		three = t * 3;

		if(nine == count)
		{
			document.write("Pluto</br>");
			n++;t++;continue;
		}
		else if(three == count)
		{
			document.write("Earth</br>");
			t++;continue;
		}
		else if(count%5 == 0)
		{
			document.write("Jupiter</br>");
			continue;
		}
		else
		{
			document.write(count+"</br>");
		}
	}
}
