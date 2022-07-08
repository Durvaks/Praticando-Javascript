var projeto = document.querySelector(".projeto");

        /*Script Calculadora*/

        function chamarcalculadora(){
        projeto.innerHTML = `
        <div id="calculadora">
        <input type="text" name="" id="" class="display" value="0">
        <button>AC</button><button onclick="limp()">C</button><button>%</button><button onclick="calc(4)">/</button>
        <button onclick="but(7)">7</button><button onclick="but(8)">8</button><button onclick="but(9)">9</button><button onclick="calc(1)">x</button>
        <button onclick="but(4)">4</button><button onclick="but(5)">5</button><button onclick="but(6)">6</button><button onclick="calc(2)">-</button>
        <button onclick="but(1)">1</button><button onclick="but(2)">2</button><button onclick="but(3)">3</button><button class="mais" onclick="calc(3)">+</button>
        <button onclick="but(0)">0</button><button>.</button><button onclick="equal()">=</button>
        </div> 
        `;
        }


        let display = document.querySelector(".display")
        let valor1 = 0
        let inival = 0
        let typedef = 0
        function limp(){
            display.value = 0
       }
        function but(val){
            if (Number(display.value) === inival) {
                display.value = ""
            }
            display.value = display.value + val
       }
       function calc(key){
            valor1 = display.value
            display.value = 0
            typedef = key
       }
       function equal(){
           if (typedef == 1) {
            console.log(typedef)
            display.value = Number(valor1) * Number(display.value)
           }
           if (typedef == 2) {
            console.log(typedef)
            display.value = Number(valor1) - Number(display.value)
           }
           if (typedef == 3) {
            console.log(typedef)
            display.value = Number(valor1) + Number(display.value)
           }
           if (typedef == 4) {
            console.log(typedef)
            display.value = Number(valor1) / Number(display.value)
           }
            valor1 = 0
            typedef = 0
            inival = Number(display.value)
       }