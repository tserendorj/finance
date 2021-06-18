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
        },

        addListItem: function(item, type){
            // create html which creates inc, exp
            var html, list;
            if(type === 'inc'){
                list = '.income__list';
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%DESC%</div><div class="right clearfix"><div class="item__value">%VALUE%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else {
                list = '.expenses__list';
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%DESC%</div><div class="right clearfix"><div class="item__value">%VALUE%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            // Replace the HTML of INC, EXP
            html = html.replace('%id%', item.id);
            html = html.replace('%DESC%', item.description);
            html = html.replace('%VALUE%', item.value);
            // INSERT the HTML
            document.querySelector(list).insertAdjacentHTML('beforeend', html);

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

            return item;
        }
    }
})();
// controller for con
var appController = (function(uiController, financeController){

    var ctrlAddItem = function(){
        // 1. get value from user interface
        var input = (uiController.getInput());
        // 2. transfer the values to finance controller
        var item = financeController.addItem(input.type, input.description, input.value);
        // 3. display the values on user interface
        uiController.addListItem(item, input.type);
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
