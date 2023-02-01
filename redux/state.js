import {RenderTree} from "../render";

let state = {


    FlowbarPage: {
        UsersNamePost: [
            {
                id: 0,
                name: "Kerjik",
                like: 3,
                src: "https://showgamer.com/storage/uploads/news/2021-09-09/fgGTjdOiJS821g9w7Sakmi9SDuNQ9iXwLUW0VcBj.jpg"
            },
            {   id: 1,
                name: "Sturjik",
                like: 5,
                src: "https://img-cdn.tinkoffjournal.ru/-/wallpaper-engine-6.sg1sas.gif"
            },
            {
                id: 2,
                name: "Fufik",
                like: 6,
                src: "https://abrakadabra.fun/uploads/posts/2021-12/1640652085_1-abrakadabra-fun-p-pikselnie-oboi-na-pk-1.jpg"
            },
            {
                id: 3,
                name: "Hanorik",
                like: 6,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjl0W1Flk1pUu2QmVf6c-VNLeC5De0uW_lmnV31WYhb_n5cNiGdt6vDBGIRUIO5bpD58&usqp=CAU"
            },
            {
                id: 4,
                name: "Bublik",
                like: 6,
                src: "https://i.pinimg.com/originals/a0/4b/2c/a04b2c6b120ce2873753c70dff102e29.jpg"
            },
            {
                id: 5,
                name: "Korzhik",
                like: 6,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zlmOexJwuYYFgUrG0qeZ18BjHoiIltaKVGTaRfh-U3BoY5U4Y13pvDn5Uk-BIPdXAMA&usqp=CAU"
            }
        ]
    }
    ,

    DialogsPage: {
        MessagesValue: [
            {id: 1, incoming: 1, MessageValue: 'Hello'},
            {id: 2, incoming: 0, MessageValue: 'Where you from?'},
            {id: 3, incoming: 1, MessageValue: 'I from Canada'},
            {id: 4, incoming: 0, MessageValue: 'It is great!'},
            {id: 5, incoming: 1, MessageValue: 'I want travel to Canada'},
            {id: 6, incoming: 0, MessageValue: 'Welcome!'}
        ],

        UsersNameDialog: [
            {id: 1, name: 'Kira'},
            {id: 2, name: 'Mariya'},
            {id: 3, name: 'Isabel'},
            {id: 4, name: 'Larry'},
            {id: 5, name: 'Gleb'},
            {id: 5, name: 'Vova'}
        ]
    }
    ,

    Friends: {
        FriendsList: [
            {id: 1, name: 'Ziba', src: 'https://vsememy.ru/wp-content/cache/thumb/2c8f47557_320x200.jpg'},
            {
                id: 2,
                name: 'Buba',
                src: 'http://sun9-23.userapi.com/s/v1/if1/N3vjfCFSxqflvFe0EyKU4NB8GWWZMGDBpZOUhx2DGJpJl52SjiaUqx3sZoNIHQSFcMBgag.jpg?size=200x270&quality=96&crop=0,0,200,270&ava=1'
            },
            {
                id: 3,
                name: 'Zhuzha',
                src: 'https://steamuserimages-a.akamaihd.net/ugc/1027328734216725904/A78445AD26E88C8331629E52FC752B5B09253E71/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
            },
            {
                id: 4,
                name: 'Druka',
                src: 'https://img.freepik.com/premium-vector/woman-avatars-with-different-emotions-girl-with-spring-or-summer-flowers-and-a-wreath-in-black-hair_427567-1481.jpg'
            },
            {
                id: 5,
                name: 'Kret',
                src: 'https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg'
            }
        ]
    }

}
export let SendMessageState = (Message) => {

    let NewMessage = {id: 7, incoming: 0, MessageValue: Message};
    state.DialogsPage.MessagesValue.push(NewMessage);
    RenderTree(state, SendMessageState, AddLikeState, DisLikeState, AddPostState);

}

export let AddLikeState = (PostId) => {


    state.FlowbarPage.UsersNamePost[PostId].like++;
    RenderTree(state, SendMessageState, AddLikeState, DisLikeState, AddPostState);

}


export let DisLikeState = (PostId) => {
state.FlowbarPage.UsersNamePost[PostId].like--;
    RenderTree(state, SendMessageState, AddLikeState, DisLikeState, AddPostState);
}

export let AddPostState = (ImgSrc) => {
    let NewPost = {id: 6, name: 'My', like: 0, src: ImgSrc};
    state.FlowbarPage.UsersNamePost.push(NewPost);
    RenderTree(state, SendMessageState, AddLikeState, DisLikeState, AddPostState);
}

export default state;