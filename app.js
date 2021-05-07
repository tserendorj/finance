// controller for user interface
var uiController = (function(){
    x = 100;
    function add(y){
        return x + y
    };

    return {
        publicAdd: function(a){
            a = add(a);
            console.log('received value: ' + a)
        }
    }
})();

// controller for finance
var financeController = (function(){
   
})();
// controller for con
var appController = (function(uiController, financeController){

    var ctrlAddItem = function(){
        // 1. get value from user interface

        // 2. transfer the values to finance controller

        // 3. display the values on user interface

        // 4. calculate budget

        // 5. calculate resiudal amount and display
    };

    document.querySelector('.add__btn').addEventListener('click', function(){
        ctrlAddItem();
    })

    document.addEventListener('keypress', function(event){
        if(event.which === 13 || event.keyCode === 13){
            ctrlAddItem();
        };
    });
    
})(uiController, financeController);
