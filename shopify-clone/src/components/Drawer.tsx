import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import ShopifyLogo from "../assets/images/shopify-logo.svg";
import ShopifyLogoDark from "../assets/images/shopify-logo-light.svg";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    Select,
} from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi';

export function DrawerMenu({ isDark }: { isDark: boolean }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <Button variant='link' bgColor={'transparent'} ref={btnRef} onClick={onOpen}>
                <BiMenu size={'25px'} color={isDark ? 'white' : '#5C5F62'} />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={isDark ? "#fff" : "#0D1213" } />
                    <DrawerHeader bgColor={isDark ? "#0D1213" : "#fff"}>
                        <img src={isDark ? ShopifyLogo : ShopifyLogoDark} alt="shopify logo" />
                    </DrawerHeader>

                    <DrawerBody>
                        <Select placeholder='Menu'>
                            <option value='app'>App</option>
                            <option value='themes'>Themes</option>
                            <option value='storefronts'>Custom storefronts</option>
                            <option value='marketplaces'>Marketplaces</option>
                        </Select>
                        <Box gap={'10px'} display={'flex'} mt={'1rem'}>
                            <Button variant='link'>Log in</Button>
                            <Button variant='link'>Sign up</Button>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}