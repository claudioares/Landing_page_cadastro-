import './styles.css'
import logo from "../assets/logo.png";
import i01 from "../assets/icon_client.png";
import i02 from "../assets/icon_fiel.png";
import i03 from "../assets/icon_beneficios.png";
import imgComprando from "../assets/comprando.png";

function Page() {


  return (
    <div className="container_page">
      <div className='content_page'>
        <div className="content_logo">
          <img 
            className="logo"
            src={logo} 
          />
        </div>

        <div className="content_division">
          <div className='content_left'>
            <div className='content_span'>
              <h3>Cliente fidelidade:</h3>
              <span>Como fazer sua compra?</span>
              <div className='line' />
              <strong className='span'>Neste E-book você vai aprender:</strong>
            </div>

            <div className='content_explications'>
              <div className='span_icons'>
                <img src={i01} />
                <span>O que são programas fidelidade</span>
              </div>
              <div className='span_icons'>
                <img src={i02} />
                <span>Tutorial prático para se tornar um cliente fidelidade</span>
              </div>
              <div className='span_icons'>
                <img src={i03} />
                <span>Dicas de como usar seus beneficios fidelidade</span>              
              </div>
            </div>
          </div>

          <div className='content_rigth'>
            <img className='img_comprando' src={imgComprando} />
            <div className='content_form'>
              <p className='p'>
                Preenchar suas informaçães para ter acesso ao nosso ebook especial
              </p>
              <form className='form'>
                <div className='cell_form'>
                  <div className='label'>
                    <label for='name'>Nome*</label>
                  </div>
                  <input type='text' id='name'/>
                </div>

                <div className='cell_form'>
                  <div className='label'>
                    <label for='email'>Email*</label>
                  </div>
                  <input type='email' id='email'/>
                </div>

                <div className='cell_form'>
                  <div className='label'>
                    <label for='celular'>Celular*</label>
                  </div>
                  <input type='text' id='celular'/>
                </div>

                <div className='cell_form'>
                  <div className='label'>
                    <label for='instagram'>Instagram</label>
                  </div>
                  <input type='text' id='instagram'/>
                </div>

                <div className='radio'>
                  <div className='label radio'>
                    <span>Você indicaria a LIZBETH?</span>
                  </div>
                  <div className='content_radio'>
                    <label for='sim'>Sim</label>
                    <input type='radio' id='sim' name='acept_input' value='sim'/>
                
                    <label for='nao'>Não</label>
                    <input type='radio' id='nao' name='acept_input' value='sim'/>
                  </div>
                </div>

                <div className='content_radio_end'>
                  <input type='checkBox' id='aceit_submit'/>
                  <p className='radio_end'>
                    Sim, ao informar meu email, aceito receber os conteúdos
                    da LIZBETH e compreendo que posso me descadastrar a qualquer
                    momento.
                  </p>
                </div>
                <button>Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
