import App from 'next/app';
import  Page from '../components/Page';
class MyApp extends App {
            static async getInitialProps({ Component, ctx}){
                let pageProps = {};

                if (Component.getInitialProps){
                    pageProps = await Component.getInitialProps(ctx);
                }
                return { pageProps };
            }

            render(){
                const { Component, pageProps} = this.props;

                return(
                    <Page>
                      <Component {...pageProps}/>
                    </Page>

                )
            }
}


export default MyApp;