import {useState} from "react";
import {Field, Formik, Form,useFormik} from 'formik'
import './header.css'
import './content.css'
import './article.css'

const accessKey = "Y-KuSRgGlRJ0zmNgsmYo4MMzThht0c-h_F0kTCLabk0";

const fetchUnsplash = async ({search}) => {
    let url = `https://api.unsplash.com/search/photos?per_page=20&query=${search}`;

    const response = await fetch(url, {
        headers: {
            Authorization: `Client-ID ${accessKey}`,
        },
    });

    const data = await response.json();
    console.log(data);
    return data.results;
};

const App = () => {
    const [images, setImages] = useState([]);
    // console.log(images);

    const open = (url) => {
        window.open(url, "_blank");
    };

    const formik = useFormik({
        initialValues: {
            search: "",
        },
        // validate,
        onSubmit: (value) => {
            fetchUnsplash(value).then((data) => setImages(data))
        }
    });


    console.log(images)
    return (
        <div>
            <header>
                <form onSubmit={formik.handleSubmit}>
                    <input type="text" {...formik.getFieldProps("search")} />
                </form>
            </header>
            <div className='container'>
                <div className='center'>
                    {images.map(photo =>
                        <article key={photo.id} onClick={() => open(photo.links.html)}>
                            <img src={photo.urls.regular}/>
                            <p>{[photo.description, photo.alt_description].join('-')}</p>
                        </article>)}
                </div>
            </div>
        </div>
    );
}

export default App;
