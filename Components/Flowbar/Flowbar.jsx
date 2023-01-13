import Post from "./Post/Post";
import FlModule from './Flowbar.module.css'

let Posts = [
    {name: 'Ivan', id: 0},
    {name: 'Maria', id: 1}
];



let a = [
    {name: 'Kerjik', like: 3},
    {name: 'Sturjik', like: 5},
    {name: 'Fufik', like: 6}
    ];
let b = a.map( (ddd) => <Post name={ddd.name} like={ddd.like}/>  );

function Flowbar() {
    return (

        <div><h3>Lenta</h3>
            <Post name='Ivan' like='0'/>
            <Post name='Maria' like='6'/>
           {
               [<Post name='Sidor' like='3'/>, <Post name='Serik' like='2'/>]
           }
            {b}

        </div>


    );
}

export default Flowbar