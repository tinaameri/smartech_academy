
import { DirectionProvider, MantineProvider } from '@mantine/core';
import {theme} from '@/theme/theme'
import ModalWithReducerProvider from '@/context/ModalProvider';
import { ModalsProvider } from '@mantine/modals';

const AppProviders = ({ children }) => {
    return (
        <ModalWithReducerProvider>
                <DirectionProvider initialDirection='rtl' detectDirection>

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