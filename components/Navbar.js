import Link from 'next/link';

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">BitzPrice</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link href="/">
                            <a class="nav-link" href="#">Home</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Work</a>
                    </li>
                    <li class="nav-item">
                        <Link href="/about">
                            <a class="nav-link" href="#">About Us</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
        
        /*
        
        <style jsx>
            {`
        ul {
            background: #333;
            color: #fff;
            list-style: none;
            display: flex;
        }
        ul li {
            font-size: 18px;
            margin-right: 20px;
        }
        ul li a {
            color: #fff;
            text-decoration: none;
        }
        `}
        </style>
        */