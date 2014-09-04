   var count=-1;
   /*Has the list of questions and answers*/
   var nextquestion = function() {
    var questions=["3+4","3+2","3+3","35*35","44*11","4*3","5*7","7*9","4+3*7","4*4+4*4-4/4","A group of four people has to cross a bridge. It is dark, and they have to light the path with a flashlight. No more than two people can cross the bridge simultaneously, and the group has only one flashlight. It takes different time for the people in the group to cross the bridge:<br>Annie crosses the bridge in 1 minute,<br>Bob crosses the bridge in 2 minutes,<br>Volodia Mitlin crosses the bridge in 5 minutes,<br>Dorothy crosses the bridge in 10 minutes.<br>What is the shortest time in minutes it can take to cross the bridge?","A school bus travels from Veldhoven to Roosendaal. There are four children in the bus. Each child has four backpacks with him. There are four dogs sitting in each backpack. Every dog has four puppies with her. All these dogs have four legs, with four toes at each leg.<br> What is the total number of toes in the bus?","50/5-7*2+11+3*10/2-2+6*5","5*5+5/5+6*7","1*0+3+5+7*0+0"];
	var answers=["7","5","6","1225","484","12","35","63","25","31","17","5170","50","68","8"];
    //Evaluation
    if(count===-1)
    {
		 document.getElementById("Eval").src="assets/img/next.png";
		 document.getElementById('answer').className="";
		 starttimer();
		  document.getElementById('question').innerHTML=questions[++count % questions.length];
	}
	else if(count<15)
	  {
		 
		  var ans=document.getElementById('answer').value;
		  if(ans===answers[count])
		     {
			   if(count<5)
				 document.getElementById(count).src="assets/img/correct.png";
			else if(count<10)
			     document.getElementById(count).src="assets/img/correct2.png";
			else
			     document.getElementById(count).src="assets/img/correct3.png";
				 noofcorrect++;
			 }
			else
			 document.getElementById(count).src="assets/img/wrong.png";
		  document.getElementById('answer').value="";
		  document.getElementById('question').innerHTML=questions[++count % questions.length];
		  if(count===15)
		     {
				 document.getElementById('answer').className="hidden";
		 document.getElementById('question').innerHTML=sessionStorage.name1+" ,your Score is "+ noofcorrect +" in "+totalSeconds+" seconds";
		 document.getElementById('Eval').className="hidden";
		 document.getElementById('fname').value=sessionStorage.name1;
		 document.getElementById('fid').value=sessionStorage.id;
		 document.getElementById('fcorrect').value=noofcorrect;
		 document.getElementById('ftime').value=totalSeconds;
		 document.getElementById('sub').click();
		 
			 }
	  }
	
	  
     
};
// JavaScript Document