import Content from "./Content";
import FooterMobile from "./FooterMobile";

export default function Body(){
    return (
        <div class="corpo">
            <div class="esquerda">
                <Content />
                <FooterMobile />
            </div>
        </div>
    )
}