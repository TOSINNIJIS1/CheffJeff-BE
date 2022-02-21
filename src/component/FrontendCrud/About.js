import React from 'react';
import AboutPage from './AboutPage';
import { firebase } from '../firebaseConfig'
// import EditPage from './EditPage';


const db = firebase.database()

export default function About() {
    let [abt, setAbt] = React.useState({});
    let [abtId, setAbtId] = React.useState('')


    React.useEffect(() => {
        db.ref('about').on('value', snapshot => {
            if (snapshot.val() != null)
                setAbt({
                    ...snapshot.val()
                })
            else 
                setAbt({})

        })
    }, [])

    // const desc = description.slice(0, 12).concat('...');



    const createOrUpdate = (event) => {
        if (abtId === '') {
            const aboutPageRef = db.ref("about")
            const newAboutPageRef = aboutPageRef.push();
            newAboutPageRef.set(event, err => {
                // if(err) window.warn(err, 'uh-oh')
                // else
                // setAbtId('')
            })
        } else {
            const aboutPageRef = db.ref(`about/${abtId}`)
            aboutPageRef.set(event, err => {
                // if(err) window.warn(err, 'uh-oh')
                // else
                // setAbtId('')
            })
        }
    }

    const onDelete = (event) => {
        if (window.confirm('are you sure you want to delete this data?')) {
            const aboutPageRef = db.ref(`about/${event}`)
            aboutPageRef.remove(err => {
                if(err) window.warn(err, 'uh-oh')
                else
                setAbtId('')
            })
        }
    }
    

    return (
        <section className='main-table'>
        <div className="col">
            <div className="col-md">
                <AboutPage {...({ createOrUpdate, abtId, abt })} />
            </div>
            <div className="container table-responsive py-5">
                <table class="table table-bordered table-hover">
                
                <thead className='thead-dark'>
                    <tr>
                    {/* <th scope="col">Header</th> */}
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Facebook</th>
                    <th scope="col">Twitter</th>
                    <th scope="col">LinkedIn</th>
                    <th scope="col">Instagram</th>
                    <th scope="col">footer</th>
                    <th scope="col">content</th>
                    <th scope="col">Settings</th>

                    </tr>
                </thead>
    
            <tbody>
                {
                Object.keys(abt).map(id => {
                    return (
                    <tr key={id}>
                        {/* {console.log(abt[id].header.length)} */}
                        {/* <td>{abt[id].header === undefined || abt[id].header === '' ? abt[id].header : abt[id].header.slice(0, 12).concat('...')}</td> */}
                        <td>{abt[id].name}</td>  
                        <td>{abt[id].description === undefined || abt[id].description.length < 5 ? abt[id].description : abt[id].description.slice(0, 6).concat('...')}</td>
                        <td>{abt[id].facebook}</td>
                        <td>{abt[id].twitter}</td>
                        <td>{abt[id].linkedin}</td>
                        <td>{abt[id].instagram}</td>  
                        <td>{ abt[id].footer === undefined || abt[id].footer.length < 5 ? abt[id].footer :  abt[id].footer.slice(0, 6).concat('...')}</td>  
                        <td>{abt[id].content}</td>  

                        <td>
                            <div >
                                <button buttonLabel="Edit" onClick={() => { setAbtId(id); window.scroll(0,0) }}>
                                    <i className="fas fa-pencil-alt"></i>
                                    
                                </button>
                                {' '}
                                <button onClick={() => onDelete(id)}>
                                    <i  color="danger"  className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    )})
                }
        </tbody>
    </table>                  
 
            </div>
        </div>
        </section>
    )
}
