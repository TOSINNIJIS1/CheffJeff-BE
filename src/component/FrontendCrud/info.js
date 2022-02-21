import useFirestore from './Hooks/useFirestore';
import './AllText.css';
// import AllInfo from './AllInfo';
// import AllText from './AllText';
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import About from './Components/About';



export default function Info() {
    const { docs } = useFirestore('home');
    const { nav } = useFirestore('nav');
    const { about } = useFirestore('about');
    const { contact } = useFirestore('contact');
    const { footer } = useFirestore('footer');

    console.log(about)

    return (
        <ul className="container">
            <h3> Navigation </h3>
            { nav.map((doc) => (
                <li>
                    <NavBar doc={doc} id={doc.id} />
                </li>
            )) }
    
            <h3> Home </h3>
            { docs.map((doc) => (
                <li>
                    <Home doc={doc} id={doc.id} />
                </li>
            )) }

            <h3> About </h3>
            { about.map((doc) => (
                <li>
                    <About doc={doc} id={doc.id} />
                </li>
            )) }

            <h3> Contact </h3>
            { contact.map((doc) => (
                <li>
                    <About doc={doc} id={doc.id} />
                </li>
            )) }

            <h3> Footer </h3>
            { footer.map((doc) => (
                <li>
                    <About doc={doc} id={doc.id} />
                </li>
            )) }
        </ul>
    )
}
