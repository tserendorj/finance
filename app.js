// controller for user interface
var uiController = (function(){
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue:".add__value",
        addBtn: '.add__btn'
    };
    
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstring: function(){
            return DOMstrings;
        }

    }
})();

// controller for finance
var financeController = (function(){
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
   
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            inc:[],
            exp:[]
        },
        totals: {
            inc: 0,
            exp: 0
        }
    }
})();
// controller for con
var appController = (function(uiController, financeController){

    var ctrlAddItem = function(){
        // 1. get value from user interface
        console.log(uiController.getInput())
        // 2. transfer the values to finance controller

        // 3. display the values on user interface

        // 4. calculate budget

        // 5. calculate resiudal amount and display
    };

    var setupEventListenters = function(){
        var DOM = uiController.getDOMstring();

        document.querySelector(DOM.addBtn).addEventListener('click', function(){
            ctrlAddItem();
        })
    
        document.addEventListener('keypress', function(event){
            if(event.which === 13 || event.keyCode === 13){
                ctrlAddItem();
            };
        });
    };

    return {
        init: function(){
            console.log('Application started...');
            setupEventListenters();
        }
    }
    
})(uiController, financeController);

appController.init();
