import InputPublico from "../inputPublico";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";

export default function Login(){
    return (
        <section className={`paginaLogin paginaPublica`}>
            <div className="logoContainer">
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlterarValor={() => console.log('Digitando email')}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo="password"
                        aoAlterarValor={() => console.log('Digitando senha')}
                    />
                </form>
            </div>
        </section>
    );
}