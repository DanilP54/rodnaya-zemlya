import PodcastPlayer from './page'


export const PodcastBlock = ({handleSetTracks, radio}) => {

    return (
        <div style={{
            paddingTop: '50px',
        }}>
            <PodcastPlayer handleSetTracks={handleSetTracks} radio={radio} /> 
        </div>
    )
}