export const getStaticPaths = async () => {

    const res = await fetch('https://www.swapi.tech/api/people/')
    const data = await res.json()

    const paths = data.results.map(character => {
        return {
            params: {id: character.uid}
        }
    })

    return {
        paths,
        fallback: false
        // paths: [{}, {}, {params:{id: '123'}}]
    }
}

export const getStaticProps = async (context) => {

    const id = context.params.id
    const res = await fetch('https://www.swapi.tech/api/people/' + id)
    const data = await res.json()

    return {
        props: {
            character: data.result
        }
    }
}

const Details = ({ character }) => {
    return ( 
        <div>
            <h1>{ character.properties.name }</h1>
            <p>{ character.properties.height } cm</p>
            <p>{ character.properties.eye_color }</p>
            <p>{ character.properties.mass } kg</p>
        </div>
     );
}
 
export default Details;