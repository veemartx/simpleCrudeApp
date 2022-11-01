<!-- author _vee -->
<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import { Link } from "svelte-navigator";
    import { apiBaseUrl } from "../config/api.config";

    let todos = [];

    // get todos
    const getTodos = () => {
        // get todos
        axios
            .get(apiBaseUrl + "todos")
            .then((res) => {
                todos = res.data;

                console.log(todos);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    onMount(() => {
        getTodos();
    });
</script>

<main>
    <div class="wrapper">
        <div class="titleBar">
            <div class="title">My Todos</div>
            <div class="action">
                <button class="addToDoButton">+ Add Todo </button>
            </div>
        </div>

        <div class="todosContainer">
            <table class="ui striped unstackable very basic table">
                <thead>
                    <tr>
                        <th> No </th>
                        <th> Title </th>
                        <th> Todo Date </th>
                        <th> Status </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {#each todos as todo, i}
                        <tr>
                            <td>
                                {i + 1}
                            </td>
                            <td>
                                {todo.title}
                            </td>
                            <td>
                                {todo.todoDate}
                            </td>
                            <td>
                                {todo.status}
                            </td>

                            <td>
                                <Link to={"/todos/td/" + todo.id}>View</Link>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</main>

<style>
    .wrapper {
        padding: 1em;
    }

    .titleBar {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(128, 128, 128, 0.185);
    }
    .title {
        font-weight: bold;
    }

    button {
        border: 1px solid crimson;
        margin: 5px;
        font-size: 12px;

        color: crimson;
    }

    .todosContainer {
        padding-top: 1em;
    }
</style>
