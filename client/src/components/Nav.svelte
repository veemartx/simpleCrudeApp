<script>
    import { Link } from "svelte-navigator";
</script>

<main>
    <div class="nav">
        <div class="liNave">
            <Link to="/">
                <div class="link">Home</div>
            </Link>
        </div>

        <div class="liNave">
            <Link to="/todos">
                <div class="link">My Todos</div>
            </Link>
        </div>
    </div>
</main>

<style>
    .nav {
        display: flex;
        justify-content: flex-start;
        padding: 1em;
        border-bottom: 1px solid rgba(59, 59, 59, 0.254);
    }

    .liNave {
        min-width: 5em;
        font-weight: 600;
    }

    .link {
        font-weight: 600;
    }
</style>
