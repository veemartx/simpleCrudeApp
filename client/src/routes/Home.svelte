<script>
    import { Router, Route } from "svelte-navigator";
    import Home from "../components/Home.svelte";
    import Nav from "../components/Nav.svelte";
    import Todo from "../components/Todo.svelte";
    import Todos from "../components/Todos.svelte";
</script>

<main>
    <Router>
        <div class="wrapper">
            <div class="mainContainer">
                <div class="mainNav">
                    <Nav />
                </div>

                <div class="mainContent">
                    <!-- we have this router here so as to use one navigation on all the pages -->
                    <!-- home -->
                    <Route path="/*">
                        <Home />
                    </Route>
                    <!-- home -->

                    <!-- todos -->
                    <!-- the asteric means that the route has children -->
                    <Route path="/todos/*">
                        <!-- when in todos home show todos list  -->
                        <Route path="/">
                            <Todos />
                        </Route>

                        <!-- when viewing a single to do , show the to do component -->
                        <Route path="/td/*">
                            <Todo />
                        </Route>
                    </Route>
                    <!-- todos -->
                </div>
            </div>
        </div>
    </Router>
</main>

<style>
    .mainContainer {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        max-width: 80em;
        margin: 2em auto;
    }
</style>
