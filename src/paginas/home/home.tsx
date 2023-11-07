import React from 'react';

const Home = () => {

    function showCarDescription(arg0: number): void {
        throw new Error('Function not implemented.');
    }

  return (
    <><div className="fundo1">
          <header className="topo">
              <nav className="main-menu">
                  <ul className="topo">
                      <li><a href="./index.html">Início</a></li>
                      <li><a href="../carrosDisponiveis/carrosDispo.html">Carros Disponíveis</a></li>
                      <li><a href="../reservar/reservar.html">Reservar</a></li>
                      <li><a href="../contato/contato.html">Contato</a></li>
                      <li><a href="../login/login.html">Login</a></li>
                  </ul>
              </nav>
          </header>
          <br />

          <div className="backimg">
              <div className="search-form">
                  <form className="form-container">
                      <label htmlFor="local-retirada" className="form-label">Local de Retirada:</label>
                      <input type="text" id="local-retirada" name="local-retirada" className="form-input" placeholder="Local" />

                      <label htmlFor="data-retirada" className="form-label">Data de Retirada:</label>
                      <input type="date" id="data-retirada" name="data-retirada" className="form-input" />

                      <label htmlFor="horario-saida" className="form-label">Saída:</label>
                      <input type="time" id="horario-saida" name="horario-saida" className="form-input" />

                      <label htmlFor="data-devolucao" className="form-label">Devolução:</label>
                      <input type="date" id="data-devolucao" name="data-devolucao" className="form-input" />

                      <label htmlFor="horario-entrega" className="form-label">Entrega:</label>
                      <input type="time" id="horario-entrega" name="horario-entrega" className="form-input" />

                      <button type="submit" className="form-button">
                          <img src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-bleu.png" alt="Pesquisar" width="24" />
                      </button>
                  </form>
              </div>
              <br /><br /><br />
          </div>

          <h1 className="centro">veiculos mais procurados:</h1>

          <div className="car-carousel-container">
              {/* Carrossel de Imagens */}
              <div className="car-carousel">
                  <button className="prev">&#10094;</button>
                  {/* Carro 1 */}
                  <div className="car" onMouseOver={() => showCarDescription(0)} onMouseOut={() => hideCarDescription(0)}>
                      <img src="https://live.staticflickr.com/65535/53212931054_d506cb11e0_z.jpg" alt="Toyota Corolla" />
                      <div className="car-description">
                          Toyota Corolla: Sinta a Confiança na Estrada!

                          O lendário Toyota Corolla é a escolha perfeita para uma viagem confiável e eficiente. Com sua qualidade incomparável e economia de combustível excepcional, você estará no controle de um dos carros mais confiáveis do mercado. Desfrute de viagens sem preocupações e experimente o conforto e a segurança que apenas o Corolla pode oferecer. Não perca a chance de vivenciar a excelência da Toyota na estrada!
                      </div>
                  </div>
                  {/* Carro 2 */}
                  <div className="car" onMouseOver={() => showCarDescription(1)} onMouseOut={() => hideCarDescription(1)}>
                      <img src="https://live.staticflickr.com/65535/53212544746_878aea35cd_c.jpg" alt="Ford Mustang" />
                      <div className="car-description">
                          Ford Mustang: O Poder que te Move!

                          Prepare-se para sentir a adrenalina correr nas veias enquanto você desliza ao volante do Ford Mustang. Este ícone dos muscle cars americanos oferece um desempenho incrível, com um motor poderoso que ruge de excitação. Se você procura emoção e estilo em sua viagem, o Mustang é a escolha definitiva. Alugue-o hoje mesmo e experimente a sensação de liberdade que só um Mustang pode proporcionar!
                      </div>
                  </div>
                  {/* Carro 3 */}
                  <div className="car" onMouseOver={() => showCarDescription(2)} onMouseOut={() => hideCarDescription(2)}>
                      <img src="https://live.staticflickr.com/65535/53212931064_98b72d1c3b_z.jpg" alt="Volkswagen Golf gti" />
                      <div className="car-description">
                          Volkswagen Golf GTI: Dirigindo com Estilo e Tecnologia!

                          O Volkswagen Golf GTI é muito mais do que apenas um carro compacto. É uma experiência de condução europeia que combina elegância, versatilidade e tecnologia de ponta. Com sua direção suave e manuseio responsivo, o Golf torna cada viagem uma aventura. Explore as estradas com confiança e estilo a bordo do Golf GTI. Alugue o seu e descubra o que é dirigir com classe!
                      </div>
                  </div>
                  {/* Carro 4 */}
                  <div className="car" onMouseOver={() => showCarDescription(3)} onMouseOut={() => hideCarDescription(3)}>
                      <img src="https://live.staticflickr.com/65535/53212853963_1fdb9a6377_c.jpg" alt="Nissan Rogue Specs" />
                      <div className="car-description">
                          Nissan Rogue Specs: Tecnologia e Desempenho de Ponta!

                          Se você busca inovação e desempenho avançado, o Nissan Rogue Specs é a escolha certa. Com recursos de última geração e um design arrojado, este SUV é ideal para aqueles que buscam uma experiência de condução de alto nível. Explore novos horizontes, supere desafios e desfrute da versatilidade incomparável do Rogue Specs. Alugue-o agora e eleve suas viagens a um novo patamar!
                      </div>
                  </div>
                  {/* Carro 5 */}
                  <div className="car" onMouseOver={() => showCarDescription(4)} onMouseOut={() => hideCarDescription(4)}>
                      <img src="https://live.staticflickr.com/65535/53212853933_754e808609.jpg" alt="Jeep Wrangler" />
                      <div className="car-description">
                          Jeep Wrangler: Aventura sem Limites!

                          Prepare-se para explorar a natureza e enfrentar qualquer terreno com o Jeep Wrangler. Este ícone off-road é construído para aventuras ilimitadas, oferecendo desempenho robusto e versatilidade incomparável. Seja em trilhas empoeiradas ou praias paradisíacas, o Wrangler leva você até lá. Liberte seu espírito aventureiro e alugue o Jeep Wrangler para uma viagem épica!
                      </div>
                  </div>
                  <button className="next">&#10095;</button>
              </div>
          </div>

          <h2 className="centro">veiculos mais alugados:</h2>

          <div id="car-list">
              <div className="car-duo">
                  <div className="car">
                      <img src="https://www.imagensempng.com.br/wp-content/uploads/2021/06/03-19.png" alt="Carro 1" width="500" height="500" />
                      <h3>Carro 1</h3>
                      <p>Descrição do carro 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <p>Preço por dia: R$ 147</p>
                      <a href="../reservar/reservar.html">
                          <button>Reservar</button>
                      </a>
                  </div>
                  <div className="car">
                      <img src="https://www.imagensempng.com.br/wp-content/uploads/2021/06/04-21.png" alt="Carro 2" width="480" height="360" />
                      <h3>Carro 2</h3>
                      <p>Descrição do carro 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <p>Preço por dia: R$ 198</p>
                      <a href="../reservar/reservar.html">
                          <button>Reservar</button>
                      </a>
                  </div>
              </div>
              <div className="car-duo">
                  <div className="car">
                      <img src="https://unnionrentacar.com.br/wp-content/uploads/2023/08/chevrolet-brasil-s10-148mk-r6v-ltz-cabinedupla-3-4-frente-branco.png" alt="Carro 3" width="510" height="340" />
                      <h3>Carro 3</h3>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <p>Preço por dia: R$ 220</p>
                      <a href="../reservar/reservar.html">
                          <button>Reservar</button>
                      </a>
                  </div>
                  <div className="car">
                      <img src="https://unidashmlrac.blob.core.windows.net/wp-content/2021/03/i_fiat_doblo.png" alt="Carro 4" width="500" height="320" />
                      <h3>Carro 4</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <p>Preço por dia: R$ 220</p>
                      <a href="../reservar/reservar.html">
                          <button>Reservar</button>
                      </a>
                  </div>
              </div>
          </div>
      </div><br /><br /><div className="foo">
              <footer>
                  <p>&copy; 2023 Locadora Navy</p>
              </footer>


    </div></>

  );
};

export default Home;
