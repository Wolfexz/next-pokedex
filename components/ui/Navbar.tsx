import NextLink from 'next/link';
import { Button, Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  
  const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        position: 'sticky',
        top: '0',
        zIndex: 100,
        boxShadow: '-2px 0.1px 28px -14px rgba(255,255,255,0.7)',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '10px 40px',
        backgroundColor: theme?.colors.gray900.value
    }}>

        <NextLink href="/" passHref>
          <Link>
            {/* <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text> */}
            <Image 
              src="/img/pokemon.svg"
              width={180}
              height={60}
              alt="Pokémon logo"
            />
          </Link>
        </NextLink>
        
        <Spacer css={{ flex: 1}}/>

        <NextLink href="/favorites" passHref>
          <Link>
            {/* <Text color="white">Favoritos</Text> */}
            <Button shadow color="gradient" auto>Favoritos</Button>
          </Link>
        </NextLink>
    </div>
  )
}
