/**
* A Node represents an HTML Element. A node can have a tag name,
* a list of CSS classes and a list of children nodes.
*/
class Node {

  constructor(tag, children, classes, id) {
    // Tag name of the node.
    this.tag = tag;
    // Array of CSS class names (string) on this element.
    this.classes = classes;
    // Array of child nodes.
    this.children = children; // All children are of type Node
    // for id
    this.id =id;
  }
  
  /**
  * Returns descendent nodes matching the selector. Selector can be 
  * a tag name or a CSS class name.
  * 
  * For example: 
  * 
  * 1.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `span` should return 3 span nodes in this order
  * span-1 -> span-2 -> span-3.
  *
  * 2.
  * <div> 
  *   <span id="span-1" class="note"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `.note` should return one span node with `note` class.
  *
  * 3.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <article>
  *     <div>
  *       <span id="span-3"></span>
  *     </div>
  *   </article>
  * </div>
  * Selector `div span` should return three span nodes in this order
  * span-1 -> span-2 -> span-3.
  * 
  * @param {string} the selector string.
  * @returns {Array} Array of descendent nodes.
  * @public
  */

   recur=(selector,parentNode,result)=>{
    // implemented for loop on the children
    for(let i = 0;i<parentNode.children.length;i++){ 
      // used ternary operator to check the conditions
      // checking the tag name as well as if the selector is inside the class array
      // classes.includes will return true/false values if selector is present inside it.
      // selector.slice will slice the class string => selector = ".note" selector.slice(1,selector.length)="note"
      (selector === parentNode.children[i].tag||parentNode.children[i].classes.includes(selector.slice(1,selector.length)))
        ?result.push(parentNode.children[i].id)
        :null;
      (parentNode.children.length)
      // Running the recursion function
        ?result = this.recur(selector,parentNode.children[i],result)
        :null;      
    }
    return result; 
  } 


  search(selector) {

        // Error Handling
        try{
          return this.recur(selector,this,[]);
        }
        catch{
          // Catching errors in case if there is no selector value passed or if the selector is not passed as a String
          if(selector==null) return  "You have not inserted a selector!";
          if(typeof(selector)!=String) return "You have inserted invalid input!";
        }
  }

}

// variables Node(tag, children, classes, id)
let p1 = new Node('p',[],['sub1-p1',"note"],"para-1");  
let span3 = new Node('span',[],['sub1-span3'],'span-3');
let divNode2 = new Node('div',[p1,span3],['subCOntainer1'],'div-2');

let label1 = new Node('label',[],[],'lbl-1');
let section1 = new Node('section',[label1],[],'sec-1');
let divNode3 = new Node('div',[section1],['subContainer2'],'div-3');

let span4 = new Node('span',[],['mania'],'span-4');
let span5 = new Node('span',[],['note','mania'],'span-5');
let divNode4 = new Node('div',[span4,span5],[],'div-4');

let span1 = new Node('span',[],['note'],'span-1');
let span2 = new Node('span',[],[],'span-2');

let divNode1 = new Node('div',[span1,span2,divNode2,divNode3,divNode4],['mainContainer'],'div-1');

let randomNode = new Node('span',[],['randomSpan'],'span-6');

let body = new Node('body',[divNode1,randomNode],[],'content');



// Testing
console.log("Started...");
// Test case 1 -
console.log("Test case 1")
console.log(divNode1.search("span"));
// Test case 2 -
console.log("Test case 2")
console.log(divNode1.search(".note"));
// Test case 3 -
console.log("Test case 3")
console.log(divNode1.search("label"));
// Test case 4 -
console.log("Test case 4")
console.log(p1.search(".note"));
// Test case 5 -
console.log("Test case 5")
console.log(divNode1.search("div"));
// Test case 6 -
console.log("Test case 6")
console.log(randomNode.search("div"));
// Test case 7 -
console.log("Test case 7")
console.log(divNode2.search("section"));
// Test case 8 -
console.log("Test case 8")
console.log(body.search());
// Error conditions need to be handled
// invalid input need to be handled
// Test case 9 -
console.log("Test case 9")
console.log(body.search("section"));
// Test case 10 -
console.log("Test case 10")
console.log(body.search("div span"));




/*
  Code Explanation for the above solution:

  1. We have to find descendent nodes with reference to the parent and also it should match the selector
  2. I created a recur function that will be used as a helper function inside the main search function and contains the actual logic of the program
  3. This recur function takes three parameters 
      a. selector: passed by the user
      b. parentnode: I have used "this" keyword which will point towards the instance of the object and will pass the information with respect to
                     that instance.
      c. an empty array which used to store the results.
  4. First I have initialized a for loop to loop on the length of the childrens inside the parentnode.
  5. After that I am checking if the selector which needs to be found is present as a parameter to the descendent nodes
  6. For the class selector which can be an array of classes, I have defined .includes method of the array class which returns true if the variable 
     is inside the array else it will return false.
  7. For tag selector I have just checked whether the selector matches the tag element with respect to that selector.
  8. Recursion Function: 
     a. Let's consider the case given as an example. 
     b. In first iteration, parentnode is set as div and we have to find if span inside the div or not.
     c. I am now taking selector as span and passing an empty array to the program to use it for storing the result.
     d. In the first iteration it will go through the first children of div which is span and since span is matching with the selector we have passed
        for referrence, it will append the id with respect to that span element to the result. So now result = ['span-1'] 
     e. Now it will check if the children wrt to parent element has length or not, so if the length exists it will return the Truthy value and the 
        condition will be executed else it will return the falsy value.
     f. In this case since the parent node (div) has three children, it will go inside the if statement and run the same function again for the 
        1st children that is span. Now it will check if the span has any children or not, and since there are no children inside it the for loop wont
        execute and it will the previous result and the funtion will store the result. So now result = ['span-1']
     g. Now it will go to the parentnode again, i=1, go to the next element, tag name matches the selector, it will push the selector to result
        result = ["span-1","span-2"], it will now check if that span element has any children or not, since it has no children it will store the same
        result recursively. 
     h. Now it will take the initial parent element again for i=2, tag name doesnt match with the selector, but irrespective of whether the tag matches 
        the selector we have to go inside that node to check if there are children are not. Since the div element has one children it will check for 
        that child element. Since the child element matches with the selector it will push it's ID to the result, now result = ['span-1','span-2','span-3']
     i. It will again check whether there are any children for that span element or not, since there are no children, the loop wont execute for that children 
        so it will return the same result. 
     f. In this way all the parent elements are covered and result = ["span-1","span-2","span-3"]
  9. Complexity Analysis:
     a. Time : I have used one for loop for iterating on an array of N elements, so the time complexity is O(N)
     b. Space : I am passing a result array every time to the function which will take N elements into it, so the space complexity is O(N)    
  */

