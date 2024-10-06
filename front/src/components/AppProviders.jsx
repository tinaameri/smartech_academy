
import { DirectionProvider, MantineProvider } from '@mantine/core';
import theme from '@/theme'
import ModalWithReducerProvider from '@/context/ModalProvider';
import { ModalsProvider } from '@mantine/modals';

const AppProviders = ({ children }) => {
    return (
        <ModalWithReducerProvider>
                <DirectionProvider>

            <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
                <ModalsProvider>
                    {children}
                </ModalsProvider>
            </MantineProvider>
            </DirectionProvider>

        </ModalWithReducerProvider>

    );
};

export default AppProviders;