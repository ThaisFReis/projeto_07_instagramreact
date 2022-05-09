import Stories from "./Stories"
import Post from "./Posts"
import Sidebar from "./Sidebar"

const  story = [
    {username: "9gag"},
    {username: "meowed"},
    {username: "barked"},
    {username: "nathanwpylestrangeplanet"},
    {username: "wawawicomics"},
    {username: "respondeai"},
    {username: "filomoderna"},
    {username: "memeriagourmet"}
]

const post = [
    {
        username: "meowed",
        imgUsername: "assets/img/meowed.svg",
        img: "assets/img/gato-telefone.svg",
        like: "respondeai",
        text: "outras 101.523 pessoas"
    },

    {
        username: "barked",
        imgUsername: "assets/img/barked.svg",
        img: "assets/img/dog.svg",
        like: "adorable_animals",
        text: "outras 99.159 pessoas"
    },

    {
        username: "meowed",
        imgUsername: "assets/img/meowed.svg",
        img: "assets/img/gato-telefone.svg",
        like: "respondeai",
        text: "outras 101.523 pessoas"
    },
]

export default function Content(){
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    {story.map((story) => (
                        <Stories username={story.username} />
                    ))}
                </div>

                <div class="posts">
                    {post.map((post) => (
                        <Post user={post.username} imgUsername={post.imgUsername} img={post.img} like={post.like} text={post.text} />
                    ))}
                </div>


            </div>

            <div class="sidebar">
                <Sidebar />
            </div>
        </div>
    )
}