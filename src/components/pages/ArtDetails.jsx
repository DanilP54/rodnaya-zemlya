import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { Modal } from "semantic-ui-react"
import { Button, Image, Text, rem } from "@mantine/core"
import { useEffect, useState, useLayoutEffect } from 'react';
import { Carousel, useAnimationOffsetEffect } from "@mantine/carousel"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";




const SectionWrapper = styled.main`
    padding: 80px 40px 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    height: 100%;

`



function ImageMap({ setOpen, setActive, data }) {


    return (
        <>
            {
                data.map((image, index) => {
                    return (
                        <div style={{
                            cursor: 'zoom-in',
                        }} key={index}

                        >
                            <Button

                                tabIndex={'-1'}
                                style={{
                                    cursor: 'zoom-in',
                                    outline: 'none'
                                }}
                                p={'0'}
                                bg={'transparent'}
                                w={'340px'}
                                h={'350px'}
                                onClick={() => {
                                    setActive(index)
                                    setOpen(true)
                                }}>
                                <img style={{
                                    width: '340px',
                                    height: '350px',
                                }} src={image} />
                            </Button>
                        </div >
                    )
                })
            }
        </>
    )
}


function Carusel({ active, data }) {
    const [embla, setEmbla] = useState(null);
    const TRANSITION_DURATION = 400;

    useAnimationOffsetEffect(embla, TRANSITION_DURATION);

    const slides = data.map((url) => {
        return <Carousel.Slide style={{
            display: 'flex',
            justifyContent: 'center',

        }} key={url}><Image style={{ width: '900px', height: '600px' }} src={url} /></Carousel.Slide>
    })



    return (
        <>
            <Carousel style={{
                'controls': {
                    backgroundColor: 'transparent'
                }
            }} getEmblaApi={setEmbla} loop initialSlide={active ?? 0} maw={'100%'}>
                {slides}
            </Carousel>
        </>
    );
}



export default function ArtDetailsSection({ title, count, author, data }) {

    const { pathname } = useLocation()

    const [open, setOpen] = useState(false)

    const [active, setActive] = useState(0)

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <SectionWrapper>
                <header style={{
                    display: 'flex',
                    justifySelf: 'end'
                }}>
                    <Text style={{
                        display: 'inline-block',
                        marginLeft: 'auto',
                    }} size="18px" fw={'400'} c='dimmed'>{author}</Text>
                </header>
                <section style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div>
                        <Text size={'40px'} fw={500}>{title}</Text>
                        <Text style={{
                            textAlign: 'center'
                        }} size="20px" fw={'500'} mt={'20px'}>{count} изображений</Text>
                    </div>
                </section>
                <section style={{
                    marginTop: '50px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '40px',
                }}>
                    <ImageMap data={data} setActive={setActive} setOpen={setOpen} />
                    <Modal
                        basic
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        size='fullscreen'
                        closeIcon={<IoCloseCircleSharp size={30} style={{ color: 'gray', cursor: 'pointer' }} />}
                    // trigger={<Button>Basic Modal</Button>}
                    >
                        <Carusel data={data} active={active} />
                    </Modal>

                </section>
            </SectionWrapper>
        </>
    )
}