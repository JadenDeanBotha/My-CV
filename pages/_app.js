import Header from "../components/Header"

export default function App ({Component, pageProps, componentProps}) {
    return (
        <div>
            <Header />
               <Component {...pageProps} />
               <style global jsx>{`
                    body {
                        max-width: 1000px;
                        margin-left: auto;
                        margin-right: auto;
                        background: #CFD0D2;
                    }
               `}</style>
        </div>
    )
}