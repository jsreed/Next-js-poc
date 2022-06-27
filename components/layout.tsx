import { Container } from '@chakra-ui/react'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from "./header";

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
    return (
        <Container>
            <Meta />
            <Header/>
            <main>{children}</main>
            <Footer />
        </Container>
    )
}

export default Layout