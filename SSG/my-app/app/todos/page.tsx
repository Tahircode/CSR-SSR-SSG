export default async function Blog(){
    const res = await fetch('https://dummyjson.com/todos',{
        // next: { revalidate: 1 }
    })

    const data = await res.json();
    const todos = data.todos;

    return <div>
        {todos.map((todo:any)=> 
        <div key = {todo.id}>
            {todo.todo}
            </div>
        )}
    </div>

}