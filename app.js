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
        items: {
            inc:[],
            exp:[]
        },
        totals: {
            inc: 0,
            exp: 0
        }
    }

    return {
        addItem: function(type, desc, val){
            var item, id;

            if(data.items[type].length === 0) id = 1;
            else {
                data.items[type][data.items[type].length - 1].id + 1
            }

            if(type === 'inc'){
                item = new Income(id, desc, val)
            } else {
                item = new Expense(id, desc, val)
            }

            data.items[type].push(item);
        }
    }
})();
// controller for con
var appController = (function(uiController, financeController){

    var ctrlAddItem = function(){
        // 1. get value from user interface
        var input = (uiController.getInput());
        // 2. transfer the values to finance controller
        financeController.addItem(input.type, input.description, input.value);
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
