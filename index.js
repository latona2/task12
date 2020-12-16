const myfruit = {

    fruits: null,
    alertfruits: null, 
    dom: { 
        fruitsList:         document.querySelector('.fruits__list'), 
        shuffleButton:      document.querySelector('.shuffle__btn'), 
        filterButton:       document.querySelector('.filter__btn'), 
        sortKindLabel:      document.querySelector('.sort__kind'),
        sortTimeLabel:      document.querySelector('.sort__time'), 
        sortChangeButton:   document.querySelector('.sort__change__btn'), 
        sortActionButton:   document.querySelector('.sort__action__btn'), 
        kindInput:          document.querySelector('.kind__input'), 
        colorInput:         document.querySelector('.color__input'), 
        weightInput:        document.querySelector('.weight__input'), 
        addActionButton:    document.querySelector('.add__action__btn') 
    },

    
    colors: {
        violet: {name: "Фиолетовый", css: "fruit_violet"}, 
        green: {name: "Зеленый", css: "fruit_green"}, 
        red: {name: "Желтый", css: "fruit_red"},
        yellow: {name: "Желтый", css: "fruit_yellow"}, 
        brown: {name: "Коричневый", css: "fruit_brown"}      
    },


    getrandom: function(list) {
        return list[Math.floor(Math.random() * list.length)];
    },


    init: function (fruits_in) {
        this.fruits = fruits_in;
        fruits_in = null; 
   
        this.dom.shuffleButton.addEventListener('click', () => {
            this.sort();
        });


        this.display();
    },


    display: function () {
        
        this.clear();

       
        for(i in this.fruits) {
            let newLi = document.createElement('li');
            newLi.classList.add('fruit__item');
            newLi.classList.add( this.colors[fruits[i].color].css ); 
            newLi.innerHTML = [
                '<div>index: ' + i + '</div>',
                '<div>kind: ' + fruits[i].kind + '</div>',
                '<div>color: ' + this.colors[fruits[i].color].name + '</div>', 
                '<div>weight (кг): ' + fruits[i].weight + '</div>'
            ].join('');
            this.dom.fruitsList.appendChild(newLi); 
        }
    },

   
    clear: function () {
        this.dom.fruitsList.innerHTML = '';             
    },

    sort: function() {
        this.alertfruits = this.fruits; 
        this.fruits.sort(helper.sort); 
        this.display();
        this.fruits = this.alertfruits; 
    }

};


const helper = {

    sort: function(a,b) {
        return Math.random() - 0.5;
    }
}





    let fruits = [
        {"kind": "Мангустин", "color": "violet", "weight": 13},
        {"kind": "Дуриан", "color": "green", "weight": 35},
        {"kind": "Личи", "color": "red", "weight": 17},
        {"kind": "Карамбола", "color": "yellow", "weight": 28},
        {"kind": "Тамаринд", "color": "brown", "weight": 22}
    ];


    myfruit.init(fruits);