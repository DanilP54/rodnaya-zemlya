
import { Chip, Group } from "@mantine/core";
import { useEffect, useState } from "react";
import { rem } from '@mantine/core';
import { Input } from "semantic-ui-react";


function IconX() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>

}


const primaryColor = '#CD5C5C'
const secondaryColor = '#f0e2e2'

function CustomChip({ title, color, checkedGenre }) {

    const [checked, setChecked] = useState(false);
    console.log(checked)
    useEffect(() => {
        if (!checkedGenre) {
            setChecked(false);
        }

        return () => {
            setChecked(false)
        }
    }, [checkedGenre]);

    const handleClick = () => {
        if (checked) {
            setChecked(false)
        } else {
            setChecked(true)
        }
    };

    return (
        <Chip
            value={title}
            checked={checked}
            onClick={handleClick}
            style={{
                fontWeight: 'bold',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                padding: '0 0 0 0'
            }}
            icon={<IconX />}
            color={checked ? color : ''}
            radius={'xs'}
            size="md"
            variant={checked ? 'light' : 'none'}

        >
            {title}
        </Chip >

    );
}


function ChipGenre({ title, genre, color }) {
    const [checked, setChecked] = useState(false);

    return (
        <Chip
            value={title}
            checked={checked}
            onChange={() => {
                genre.setCheckedGenre((v) => !v)
                setChecked((v) => !v)
            }}
            style={{
                fontWeight: 'bold',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                padding: '0 0 0 0'
            }}
            icon={<IconX />}
            color={checked ? color : ''}
            radius={'xs'}
            size="md"
            variant={checked ? 'light' : 'none'}
        >
            {title}
        </Chip>

    );
}

function ChipRecommendations({ title, genre, color }) {
    const [checked, setChecked] = useState(false);

    return (
        <Chip
            value={title}
            checked={checked}
            onChange={() => {
                genre.setCheckedRecc((v) => !v)
                setChecked((v) => !v)
            }}
            style={{
                fontWeight: 'bold',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                padding: '0 0 0 0'
            }}
            icon={<IconX />}
            color={checked ? color : ''}
            radius={'xs'}
            size="md"
            variant={checked ? 'light' : 'none'}
        >
            {title}
        </Chip>

    );
}

export function RedFilterMusic({ setValue }) {

    const [checkedGenre, setCheckedGenre] = useState(false);
    const [checkedRecc, setCheckedRecc] = useState(false);

    useEffect(() => {
        if (!checkedGenre) {
            setValue([])
        }
    }, [checkedGenre])

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '128px', padding: '10px 68px', borderLeft: `6px solid ${primaryColor}`, borderBottom: `6px solid ${primaryColor}`, borderRight: `6px solid ${primaryColor}`, borderBottom: `6px solid ${primaryColor}`, backgroundColor: secondaryColor }}>
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <ChipGenre title={'По жанру'} genre={{ checkedGenre, setCheckedGenre }} color={primaryColor} />
                        <ChipRecommendations title={'По рекомендациям'} genre={{ checkedRecc, setCheckedRecc }} color={primaryColor} />
                    </div>
                    <div style={{
                        width: '300px'
                    }}>
                        <Input fluid icon='search' placeholder='Add a genre, location or tag' />
                    </div>
                </div>

                {
                    checkedGenre && <Chip.Group onChange={setValue} multiple><Group gap={'10px'} mt={'10px'} align="center">
                        <CustomChip title={'Electronic'} color={primaryColor} checkedGenre={checkedGenre}  />
                        <CustomChip title={'Rock'} color={primaryColor} checkedGenre={checkedGenre}  />
                        <CustomChip title={'Ambient'} color={primaryColor} checkedGenre={checkedGenre}  />
                        <CustomChip title={'Experimental'} color={primaryColor} checkedGenre={checkedGenre}  />
                        <CustomChip title={'Metal'} color={primaryColor} checkedGenre={checkedGenre} />
                    </Group> </Chip.Group>
                }

            </div >

        </div >
    )
} 