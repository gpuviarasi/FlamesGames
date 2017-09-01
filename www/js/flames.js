
function counter( value )
{
	if ( value != true )
		return value;
}
function alpha( value )
{
	var re=/[a-zA-Z]/;
	if (re.test(value))
		return value;
}
function flamesG( s1 , s2 )
{
	if (s1 == "" | s2 == "")
		return;
	
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();
	alert(s1);
	alert(s2);
	var f = ["Friendly bonding with ","Lively comrade with ","Affection for lifetime for ","Mutual Connect with ","Enemity  for ","Sisterly Bond towards "];
	var im =["rose4.jpg","rose1.jpg","rose3.jpg","rose2.jpg","rose6.jpg","roses.jpg"];
	var a1 = Array.from(s1);
	var a2 = Array.from(s2);
	var as1 = a1.filter(alpha);
	var as2 = a2.filter(alpha);
	as1.sort();
	as2.sort();
	alert("after sort");
	for ( var i = 0 ; i < as2.length ; i++)
	{
		var ind = as1.indexOf( as2[ i ] );
		if ( ind != -1 )
		{
			as1[ ind ] = as2[ i ] = true;
		}
	}
	var arrtemp = as1.filter(counter);
    var l1 = arrtemp.length;
	arrtemp = as2.filter(counter);
	var l2  = arrtemp.length;
	count1 = l1 + l2;
	count = count1;
	var sf ="flames";
	sf = Array.from(sf);
	while ( sf.length > 1 )
    {
        while ( count1 > sf.length )
           count1 = count1 - sf.length;
	    sf.splice(--count1 , 1)
		if ( count1 != sf.length)
        {
			ssf = sf.join("");
			suffix = ssf.substring( count1 , sf.length);
            prefix = ssf.substring ( 0 , count1 );
            var full = suffix + prefix;
            sf = Array.from(full);
		}      
         count1 = count;
		
   } 
	for ( i = 0 ; i < f.length ; i++)
    {    
      f[ i ] = f[ i ].toLowerCase();
      var ch1 =  f[ i ].charAt(0);
      if (sf[0] == ch1)
	  {
		 var x = document.getElementById("myimg");
		 x.setAttribute('style', 'display:block;');
		 x.setAttribute("src", im[ i ]);
		 var c = document.getElementById("fg");
		 c.innerHTML = s1 + "  has a " + f[ i ]  + s2 +"!!!!";
		 
		 break;
	  }
               
    }  
}
