

//h1 contains people entered text and h2 contains number of counts, we are giving an id of count-el to h2 and we will grab this id in script.js file and manipulate this text, as we want to display the number of counts as increment button is clicked
//create the increment button and give id as increment-btn, give onclick attribute and call the increment function
// main steps in js now
//1.initialize count to 0 and grab the count-el element and store in countEl variable and u as js developer can control this element of html now
//2.listen for clicks on the increment button (we used onclick attribute on increment bttn in html which calls the increment function)
//3.increment the count variable when the button is clicked
//4.change the count-el id in the HTML to reflect the new count using countEl.innerText=count (here we replaced the text in countEl with the recent incremented value of count variable)

//5.now we created the save button and give id as save-btn and give onclick attribute and call the save function
//6.grab the save-el id and store in saveEl variable and u as js developer can control this element of html now 
//7.listen for clicks on the save button (we used onclick attribute on save bttn in html which calls the save function)
//8.we append the cuurent count and a dash to the saveEl id using saveEl.textContent= saveEl.textContent+count+" - "; we used text content instead of inner text to get the spaces right
//9. now we need reinitialize the count variable to 0 every time we click the save button
//10. change the count-el id in the HTML to reflect the new count using countEl.innerText=count;
//11.finally we created a flexbox for button so that they appear one below the other and not one next to the other


let count=0;
let countEl=document.getElementById("count-el");//hey html , give me the element with id count-el and u store it in countEl variable  and u as js developer can control this element now
let saveEl=document.getElementById("save-el");//we are storing the element with id save-el in saveEl variable and now you can control this element
function increment()
{
    
    console.log("the button was clicked");
    count=count+1;
    countEl.innerText=count;
}
function save()
{
    saveEl.textContent= saveEl.textContent+count+" - ";
                        //previous entries(string) + current count + -//
    console.log(count);
    count=0;//reinitializing the count variable to 0
    countEl.textContent=count;
}
