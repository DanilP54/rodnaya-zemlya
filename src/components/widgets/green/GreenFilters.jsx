
import { Chip } from "@mantine/core";
import { useState } from "react";
import { rem } from '@mantine/core';
import { Input } from "semantic-ui-react";

function IconX() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>

}


const primaryColor = '#00FA9A'
const secondaryColor = '#d1f8e9'

function Demo({ title, genre, color }) {

    const [checked, setChecked] = useState(false);

    return (
        <Chip
            checked={genre?.checkedGenre ? genre.checkedGenre : checked}
            onChange={() => {
                if (genre?.setCheckedGenre) {
                    return genre.setCheckedGenre((v) => !v)
                }

                return setChecked((v) => !v)
            }}
            style={{
                fontWeight: 'bold',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                padding: '0 0 0 0'
            }}
            icon={genre?.checkedGenre || checked ? <IconX style={{ width: rem(10), height: rem(10) }} /> : 'none'}
            color={genre?.checkedGenre || checked ? color : ''}
            radius={'xs'}
            size="md"
            variant={genre?.checkedGenre || checked ? 'filled' : 'none'}
        // defaultChecked
        >
            {title}
        </Chip>

    );
}

export function GreenFilter() {

    const [checkedGenre, setCheckedGenre] = useState(false);
    const [checkedRecc, setCheckedRecc] = useState(false);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '80px', padding: '10px 68px', borderLeft: `6px solid ${primaryColor}`, borderBottom: `6px solid ${primaryColor}`, borderRight: `6px solid ${primaryColor}`, borderBottom: `6px solid ${primaryColor}`, backgroundColor: secondaryColor }}>
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Demo title={'По жанру'} genre={{ checkedGenre, setCheckedGenre }} color={primaryColor} />
                        <Demo title={'По рекомендациям'} genre={{ checkedRecc, setCheckedRecc }} color={primaryColor} />
                    </div>
                    <div style={{
                        width: '300px'
                    }}>
                        <Input fluid icon='search' placeholder='Add a genre, location or tag' />
                    </div>
                </div>
                {
                    checkedGenre && <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                        <Demo title={'Crime'} color={primaryColor} />
                        <Demo title={'Drama'} color={primaryColor} />
                        <Demo title={'Thriller'} color={primaryColor} />
                        <Demo title={'Sci-Fi'} color={primaryColor} />
                        <Demo title={'Action'} color={primaryColor} />
                    </div>
                }

            </div>

        </div>
    )
}