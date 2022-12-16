import React, {useEffect, useRef} from "react";
import emailJs from "@emailjs/browser";

const SERVICE_ID = "service_5b0nylj"
const TEMPLATE_ID = "template_mv1yt2k"
const PUBLIC_KEY = "WQ5taQfL6FKKcor3J"

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState(new Date());

    let form = useRef()

    useEffect(() => {
        const onPageLoad = () => {
            emailJs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => console.log(result.text),
                    (error) => console.log(error.text));

            setMessage("")
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        emailJs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                    alert("Message sent !")
                    setName("")
                    setEmail("")
                    setMessage("")
                },
                (error) => alert(error.text));
    }

    return (
        <section id="contact" className="relative ">
            <div className="container p-3 flex sm:flex-nowrap flex-wrap bg-white rounded shadow-lg">
                <div
                    className="col-md-7 lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10  flex items-end justify-start relative">
                    <iframe className="absolute inset-0"
                            width="100%"
                            height="100%"
                            title="map"
                            frameBorder={0}
                            marginHeight={0}
                            marginWidth={0}
                            style={{filter: "opacity(1)"}}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d808.8926559553888!2d10.627151543188228!3d35.81047302454607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1665831025695!5m2!1sfr!2stn"
                    />
                    <div className="bg-white relative flex flex-wrap mx-6 rounded shadow-md">
                        <div className="p-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                                ADRESSE
                            </h2>
                            <p className="mt-1">
                                Rue el yosr, Cité el aouina<br/>
                                Tunisia, Sousse
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-blue-400 leading-relaxed mr-7">
                                jamelbd97@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                                TELEPHONE
                            </h2>
                            <p className="leading-relaxed">+216 55 636 500</p>
                        </div>
                    </div>
                </div>
                <form ref={form}
                    name="test"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full mt-8 md:mt-0">
                    <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contactez-moi
                    </h2>
                    <p className="leading-relaxed mb-1">
                        Envoyer moi un message rapidement.
                    </p>
                    <div className="relative mb-2">
                        <label htmlFor="name" className="leading-7 text-sm ">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-600 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-2">
                        <label htmlFor="email" className="leading-7 text-sm ">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-600 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-2">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-100 rounded border border-gray-300 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Envoyer
                    </button>
                </form>
            </div>
            <div className="p-5"></div>
        </section>
    );
}
