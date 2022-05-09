const user = {
    username: "catanacomics",
    name: "Catana"
}

const content = [
    {
        nickname: "bad.vibes.memes",
        text: "Segue você"
    },
    {
        nickname: "chibirdart",
        text: "Segue você<"
    },
    {
        nickname: "razoesparaacreditar",
        text: "Novo no Instagram"
    },
    {
        nickname: "adorable_animals",
        text: "Segue você"
    },
    {
        nickname: "smallcutecats",
        text: "Segue você"
    }
]


export default function Sidebar(){
    return(
        <div class="usuarios">
            <div class="usuario">
                <img src={`assets/img/${user.username}.svg`} alt={user.username} />
                <div class="texto">
                    <strong>{user.username}</strong> 
                    <p>{user.name}</p>
                </div>
            </div>


            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {content.map((content) => (
                    <div class="sugestao">
                        <div class="usuario">
                        <img src={`assets/img/${content.nickname}.svg`} alt={content.nickname} />
                            <div class="texto">
                                <div class="nome">{content.nickname}</div>
                                <div class="razao">{content.text}</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
                ))}

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
            </div>
        </div>
    )
}