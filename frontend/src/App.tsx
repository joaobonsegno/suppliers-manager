import { ProvidersContextProvider } from 'hooks/useProvider';
import { ToastContainer } from 'react-toastify';
import { Container, GlobalStyles } from 'styles/global';
import { Routes } from './routes';

function App() {
    return (
        <>
            <ProvidersContextProvider>
                <Container>
                    <GlobalStyles />
                    <ToastContainer
                        position="top-right"
                        autoClose={6000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        theme='colored'
                        pauseOnHover
                    />
                    <Routes />
                </Container>
            </ProvidersContextProvider>
        </>
    );
}

export default App;
