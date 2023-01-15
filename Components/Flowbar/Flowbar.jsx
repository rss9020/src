import Post from "./Post/Post";
import FlModule from './Flowbar.module.css'

let Posts = [
    {name: 'Ivan', id: 0},
    {name: 'Maria', id: 1}
];

//первые метод хранения данных. можно удалить, перенесено в index.js
/*let a = [
    {id: 1, name: 'Kerjik', like: 3},
    {id: 2, name: 'Sturjik', like: 5},
    {id: 3, name: 'Fufik', like: 6},
    {id: 4, name: 'Hanorik', like: 6},
    {id: 5, name: 'Bublik', like: 6}
];

let b = a.map((ddd) => <Post name={ddd.name} like={ddd.like}/>);*/


function Flowbar(props) {
    let b1 = props.UsersNamePostProps.map((ddd) => <Post name={ddd.name} like={ddd.like}/>);
    return (
        <div className={FlModule.Flowbar}>


            {b1}
        </div>


    );
}

export default Flowbar