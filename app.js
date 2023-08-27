const containerMain = document.getElementById('containerMain');
const containerHeader = document.getElementById('containerHeader');

function lancamentos() {
    containerHeader.innerHTML ='';
    containerMain.innerHTML =`
    <div class="row text-center bg-color-bg mt-5" id="promo">
    <h1 class="mt-5 font-desconto text-dark">NOVIDADES</h1>
    <div class=" col-lg-3 mt-3  col-md-6 col-sm-10">
                        <div class="card text-center ">
                            <div class="card-body ">
                                <img src="https://cdn.awsli.com.br/600x1000/180/180275/produto/12516087/e9f48139f6.jpg"
                                    alt="">
                                <h6 class="text-muted">POKEMON</h6>
                                <p class="card-text">Caneca Pikachu</p>
                                <h4 class="card-title mt-3">R$49,90</h4>
                                <p class="text-primary">Em até 10x sem juros</p>
                                <div>
                                  <button type="button" class="btn btn-outline-warning ">Adicionar ao
                                        carrinho</button><button type="button" class="btn btn-outline-success">Comprar
                                        </button>
                                    </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 mt-3  col-md-6 col-sm-10">
                        <div class="card text-center">
                            <div class="card-body">
                                <img src="https://www.suika.com.br/7560-thickbox_default/boneco-one-piece-roronoa-zoro-log-file-selection-fight-vol-1-bandai-banpresto.jpg"
                                    alt="" class="">

                                <h6 class="text-muted">ONE PIECE</h6>
                                <p class="card-text ">Miniatura Ronoroa Zoro</p>
                                <h4 class="card-title mt-3">R$79,90</h4>
                                <p class="text-primary">Em até 10x sem juros</p>
                                <div>
                                  <button type="button" class="btn btn-outline-warning ">Adicionar ao
                                        carrinho</button><button type="button" class="btn btn-outline-success">Comprar
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-3 mt-3  col-md-6 col-sm-10">
                        <div class="card text-center">
                            <div class="card-body">
                                <img src="https://images-americanas.b2w.io/produtos/4006430212/imagens/camiseta-deadpool-unicornio-geek-nerd-camisa-preta-hq-marvel/4006430474_1_large.jpg"
                                    alt="" class="p-4">
                                <h6 class="text-muted">MARVEL</h6>
                                <p class="card-text">Camiseta Deadpool</p>
                                <h4 class="card-title mt-3">R$119,90</h4>
                                <p class="text-primary">Em até 10x sem juros</p>
                                <div>
                                    <button type="button" class="btn btn-outline-warning ">Adicionar ao
                                        carrinho</button><button type="button" class="btn btn-outline-success">Comprar
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-3 mt-3  col-md-6 col-sm-10">
                        <div class="card text-center">
                            <div class="card-body">
                                <img src="https://loja-naruto.com/cdn/shop/products/U1b18d2aa4f4a4e49baef8707987498160_1024x1024.jpg?v=1638010493"
                                    alt="" class="p-3">
                                <h6 class="text-muted">NARUTO</h6>
                                <p class="card-text">Moletom Itachi Uchiha</p>
                                <h4 class="card-title mt-3">R$119,90</h4>
                                <p class="text-primary">Em até 10x sem juros</p>
                                <div class=" col-sm-12 col-md-12 col-lg-12  d-flex justify-content-around">
                                    <button type="button" class="btn btn-outline-warning ">Adicionar ao
                                        carrinho</button><button type="button" class="btn btn-outline-success">Comprar
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
    <div class=" col-lg-3 mt-3  col-md-6 col-sm-10">
        <div class="card text-center ">
            <div class="card-body ">
                <img src="https://static.zattini.com.br/produtos/camiseta-one-piece-luffy/88/Z76-0975-188/Z76-0975-188_zoom1.jpg?ts=1678810702"
                    alt="">
                <h6 class="text-muted">ONE PIECE</h6>
                <p class="card-text">Camiseta Monkey D Luffy</p>
                <h4 class="card-title mt-3">R$69,90</h4>
                <p class="text-primary">Em até 10x sem juros</p>
                <div>
                    <button type="button" class="btn btn-outline-warning ">Adicionar ao
                        carrinho</button><button type="button" class="btn btn-outline-success">Comprar
                        </button>
                </div>
            </div>

        </div>
    </div>
    <div class="col-lg-3 mt-3  col-md-6 col-sm-10">
        <div class="card text-center">
            <div class="card-body">
                <img src="https://cf.shopee.com.br/file/e55d905859d5ab532d70aa9df58bf721" alt="">

                <h6 class="text-muted">ONE PIECE</h6>
                <p class="card-text ">Moletom Ronoroa Zoro</p>
                <h4 class="card-title mt-3">R$119,90</h4>
                <p class="text-primary">Em até 10x sem juros</p>
                <div>
                    <button type="button" class="btn btn-outline-warning ">Adicionar ao
                        carrinho</button><button type="button" class="btn btn-outline-success">Comprar
                        </button>
                </div>
            </div>
        </div>
    </div>
    <div class=" col-lg-3 mt-3  col-md-6 col-sm-10">
        <div class="card text-center">
            <div class="card-body">
                <img src="https://img.irroba.com.br/fit-in/250x250/filters:format(webp):fill(transparent):quality(80)/helpfull/catalog/novos-cadastros/d-nq-np-624084-mlb46834952203-072021-o.png"
                    alt="">
                <h6 class="text-muted">POKEMON</h6>
                <p class="card-text">Moletom Pikachu</p>
                <h4 class="card-title mt-3">R$119,90</h4>
                <p class="text-primary">Em até 10x sem juros</p>
                <div>
                    <button type="button" class="btn btn-outline-warning ">Adicionar ao
                        carrinho</button><button type="button" class="btn btn-outline-success">Comprar
                        </button>
                </div>
            </div>
        </div>
    </div>
    <div class=" col-lg-3 mt-3  col-md-6 col-sm-10">
        <div class="card text-center">
            <div class="card-body">
                <img src="https://down-br.img.susercontent.com/file/089218019d7d0e2412a4b3714cbda508"
                    alt="">
                <h6 class="text-muted">NARUTO</h6>
                <p class="card-text">Moletom Minato Namikaze</p>
                <h4 class="card-title mt-3">R$119,90</h4>
                <p class="text-primary">Em até 10x
                sem juros</p> 
                <div>
                    <button type="button" class="btn btn-outline-warning ">Adicionar ao
                        carrinho</button><button type="button" class="btn btn-outline-success">Comprar
                        </button>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}