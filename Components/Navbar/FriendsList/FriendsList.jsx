import CSS from './FriendsList.module.css';

function FriendsList() {
    return (
        <div className={CSS.FriendsList}>
            <div><img src='https://vsememy.ru/wp-content/cache/thumb/2c8f47557_320x200.jpg'/>friend1</div>
            <div><img src="http://sun9-23.userapi.com/s/v1/if1/N3vjfCFSxqflvFe0EyKU4NB8GWWZMGDBpZOUhx2DGJpJl52SjiaUqx3sZoNIHQSFcMBgag.jpg?size=200x270&quality=96&crop=0,0,200,270&ava=1"></img>friend2</div>
            <div><img src="https://steamuserimages-a.akamaihd.net/ugc/1027328734216725904/A78445AD26E88C8331629E52FC752B5B09253E71/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />frien3</div>
            <div><img src='https://img.freepik.com/premium-vector/woman-avatars-with-different-emotions-girl-with-spring-or-summer-flowers-and-a-wreath-in-black-hair_427567-1481.jpg'/>friend1</div>
            <div><img src='https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg'/>friend1</div>
        </div>
    );
}

export default FriendsList;