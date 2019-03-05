import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice - Next.js App</title>
            <link href="https://bootswatch.com/4/litera/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <Navbar />
        <div class="container">
            {props.children}
        </div>
    </div>
);

export default Layout;