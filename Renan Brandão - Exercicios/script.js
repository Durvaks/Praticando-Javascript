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
            
        let valor1 = 0;
        let inival = 0;           
        let typedef = 0;

        function but(valor){
            if (Number(document.querySelector(".display").value) == inival) {
                document.querySelector(".display").value = "";
            }
            document.querySelector(".display").value += valor
       }
       function limp(){
        document.querySelector(".display").value = 0
   }
       function calc(key){
            valor1 = document.querySelector(".display").value
            document.querySelector(".display").value = 0
            typedef = key
       }
       function equal(){
           if (typedef == 1) {
            console.log(typedef)
            document.querySelector(".display").value = Number(valor1) * Number(document.querySelector(".display").value)
           }
           if (typedef == 2) {
            console.log(typedef)
            document.querySelector(".display").value = Number(valor1) - Number(document.querySelector(".display").value)
           }
           if (typedef == 3) {
            console.log(typedef)
            document.querySelector(".display").value = Number(valor1) + Number(document.querySelector(".display").value)
           }
           if (typedef == 4) {
            console.log(typedef)
            document.querySelector(".display").value = Number(valor1) / Number(document.querySelector(".display").value)
           }
            valor1 = 0
            typedef = 0
            inival = Number(document.querySelector(".display").value)
       }


       /*Script cadastrar produtos */

       function chamarCadProdutos(){
            projeto.innerHTML = `
            <div class="cadastro-produtos">
            <label for="nome">Nome:</label>
            <input type="text" id="nome">
            <label for="email">E-mail:</label>
            <input type="email" id="email">
            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone">
            </div>
            <input class="botaocad botao" type="button" value="Cadastrar" onclick="cadastrarProduto()">
            <input class="botaovis botao" type="button" value="Visualizar Produtos" onclick="listarProdutos()">
            <div class="listaDeProdutos">
            <table class="tabela">
            <thead>
                <tr><th>Codigo</th><th>Nome</th><th>E-mail</th><th>Telefone</th></tr>
            </thead>
            <tbody class="corpoTabela">
                                    
            </tbody>
        </table>
            </div>    
            `;            
            }

        let listaDeCadastro = []; /* array - lista dos usuarios*/

       function cadastrarProduto(){ /*função para adicinoar um novo cadastro*/
        if(document.querySelector("#nome").value == null || !isNaN(document.querySelector("#nome").value)){
            alert("Preencher dados corretos no campo Nome")
            return
        }
        if(document.querySelector("#email").value == null || !isNaN(document.querySelector("#email").value)){
            alert("Preencher dados corretos no campo E-mail")
            return
        }
        if(document.querySelector("#telefone").value == null || isNaN(document.querySelector("#telefone").value)){
            alert("Preencher dados corretos no campo Telefone")
            return
        }
            listaDeCadastro.push(
                {
                "codigo": listaDeCadastro.length+1,
                "nome": document.querySelector("#nome").value,
                 "email": document.querySelector("#email").value,
                 "telefone": document.querySelector("#telefone").value                         
                }
                );
        document.querySelector("#nome").value = null;
        document.querySelector("#email").value = null;        
        document.querySelector("#telefone").value = null;
        listarProdutos();
       }
       function listarProdutos(){
        var tela = "";
        for (let i = 0; i < listaDeCadastro.length; i++){
            tela += `<tr><td>${listaDeCadastro[i].codigo}</td><td>${listaDeCadastro[i].nome}</td><td>${listaDeCadastro[i].email}</td><td>${listaDeCadastro[i].telefone}</td></tr>`;
        }
        document.querySelector(".corpoTabela").innerHTML = tela;
       }