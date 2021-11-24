function HtmlElement () {
I
    this.click = function() {
    console.log( 'clicked' );
    }
}

HtmlElement.prototype.focus = function(){
console.log ('focued') ;
}

function HtmlSelectElement (items = []) {
this.items = items;

this.addItem = function(item) {
this.items.push(item) ;
}

this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
    }
 }

HtmlSelectElement.prototype = new HtmlElement() ;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
// new HtmlSelectElement.prototype.constructor()
// new HtmlSelectElement ()
