import { useState, useEffect } from "react"

export default function AboutPage({ createOrUpdate, abtId, abt }) {
    const [aboutPage, setAboutPage] = useState({
        name: "Legendary Jeff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        footer: '',
        content: ''

    })

    useEffect(() => {
        if (abtId === '')
        setAboutPage({
            ...aboutPage
        })

        else 
        setAboutPage({
            ...abt[abtId]
        })
        
        // eslint-disable-next-line
    }, [abt, abtId]) 
    

    const onChange = event => {
        var { name, value } = event.target
        setAboutPage({
            ...aboutPage, [name]: value,
        });
    };


    const onSubmit = (event) => {
        event.preventDefault();
        createOrUpdate(aboutPage)
    }

    return (
        <div className='aboutContainer' >
            <div className="title">
                {/* <h1> ChefJeff Admin </h1> */}
                <h2> UPDATE </h2>
                <p> Make sure you take atleast 8hrs rest a day, your body will thank you -mr. V </p>
            </div>

            <form autoComplete="off" onSubmit={onSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="name" class="form-control" id="name" placeholder="Name" 
                    value={aboutPage.name} 
                    name='name'
                    onChange={onChange}
                    required
                    />
                    </div>
                    <div class="form-group col-md-6">
                    <label for="content">Content</label>
                    <input type="text" class="form-control" id="content" placeholder="content" 
                    value={aboutPage.content} 
                    name={aboutPage.content}
                    onChange={onChange}
                    name="content"
                    required
                    />
                    </div>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea type="text" class="form-control" id="description" placeholder="Twiter Handle" 
                    value={aboutPage.description} 
                    name='description'
                    onChange={onChange}
                    required
                    />
                </div>

                <div  class='form-row'>
                    <div class="form-group col-md-6">
                        <label for="instagram">Instagram</label>
                        <input type="text" class="form-control" id="instagram" placeholder="Instagram Handle" 
                        value={aboutPage.instagram} 
                        name='instagram'
                        onChange={onChange}
                        required
                        />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="LinkedIn">LinkedIn</label>
                        <input type="text" class="form-control" id="LinkedIn" placeholder="LinkedIn Handle" 
                        value={aboutPage.linkedin} 
                        name='linkedin'
                        onChange={onChange}
                        required
                        />
                    </div>
                </div>


                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="footer">Footer</label>
                        <input type="text" class="form-control" id="footer" 
                        value={aboutPage.footer}
                        name='footer' 
                        onChange={onChange}
                        required
                        />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="facebook">Facebook</label>
                        <input type="text" class="form-control" id="facebook" placeholder="Facebook Handle" 
                        value={aboutPage.facebook} 
                        name='facebook'
                        onChange={onChange}
                        required
                        />
                    </div>
                    <div class="form-group col-md-2">
                        <label for="twitter">Twitter</label>
                        <input type="text" class="form-control" id="twitter" placeholder="Twitter Handle" 
                        value={aboutPage.twitter} 
                        name='twitter'
                        onChange={onChange}
                        required
                        />
                    </div>
                </div>
        
                <div className="form-group">
                    <input type="submit" value={abtId === '' ? "Save" : "Update"} className="btn btn-primary btn-block" />
                </div>            
            </form>
        </div>
    )
}
